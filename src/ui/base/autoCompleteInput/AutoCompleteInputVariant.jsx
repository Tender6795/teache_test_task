import { useEffect, useState } from "react"

import GooglePlacesAutocomplete from "react-google-places-autocomplete"
import styled from "styled-components"
import { HelperText } from "ui/base/helperText/HelperText"
import { SearchIcon } from "ui/icons/inputIcons/SearchIcon"
import { themeColor, themeFontSize } from "ui/theme"

const options = {
  default: {
    componentRestrictions: {
      country: ["us"],
    },
  },
  city: {
    types: ["(cities)"],
    componentRestrictions: {
      country: ["us"],
    },
  },
}
export const AutoCompleteInputVariant = ({
  onChange,
  address,
  placeholder,
  isError,
  errorText,
  placeholderColor = "placeholder",
  bgColor,
  borderColor,
  rounded,
  hasIcon,
  optionType = "default",
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
    setInputValue(option ? option.label : "")
  }

  return (
    <InputWrapper bgColor={bgColor}>
      <InputContainer
        isError={isError}
        focus={focus}
        placeholderColor={placeholderColor}
        borderColor={borderColor}
        rounded={rounded}
        bgColor={bgColor}>
        <GooglePlacesAutocomplete
          apiKey='AIzaSyBrS5eBzOCobjmCbBtMIheZT3OX3WyneNM'
          apiOptions={{ language: "en", region: "us" }}
          autocompletionRequest={options[optionType]}
          selectProps={{
            value: address,
            onChange: handleChange,
            inputValue,
            placeholder,
            onInputChange: handleInputChange,
            menuIsOpen: menuIsOpen,
            onMenuClose: () => setMenuIsOpen(false),
            className: "auto-complete-container",
            classNamePrefix: "auto-complete",
            styles: {
              control: () => null,
              SelectContainer: () => null,
              Input: () => null,
            },
            onBlur: () => {
              setFocus(false)
            },
            onFocus: () => {
              setFocus(true)
            },
            components: {
              Input: Input,
              IndicatorsContainer: () => null,
              SingleValue: () => null,
            },
          }}
          debounce={200}
        />
        {hasIcon ? (
          <InputIcon isError={isError} hasValue={!!inputValue} focus={focus}>
            <SearchIcon />
          </InputIcon>
        ) : null}
      </InputContainer>

      {isError ? (
        <HelperText color='pink' size='small'>
          {errorText}
        </HelperText>
      ) : null}
    </InputWrapper>
  )
}

const Input = ({ cx, ...props }) => {
  return <InputStyled {...props} isHidden={false} />
}

export const InputWrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 1rem;
  font-family: Montserrat, sans-serif;
  background-color: ${({ bgColor = "inputBgNeutral" }) => themeColor(bgColor)};
  border-radius: 5px;
`

export const InputContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 43px;
  border-width: 1.5px;
  border-style: solid;
  border-color: ${({ isError, borderColor }) =>
    isError
      ? themeColor("pink")
      : themeColor(borderColor ? borderColor : "transparent")};
  border-radius: ${({ rounded }) => (rounded ? "99px" : "5px")};
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
    opacity: ${({ placeholderColor }) =>
      placeholderColor === "txt" ? "0.5" : "1"};
    white-space: nowrap;
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
  opacity: ${({ focus }) => (focus ? "0.6" : "0.3")};
  color: ${({ isError, hasValue }) =>
    isError ? themeColor("pink") : themeColor("txt")};
`

export const InputStyled = styled.input`
  background-color: transparent;
  font-size: 16px;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  color: ${themeColor("txt")};
  font-family: Montserrat, sans-serif;
`
