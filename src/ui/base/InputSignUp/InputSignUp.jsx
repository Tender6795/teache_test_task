import { forwardRef, useState } from "react"
import styled from "styled-components"
import { EyeIcon, EyeSlashedIcon } from "../../icons"
import { themeColor, themeFontSize } from "../../theme"
import { HelperText } from "../helperText/HelperText"

export const InputSignUp = forwardRef(
  (
    {
      center = false,
      value = "",
      placeholder = "",
      label,
      size = "medium",
      type = "text",
      icon,
      setValue,
      isError = false,
      errorText,
      id,
      maxLength,
      minLength,
      showLimit,
      labelSize,
      labelWeight,
      gap,
      inputCenterText,
      onBlur,
      placeholderColor = "placeholder",
      disabled = false, // Added disabled prop
      ...rest
    },
    ref
  ) => {
    const [hide, setHide] = useState(false)
    const [showPassword, setShowPassword] = useState(type)

    const onChangeHandler = (el) => {
      if (!disabled) {
        setValue(el.target.value)
      }
    }

    const togglePassword = () => {
      if (!disabled) {
        setShowPassword((prev) => (prev === "text" ? "password" : "text"))
      }
    }

    return (
      <InputWrapper>
        {label && (
          <HelperText htmlFor={id} size={labelSize} weight={labelWeight}>
            {label}
          </HelperText>
        )}
        <InputContainer
          isError={isError}
          htmlFor={id}
          gap={gap}
          focus={hide}
          disabled={disabled} // Pass disabled prop to container
        >
          {icon && (
            <InputIcon
              isError={isError}
              htmlFor={id}
              hasValue={!!value}
              disabled={disabled}>
              {icon}
            </InputIcon>
          )}

          <InputStyled
            ref={ref}
            value={value}
            placeholder={placeholder}
            onChange={onChangeHandler}
            size={size} // Use size prop
            type={showPassword}
            icon={!!icon} // Use icon prop
            id={id}
            maxLength={maxLength}
            minLength={minLength}
            onFocus={() => !disabled && setHide(true)}
            onBlur={() => {
              if (onBlur) {
                onBlur()
              }
              setHide(false)
            }}
            center={inputCenterText}
            placeholderColor={placeholderColor}
            disabled={disabled} // Pass disabled prop to input
            {...rest}
          />
          {type === "password" && (
            <InputEyeIcon
              isError={isError}
              onClick={togglePassword}
              hasValue={!!value}
              disabled={disabled} // Pass disabled prop to eye icon
            >
              {showPassword === "password" ? <EyeIcon /> : <EyeSlashedIcon />}
            </InputEyeIcon>
          )}
        </InputContainer>
        {showLimit && value && hide ? (
          <ShowLimitCharacterContainer>
            {showLimitCharacter(value, maxLength, minLength)}
          </ShowLimitCharacterContainer>
        ) : null}

        {isError && errorText ? (
          <HelperText color='pink' size='small'>
            {errorText}
          </HelperText>
        ) : null}
      </InputWrapper>
    )
  }
)

const showLimitCharacter = (value, maxLength, minLength) => {
  if (!value) return null

  if (maxLength > 0 && minLength === 0) {
    return (
      <HelperText size='regular' sizeMobile='small' color='placeholder'>
        {value.length} / {maxLength}
      </HelperText>
    )
  }

  if (value.length < minLength) {
    return (
      <HelperText size='regular' sizeMobile='small' color='placeholder'>
        {minLength - value.length} more required
      </HelperText>
    )
  }

  return (
    <HelperText size='regular' sizeMobile='small' color='placeholder'>
      {value.length} / {maxLength}
    </HelperText>
  )
}

export const InputWrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 1rem;
  font-family: Montserrat, sans-serif;
`

export const InputContainer = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => gap || "1rem"};
  height: 64px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ isError, focus, disabled }) =>
    disabled
      ? "rgb(167, 166, 206,0.1)"
      : isError
      ? themeColor("pink")
      : focus
      ? themeColor("blue")
      : themeColor("mobileInputBorder")};
  border-radius: 8px;
  padding-inline: ${({ gap }) => gap || "1rem"};
  font-family: Montserrat, sans-serif;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  background-color: ${({ disabled }) =>
    disabled ? "rgb(167, 166, 206,0.10)" : "transparent"};
`

export const InputIcon = styled.label`
  height: 100%;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ isError, hasValue, disabled }) =>
    disabled
      ? "rgb(167, 166, 206,1)"
      : isError
      ? themeColor("pink")
      : hasValue
      ? themeColor("blue")
      : themeColor("mobileInputBorder")};
`

export const InputEyeIcon = styled.button`
  padding: 0px;
  outline: none;
  border: none;
  margin: 0px;
  background-color: transparent;
  height: 100%;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ isError, hasValue, disabled }) =>
    disabled
      ? "rgb(167, 166, 206,1)"
      : isError
      ? themeColor("pink")
      : hasValue
      ? themeColor("blue")
      : themeColor("mobileInputBorder")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`

export const InputStyled = styled.input`
  width: 100%;
  height: 100%;
  font-size: ${({ size }) => themeFontSize(size || "regular")}; // Use size prop
  font-family: Montserrat, sans-serif;
  border: none;
  outline: none;
  border-radius: 8px;
  text-align: ${({ center }) => (center ? "center" : "left")};
  color: ${({ disabled }) =>
    disabled ? "rgb(167, 166, 206,1)" : themeColor("txt")};
  &::placeholder {
    color: ${({ placeholderColor }) => themeColor(placeholderColor)};
    font-weight: 400;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};
`

export const ShowLimitCharacterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
