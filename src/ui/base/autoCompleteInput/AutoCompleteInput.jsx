import { useEffect, useState } from "react"

import GooglePlacesAutocomplete from "react-google-places-autocomplete"
import styled from "styled-components"
import { HomeIcon } from "../../icons"
import { themeColor, themeFontSize } from "../../theme"
import { HelperText } from "../helperText/HelperText"

export const AutoCompleteInput = ({
  onChange,
  address,
  placeholder,
  isError,
  errorText,
  placeholderColor = "placeholder",
}) => {
  const [inputValue, setInputValue] = useState(address?.label)
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [focus, setFocus] = useState(false)

  useEffect(() => {
    if (inputValue !== address?.label) {
      setInputValue(address?.label || "")
    }
  }, [address?.label])

  const handleInputChange = (newValue, { action }) => {
    if (action === "input-change") {
      setFocus(true)
      setInputValue(newValue)
      if (newValue) {
        setMenuIsOpen(true)
      } else {
        handleChange(null)
        setMenuIsOpen(false)
      }
    }
  }

  const handleChange = (option) => {
    onChange(option)
    setMenuIsOpen(false)
  }

  return (
    <InputWrapper>
      <InputContainer
        isError={isError}
        focus={focus}
        placeholderColor={placeholderColor}>
        <InputIcon
          isError={isError}
          hasValue={!!inputValue}>
          <HomeIcon />
        </InputIcon>
        <GooglePlacesAutocomplete
          apiKey='AIzaSyBrS5eBzOCobjmCbBtMIheZT3OX3WyneNM'
          apiOptions={{ language: "en", region: "us" }}
          autocompletionRequest={{
            componentRestrictions: {
              country: ["us"],
            },
          }}
          selectProps={{
            value: address,
            onBlur: () => {
              setFocus(false)
            },
            onFocus: () => {
              setFocus(true)
            },
            onChange: handleChange,
            inputValue,
            placeholder,
            onInputChange: handleInputChange,
            menuIsOpen: menuIsOpen,
            onMenuClose: () => setMenuIsOpen(false),
            styles: {
              control: () => null,
              SelectContainer: () => null,
              Input: () => null,
            },
            className: "auto-complete-container",
            classNamePrefix: "auto-complete",
            components: {
              Input: Input,
              IndicatorsContainer: () => null,
              SingleValue: () => null,
            },
          }}
          debounce={200}
        />
      </InputContainer>

      {isError ? (
        <HelperText
          color='pink'
          size='small'>
          {errorText}
        </HelperText>
      ) : null}
    </InputWrapper>
  )
}

const Input = ({ cx, ...props }) => {
  return (
    <InputStyled
      {...props}
      isHidden={false}
    />
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
  gap: 1rem;
  height: 64px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ isError, focus }) =>
    isError
      ? themeColor("pink")
      : focus
      ? themeColor("blue")
      : themeColor("mobileInputBorder")};
  border-radius: 8px;
  padding-inline: 1rem;
  & .auto-complete-container,
  .auto-complete__value-container,
  .auto-complete__control {
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
  }

  & .auto-complete__placeholder {
    color: ${({ placeholderColor }) => themeColor(placeholderColor)};
  }
  & .auto-complete__single-value {
    font-size: ${({ size = "regular" }) => themeFontSize(size)};
    color: ${({ color = "txt" }) => themeColor(color)};
  }
`

export const InputIcon = styled.label`
  height: 100%;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ isError, hasValue }) =>
    isError
      ? themeColor("pink")
      : hasValue
      ? themeColor("blue")
      : themeColor("mobileInputBorder")};
`

export const InputStyled = styled.input`
  font-size: 16px;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  border-radius: 8px;
  color: ${themeColor("txt")};
  font-family: Montserrat, sans-serif !important;
`
