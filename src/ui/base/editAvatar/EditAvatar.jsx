import Loader from "assets/loaderImage.jpg"
import { useAuth } from "context/AuthContext"
import { useEffect, useRef, useState } from "react"
import ReactCrop, {
  centerCrop,
  convertToPixelCrop,
  makeAspectCrop,
} from "react-image-crop"
import ReactWebcam from "react-webcam"
import styled from "styled-components"
import { CameraIcon, PenIcon } from "ui/icons"
import { ProfileIcon } from "ui/icons/inputIcons/ProfileIcon"
import { themeColor, themeFontSize } from "ui/theme"
import {
  dataURItoFile,
  getAvatarUrl,
  resizeFile,
  setCanvasPreview,
} from "utils"
import { AppButton } from "../appButton/AppButton"
import { HelperText } from "../helperText/HelperText"
import { Modal } from "../modal/Modal"

const ASPECT_RATIO = 1
const MIN_DIMENSION = 150

export const EditAvatar = ({ avatar, onImageUpload, firstName, variant }) => {
  const { userData } = useAuth()
  const [open, setOpen] = useState(false)
  const [imageLoading, setImageLoading] = useState(false)
  const [avatarUrl, setAvatarUrl] = useState(avatar)

  useEffect(() => {
    if (avatar) {
      setAvatarUrl(avatar)
    }
  }, [avatar])

  const updateAvatar = async (imgSrc) => {
    const newCroppedImage = dataURItoFile(imgSrc)

    try {
      const image = await resizeFile(newCroppedImage)
      setAvatarUrl(image)
      onImageUpload(image)
    } catch (err) {
      setAvatarUrl(newCroppedImage)
      onImageUpload(newCroppedImage)
    }
  }

  const closeModal = () => {
    setUseWebcam(false)
    setOpen(false)
  }

  // image selection and cropping
  const imgRef = useRef(null)
  const previewCanvasRef = useRef(null)
  const [imgSrc, setImgSrc] = useState("")
  const [crop, setCrop] = useState()
  const [useWebcam, setUseWebcam] = useState(false)
  const webcamRef = useRef(null)

  const onSelectFile = (e) => {
    setUseWebcam(false)
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (t) => {
      const blob = new Blob([new Uint8Array(t.target.result)], {
        type: file.type,
      })
      setImgSrc(URL.createObjectURL(blob))
      setImageLoading(true)
    }

    reader.readAsArrayBuffer(file)
    onImageLoad(e)
  }

  const onImageLoad = (e) => {
    setImageLoading(false)
    const { width, height } = e.currentTarget
    const cropWidthInPercent = (MIN_DIMENSION / width) * 100

    const crop = makeAspectCrop(
      {
        unit: "%",
        width: 50,
      },
      ASPECT_RATIO,
      width,
      height
    )
    const centeredCrop = centerCrop(crop, width, height)
    setCrop(centeredCrop)
  }

  const captureWebcamImage = () => {
    const imageSrc = webcamRef.current.getScreenshot()
    setImgSrc(imageSrc)
    setUseWebcam(false)
  }

  return (
    <>
      <AvatarWrapper>
        <div>
          <EditAvatarContainer onClick={() => setOpen(true)}>
            {avatarUrl ? (
              <Avatar
                letter={userData?.first_name?.[0]}
                src={
                  typeof avatarUrl === "string"
                    ? getAvatarUrl(avatar)
                    : URL.createObjectURL(avatarUrl)
                }
              />
            ) : (
              <HelperText size='h2' sizeMobile='h2'>
                {userData?.first_name?.[0]}
              </HelperText>
            )}
            <EditButtonIcon>
              <PenIcon />
            </EditButtonIcon>
          </EditAvatarContainer>
        </div>
        {variant ? null : (
          <EditAvatarImageContainer onClick={() => setOpen(true)}>
            <CameraIcon />
            <HelperText
              size='regular'
              weight={600}
              style={{ cursor: "pointer" }}>
              Upload your photo
            </HelperText>
          </EditAvatarImageContainer>
        )}
      </AvatarWrapper>
      <div className='upload-file'>
        <Modal show={open} handleClose={closeModal} maxWidth={500}>
          <>
            {imageLoading && (
              <FallbackImagePicker style={{ PointerEvents: "none" }}>
                <EditAvatarImageToCrop
                  src={Loader}
                  alt='loader image'
                  style={{ maxHeight: "100px", maxWidth: "100px" }}
                />
              </FallbackImagePicker>
            )}
            {imgSrc && (
              <EditAvatarImageCropContainer>
                <ReactCrop
                  crop={crop}
                  onChange={(pixelCrop, percentCrop) => setCrop(percentCrop)}
                  circularCrop
                  keepSelection
                  ruleOfThirds
                  aspect={ASPECT_RATIO}>
                  <EditAvatarImageToCrop
                    ref={imgRef}
                    src={imgSrc}
                    alt='Upload'
                    onLoad={onImageLoad}
                    style={{ maxHeight: "500px", maxWidth: "100%" }}
                  />
                </ReactCrop>

                <ButtonContainerRight>
                  <AppButton
                    className='save-btn'
                    onClick={() => {
                      setCanvasPreview(
                        imgRef.current, // HTMLImageElement
                        previewCanvasRef.current, // HTMLCanvasElement
                        convertToPixelCrop(
                          crop,
                          imgRef.current.width,
                          imgRef.current.height
                        )
                      )
                      const dataUrl = previewCanvasRef.current.toDataURL()
                      updateAvatar(dataUrl)
                      setImgSrc("")
                      closeModal()
                    }}>
                    Save
                  </AppButton>
                </ButtonContainerRight>
              </EditAvatarImageCropContainer>
            )}

            {useWebcam && (
              <EditAvatarImageCropContainer>
                <ReactWebcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat='image/jpeg'
                  height={100 + "%"}
                  width={100 + "%"}
                />
                <ButtonContainerFull>
                  <AppButton onClick={captureWebcamImage}>Capture</AppButton>
                </ButtonContainerFull>
              </EditAvatarImageCropContainer>
            )}

            {imgSrc || useWebcam ? null : (
              <FallbackImagePicker>
                <ProfileIcon width={150} height={150} />
              </FallbackImagePicker>
            )}

            {crop && (
              <canvas
                ref={previewCanvasRef}
                style={{
                  display: "none",
                }}
              />
            )}
            <div style={{ padding: ".4rem" }}></div>
            {!imgSrc ? (
              <div
                className='upload-buttons'
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}>
                <EditAvatarUploadLabel htmlFor='upload'>
                  <span>Upload Photo</span>
                  <input
                    hidden
                    id='upload'
                    type='file'
                    accept='image/*'
                    onChange={onSelectFile}
                  />
                </EditAvatarUploadLabel>
                <EditAvatarUploadLabel
                  onClick={() => {
                    setUseWebcam(true)
                    setImgSrc(false)
                  }}>
                  <span>Take Photo</span>
                </EditAvatarUploadLabel>
              </div>
            ) : (
              ""
            )}
          </>
        </Modal>
      </div>
    </>
  )
}

const FallbackImagePicker = styled.div`
  width: 100%;
  height: 240px;
  color: ${themeColor("border")};
  border-width: 2px;
  border-style: dashed;
  border-color: rgba(85, 77, 241, 0.5);
  border-radius: 5px;
  display: grid;
  place-items: center;
`

const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 50px;
  }
`

const EditAvatarContainer = styled.button`
  padding: 0px;
  margin: 0px;
  outline: none;
  border: none;
  width: 110px;
  height: 110px;
  border-radius: 99px;
  position: relative;
  background-color: ${themeColor("lightBlue")};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: Montserrat, sans-serif;
`

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 99px;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: ${({ letter }) => `"${letter ?? " "}"`};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: ${themeColor("txt")};
    font-size: ${themeFontSize("h2")};
    font-weight: 700;
    text-align: center;
    border-radius: 99px;
    background-color: ${themeColor("border")};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const EditAvatarFallback = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 99px;
  object-fit: cover;
`

const EditAvatarImageContainer = styled.div`
  padding: 20px 38px;
  background-color: ${themeColor("border")};
  border-width: 2px;
  border-style: dashed;
  border-color: rgba(85, 77, 241, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  cursor: pointer;
`

const EditAvatarImageCropContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 100%;
`

const EditAvatarUploadLabel = styled.label`
  cursor: pointer;
  padding-inline: 1rem;
  padding-block: 0.5rem;
  border-radius: 0.2rem;
  width: fit-content;
  background-color: ${themeColor("lightBlue")};
  color: ${themeColor("blue")};
  height: 51px;
  display: grid;
  place-items: center;
`

const EditAvatarImageToCrop = styled.img`
  max-height: 400px;
  object-fit: cover;
  border-radius: 1rem;
  overflow: hidden;
  max-height: 400px;
  max-width: 400px;
`

const EditAvatarButton = styled.button`
  all: unset;
  cursor: pointer;
  padding-inline: 1rem;
  border-radius: 0.5rem;
  width: fit-content;
  height: 40px;
  margin-left: auto;
  background-color: ${themeColor("pink")};
  color: ${themeColor("white")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : null)};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  @media (max-width: 640px) {
    margin-top: 10px;
  }
`
const ButtonContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  & > button {
    width: fit-content;
  }
`

const ButtonContainerFull = styled.div`
  display: flex;
  width: 100%;
  & > button {
    width: 100%;
    margin: 0.5rem 0 0.5rem 0;
  }
`

const EditButtonIcon = styled.div`
  width: 35px;
  height: 35px;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: ${themeColor("blue")};
  color: ${themeColor("white")};
  border-radius: 99px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    width: 15px;
    height: 15px;
  }
`
