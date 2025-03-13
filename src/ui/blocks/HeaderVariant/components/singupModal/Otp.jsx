import { useMutation } from "@tanstack/react-query"
import { otpVerify, register, resendOTP } from "api/auth.api.ts"
import { useAuth } from "context/AuthContext.jsx"
import { useCreateAccount } from "context/CreateAccountContext"
import { useToast } from "hooks"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { AppButton } from "ui/base/appButton/AppButton.jsx"
import { ButtonStyled } from "ui/base/Button/ButtonStyled"
import { HelperText } from "ui/base/helperText/HelperText"
import { themeColor, themeFontSize } from "ui/theme"
import { safeLocalStorage } from "utils"
import { pixelTrackEvent } from "utils/facebookPixel.js"

export const Otp = ({ setActiveTab, handleClose }) => {
  const navigate = useNavigate()
  const { updateAuthData } = useAuth()
  const { formData, updateFormData, coordinate } = useCreateAccount()
  const [showTimer, setShowTimer] = useState(false)
  const [timer, setTimer] = useState(5)
  const [num1State, setNum1State] = useState("")
  const [num2State, setNum2State] = useState("")
  const [num3State, setNum3State] = useState("")
  const [num4State, setNum4State] = useState("")

  const [otpError, setOtpError] = useState({ value: false, text: "" })

  const num1 = useRef(null)
  const num2 = useRef(null)
  const num3 = useRef(null)
  const num4 = useRef(null)

  const { mutate: mutateResendOTP } = useMutation({
    mutationFn: resendOTP,
    onError: (err: any) => {
      useToast(
        "error",
        err?.response?.data?.message || "error resending the OTP"
      )
    },
  })

  const { mutate, isLoading } = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      const token = data.token || ""
      updateAuthData(token)
      safeLocalStorage.setItem("token", token)
      handleClose()
      navigate("/")
    },
    onError: (err) => {
      useToast("error", err?.response?.data?.message || "Error: registerAction")
    },
  })

  const { mutate: mutateOtpVerify, isLoading: isOtpVerifyLoading } =
    useMutation({
      mutationFn: otpVerify,
      onSuccess: () => {
        mutate({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          password: formData.password,
          confirm_password: formData.confirmPassword,
          country_code: "+1",
          phone_number: formData.phone,
          address1: formData.addrs1,
          address2: formData.addrs2,
          city: formData.city,
          state: formData.state,
          zip_code: formData.zipCode,
          lat: coordinate?.latitude ?? 0,
          lng: coordinate?.longitude ?? 0,
          stripe_customer_id: "",
          platform: "web",
        })
      },
      onError: (err: any) => {
        setOtpError({
          value: true,
          text: err?.response?.data?.message
            ? err?.response?.data?.message
            : "This code is invalid",
        })
      },
    })

  const startTimer = () => {
    setNum1State("")
    setNum2State("")
    setNum3State("")
    setNum4State("")
    setOtpError({ value: false, text: "" })
    mutateResendOTP(formData.email)
    setShowTimer(true)
    const t = setInterval(() => {
      setTimer((prevState) => {
        if (prevState > 0) {
          return prevState - 1
        } else {
          setShowTimer(false)
          clearInterval(t)
          return 5
        }
      })
    }, 1000)
  }

  const getVerifyCodeAlertMessage = (msg) => {
    if (msg === "Verification code expired") {
      return "Code expired. Go back and confirm your email address."
    } else {
      return msg
    }
  }

  const onVerifyOtp = () => {
    pixelTrackEvent("Otp: Clicked on Verify")
    if ((num1State + num2State + num3State + num4State).length !== 4) {
      setOtpError({ value: true, text: "Fill all the fields" })
    } else {
      mutateOtpVerify({
        email: formData.email,
        otp: `${num1State}${num2State}${num3State}${num4State}`,
        new_signup: true,
      })
    }
  }

  const useAnotherEmail = () => {
    updateFormData("email", "")
    setActiveTab("signup")
  }

  // if (!formData.email) {
  //   setActiveTab('signup')
  // }

  // useEffect(() => {
  //   if (isSuccess) {
  //     navigate(appRoute.completeProfile.fullPath)
  //   }
  // }, [isSuccess])

  useEffect(() => {
    pixelTrackEvent("Enter Otp page")
  }, [])

  return (
    <OtpContainer>
      <OtpTitleContainer>
        <HelperText size='h5' sizeMobile='h5' weight={700} center centerMobile>
          Verification Code
        </HelperText>

        <DescriptionContainer>
          <HelperText size='medium' sizeMobile='regular' center centerMobile>
            We sent the code to this email
          </HelperText>
          <HelperText
            size='medium'
            sizeMobile='regular'
            weight={600}
            center
            centerMobile>
            {formData.email}
          </HelperText>
        </DescriptionContainer>
      </OtpTitleContainer>
      <OptCodeContainer>
        <OtpInputContainer>
          <OtpBox
            type='number'
            inputmode='numeric'
            maxLength={1}
            value={num1State}
            ref={num1}
            onChange={(e) => {
              const value = e.target.value
              if (value.length <= 1) {
                value !== "" ? num2.current?.focus() : null
                setNum1State(value)
                setOtpError({ value: false, text: "" })
              }
            }}
          />
          <OtpBox
            type='number'
            inputmode='numeric'
            maxLength={1}
            value={num2State}
            ref={num2}
            onChange={(e) => {
              const value = e.target.value
              if (value.length <= 1) {
                value !== "" ? num3.current?.focus() : num1.current?.focus()
                setNum2State(value)
                setOtpError({ value: false, text: "" })
              }
            }}
          />
          <OtpBox
            type='number'
            inputmode='numeric'
            maxLength={1}
            value={num3State}
            ref={num3}
            onChange={(e) => {
              const value = e.target.value
              if (value.length <= 1) {
                value !== "" ? num4.current?.focus() : num2.current?.focus()
                setNum3State(value)
                setOtpError({ value: false, text: "" })
              }
            }}
          />
          <OtpBox
            type='number'
            inputmode='numeric'
            maxLength={1}
            value={num4State}
            ref={num4}
            onChange={(e) => {
              const value = e.target.value
              if (value.length <= 1) {
                value !== "" ? null : num3.current?.focus()
                setNum4State(value)
                setOtpError({ value: false, text: "" })
              }
            }}
          />
        </OtpInputContainer>
        {otpError.value && (
          <HelperText color='pink' size='small' center centerMobile>
            {getVerifyCodeAlertMessage(otpError.text)}
          </HelperText>
        )}
        {showTimer ? (
          <OtpButtonLink>
            <p>Resend code in 00:{timer > 9 ? timer : `0${timer}`}</p>
          </OtpButtonLink>
        ) : (
          <OtpButtonLink onClick={startTimer}>
            <p>Resend code</p>
          </OtpButtonLink>
        )}

        <AppButton
          onClick={onVerifyOtp}
          disabled={isLoading || isOtpVerifyLoading}>
          Verify
        </AppButton>
        <div>
          <OtpButtonLink onClick={useAnotherEmail}>
            Sign up with different email
          </OtpButtonLink>
        </div>
      </OptCodeContainer>
    </OtpContainer>
  )
}

export const OtpContainer = styled.div`
  padding: 1rem;
  width: 100%;
  max-width: 350px;
  margin-inline: auto;
  display: grid;
  gap: 2rem;
  font-family: Montserrat, sans-serif;
  margin-top: 2dvh;
  @media (min-width: 768px) {
    margin-top: 0px;
  }
`

export const DescriptionContainer = styled.div`
  display: grid;
  gap: 0.5rem;
`

export const OptCodeContainer = styled.div`
  display: grid;
  gap: 1rem;
`

export const OtpTitleContainer = styled.div`
  text-align: center;
  display: grid;
  gap: 2rem;
`

export const OtpInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`
export const OtpBox = styled.input`
  width: 100%;
  aspect-ratio: 1/1;
  padding: 5px;
  text-align: center;
  font-size: ${themeFontSize("medium")};
  font-weight: 600;
  border-width: 2px;
  border-style: solid;
  border-color: ${themeColor("border")};
  border-radius: 8px;
  outline: none;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const OtpButton = styled(ButtonStyled)`
  height: 40px;
  width: 100%;
  @media (max-width: 640px) {
    margin-top: 10px;
  }
`

export const OtpButtonLink = styled.button`
  all: unset;
  cursor: pointer;
  color: ${themeColor("gray")};
  font-size: ${themeFontSize("small")};
  text-align: center;
  width: 100%;
  pointer-events: ${({ disabled }) => (disabled ? "none" : null)};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`
