import { useMutation } from "@tanstack/react-query"
import { emailDuplicity, sendOTP } from "api/auth.api.ts"
import { useCreateAccount } from "context/CreateAccountContext.jsx"
import { useToast } from "hooks"
import { useEffect, useState } from "react"
import { geocodeByPlaceId } from "react-google-places-autocomplete"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { SignUpDetailType } from "types/auth.type.ts"
import { GoogleSuggestion } from "types/google.type.ts"
import { AppButton } from "ui/base/appButton/AppButton.jsx"
import { AutoCompleteInput } from "ui/base/autoCompleteInput/AutoCompleteInput"
import { HelperText } from "ui/base/helperText/HelperText"
import { InputSignUp } from "ui/base/InputSignUp/InputSignUp"
import { EmailIcon, LockIcon, PhoneIcon, ProfileIcon } from "ui/icons/index.js"
import {
  capitalizeFirstLetter,
  emailValidation,
  formatPhoneNumber,
  passwordValidation,
  phoneNumberValidation,
} from "utils"
import { pixelTrackEvent } from "utils/facebookPixel.js"

const MSG_PASSWORD_VALIDATION =
  "Password must be a combination of 6-20 characters with at least 1 upper case, 1 lower case, 1 numeric and 1 special character. Spaces are not allowed."

export const Signup = ({ setActiveTab, setLoginModal, handleClose }) => {
  const navigate = useNavigate()
  const [phoneLength, setPhoneLength] = useState(10)

  const { formData, updateFormData, updateCoordinate, address, setAddress } =
    useCreateAccount()

  const [errors, setErrors] = useState({})

  const onConfirmBlur = () => {
    if (formData.confirmPassword.length > 0) {
      if (formData.password !== formData.confirmPassword) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: { value: true, text: "Password should match" },
          confirmPassword: {
            value: true,
            text: "Password should match",
          },
        }))
      } else if (!passwordValidation(formData.password)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: { value: true, text: MSG_PASSWORD_VALIDATION },
          confirmPassword: {
            value: true,
            text: MSG_PASSWORD_VALIDATION,
          },
        }))
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: { value: false, text: "" },
          confirmPassword: { value: false, text: "" },
        }))
      }
    }
  }

  const changeFormData = (key, value) => {
    const isError = value?.trim() === "" || value === undefined
    updateFormData(key, value)
    if (key === "phone") {
      value?.startsWith("+1") ? setPhoneLength(15) : setPhoneLength(12)
      updateFormData(key, formatPhoneNumber(value))
    }

    if (key !== "addrs2") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [key]: {
          value: isError,
          text: isError ? `${capitalizeFirstLetter(key)} must be filled` : "",
        },
      }))
    }

    if (key === "password" || key === "confirmPassword") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: { value: false, text: "" },
        confirmPassword: { value: false, text: "" },
      }))
    }
  }

  const initLocation = () => {
    changeFormData("addrs1", "")
    changeFormData("addrs2", "")
    changeFormData("zipCode", "")
    changeFormData("city", "")
    changeFormData("state", "")
    updateCoordinate({ latitude: 0, longitude: 0 })
    setAddress(null)
  }

  const onChangeAddress = (newAddress: GoogleSuggestion) => {
    if (newAddress?.label === formData.addrs1) {
      return
    }

    setAddress(newAddress)

    if (!newAddress && formData.addrs1) {
      initLocation()
    } else if (newAddress) {
      changeFormData("addrs1", newAddress.label)
    }
  }

  const onLocationChanged = (details: google.maps.GeocoderResult[]) => {
    if (details) {
      updateCoordinate({
        latitude: details[0].geometry.location.lat() || 0,
        longitude: details[0].geometry.location.lng() || 0,
      })

      const components = details[0].address_components
      const getComponent = (type: string) =>
        components.find((component) => component.types.includes(type))
          ?.long_name || ""

      changeFormData("state", getComponent("administrative_area_level_1"))
      changeFormData(
        "city",
        getComponent("sublocality_level_1") || getComponent("locality")
      )
      changeFormData("zipCode", getComponent("postal_code").slice(0, 5))

      if (!getComponent("postal_code")) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          zipCode: { value: true, text: "Enter a valid zip code" },
        }))
      }
      if (!getComponent("locality") && !getComponent("sublocality_level_1")) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          city: { value: true, text: "Enter a valid zip code" },
        }))
      }
    } else {
      initLocation()
    }
  }

  const validateForm = (localFormData: SignUpDetailType): boolean => {
    const newErrors = {}
    Object.keys(localFormData).forEach((key) => {
      if (key !== "addrs2" && localFormData[key]?.trim() === "") {
        const mapObj = {
          addrs1: "address",
          confirmPassword: "confirm password",
        }
        newErrors[key] = {
          value: true,
          text: `${capitalizeFirstLetter(mapObj[key] ?? key)} must be filled`,
        }
      }

      if (
        key === "zipCode" &&
        localFormData.zipCode?.trim().length > 0 &&
        localFormData.zipCode?.trim().length < 5
      ) {
        newErrors[key] = { value: true, text: "Enter a valid zip code" }
      }

      if (key === "email" && !emailValidation(localFormData.email)) {
        newErrors[key] = {
          value: true,
          text:
            localFormData.email?.length > 0
              ? "Enter correct email"
              : "Email must be filled",
        }
      }

      if (
        key === "phone" &&
        localFormData.phone.length !== 12 &&
        localFormData.phone.length !== 15
      ) {
        newErrors[key] = { value: true, text: "Enter correct phone number" }
      }

      if (
        (key === "password" || key === "confirmPassword") &&
        localFormData.password !== localFormData.confirmPassword
      ) {
        newErrors["password"] = { value: true, text: "Password should match" }
        newErrors["confirmPassword"] = {
          value: true,
          text: "Password should match",
        }
      } else if (
        key === "password" &&
        !passwordValidation(localFormData.password)
      ) {
        newErrors["password"] = { value: true, text: MSG_PASSWORD_VALIDATION }
        newErrors["confirmPassword"] = {
          value: true,
          text: MSG_PASSWORD_VALIDATION,
        }
      }
    })

    setErrors((prevErrors) => ({
      ...prevErrors,
      ...newErrors,
    }))

    return Object.keys(newErrors).length === 0
  }

  const { mutate: requestOTP, isLoading: requestOTPLoading } = useMutation({
    mutationFn: sendOTP,
    onSuccess: () => {
      setActiveTab("otp")
    },
    onError: (err: any) => {
      useToast("error", err?.response?.data?.message || "Error: requesting OTP")
    },
  })

  const { mutate: checkEmail, isLoading: checkEmailLoading } = useMutation({
    mutationFn: emailDuplicity,
    onSuccess: () => {
      requestOTP(formData.email)
    },
    onError: () => {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: {
          value: true,
          text: "Email already exists",
        },
      }))
    },
  })

  const onSubmit = () => {
    pixelTrackEvent("Create-account: Clicked on Next")
    const isValid = validateForm(formData)
    if (isValid) {
      checkEmail(formData?.email?.toLowerCase() || "")
    }
  }

  useEffect(() => {
    pixelTrackEvent("Enter Create account page")
  }, [])

  return (
    <CreateAccountContainer className='form-card'>
      <HelperText
        size='large'
        sizeMobile='regular'
        centerMobile
        center
        weight={600}>
        Create Account
      </HelperText>
      <div style={{ padding: "0.5rem" }}></div>
      <CreateAccountRow>
        <InputSignUp
          id='firstName'
          value={formData.firstName}
          setValue={(input) => changeFormData("firstName", input)}
          placeholder='First Name'
          icon={<ProfileIcon />}
          maxLength={15}
          isError={errors?.firstName?.value}
          errorText={"Enter first name"}
          placeholderColor='txt'
        />
        <InputSignUp
          id='lastName'
          value={formData?.lastName}
          setValue={(input) => {
            changeFormData("lastName", input)
          }}
          placeholder='Last Name'
          icon={<ProfileIcon />}
          maxLength={15}
          isError={errors?.lastName?.value}
          errorText={"Enter last name"}
          placeholderColor='txt'
        />
      </CreateAccountRow>

      <AutoCompleteInput
        address={address}
        placeholder='Address'
        onChange={(e: GoogleSuggestion) => {
          if (e) {
            geocodeByPlaceId(e.value.place_id)
              .then((results) => {
                onChangeAddress(e)
                onLocationChanged(results)
                return
              })
              .catch((error) => {
                initLocation()
              })
            return
          }
          setAddress({ label: "", value: "" })
          initLocation()
        }}
        isError={errors?.addrs1?.value || errors.zipCode?.value}
        errorText={errors?.addrs1?.text || errors.zipCode?.text}
        placeholderColor='txt'
      />

      <CreateAccountRow>
        <InputSignUp
          id='email'
          value={formData.email}
          placeholder='Email'
          keyboardType='email-address'
          icon={<EmailIcon />}
          setValue={(input: string) => {
            changeFormData("email", input.trim())
          }}
          isError={errors?.email?.value}
          errorText={errors?.email?.text}
          placeholderColor='txt'
        />

        <InputSignUp
          type='tel'
          inputmode='numeric'
          id='phone'
          value={formData.phone}
          placeholder='Phone'
          icon={<PhoneIcon />}
          setValue={(input: string) => {
            changeFormData("phone", phoneNumberValidation(input))
          }}
          maxLength={phoneLength}
          onBlur={() => {
            if (formData.phone.length !== 0) {
              if (
                formData.phone.length !== 12 &&
                formData.phone.length !== 15
              ) {
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  phone: {
                    value: true,
                    text: "Enter correct phone number",
                  },
                }))
              }
            }
          }}
          isError={errors?.phone?.value}
          errorText={errors?.phone?.text}
          placeholderColor='txt'
        />
      </CreateAccountRow>

      <CreateAccountRow>
        <InputSignUp
          id='password'
          value={formData.password}
          type='password'
          placeholder='Password'
          icon={<LockIcon />}
          setValue={(input: string) => {
            changeFormData("password", input)
          }}
          maxLength={20}
          isError={errors?.password?.value}
          errorText={errors?.password?.text}
          placeholderColor='txt'
        />

        <InputSignUp
          id='confirmPassword'
          value={formData.confirmPassword}
          type='password'
          placeholder='Confirm Password'
          icon={<LockIcon />}
          setValue={(input: string) => {
            changeFormData("confirmPassword", input)
          }}
          onBlur={onConfirmBlur}
          maxLength={20}
          isError={errors?.confirmPassword?.value}
          errorText={errors?.confirmPassword?.text}
          placeholderColor='txt'
        />
      </CreateAccountRow>
      <div style={{ padding: "0.5rem" }}></div>
      <AppButton
        onClick={onSubmit}
        disabled={checkEmailLoading || requestOTPLoading}>
        Next
      </AppButton>

      <HelperText
        color='pink'
        center
        centerMobile
        size='regular'
        sizeMobile='regular'
        style={{ cursor: "pointer" }}
        onClick={() => {
          pixelTrackEvent("Create-account: Clicked on Login")
          handleClose()
          setLoginModal(true)
        }}>
        Login
      </HelperText>
    </CreateAccountContainer>
  )
}

const CreateAccountContainer = styled.div`
  padding: 1rem;
  width: 100%;
  display: grid;
  max-width: 800px;
  margin-inline: auto;
  gap: 0.8rem;
  font-family: Montserrat, sans-serif;
`

const CreateAccountRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.8rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`
