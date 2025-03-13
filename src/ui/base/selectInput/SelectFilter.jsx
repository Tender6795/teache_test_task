import { useEffect, useState } from "react"
import Select, { components } from "react-select"
import styled from "styled-components"
import { themeColor } from "../../theme"
import { HelperText } from "../helperText/HelperText"
import { customStyles } from "./selectStyle"

const Input = (props) => (
  <components.Input
    {...props}
    isHidden={false}
  />
)

const filterConfig = {
  ignoreCase: true,
  ignoreAccents: true,
  trim: true,
  matchFrom: "start",
}

const customFilter = (option, inputValue) => {
  if (inputValue && option) {
    const lowercasedInput = inputValue.toLowerCase()
    const lowercasedLabel = option.label.toLowerCase()
    return lowercasedLabel.includes(lowercasedInput)
  }
  return true
}

const customSort = (a, b, inputValue) => {
  const lowercasedInput = inputValue.toLowerCase()
  const aStartsWithInput = a.label.toLowerCase().startsWith(lowercasedInput)
  const bStartsWithInput = b.label.toLowerCase().startsWith(lowercasedInput)

  if (aStartsWithInput && !bStartsWithInput) return -1
  if (!aStartsWithInput && bStartsWithInput) return 1
  return a.label.localeCompare(b.label)
}

export const SelectFilter = ({
  options,
  value,
  onChange,
  placeholder,
  label,
  errorText,
  isError,
  controlledMenu = true,
  showIndicator = false,
  bgColor,
  borderColor,
  rounded,
  ...rest
}) => {
  const [inputValue, setInputValue] = useState(value?.label || "")
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [focus, setFocus] = useState()

  const handleChange = (option) => {
    onChange(option)
    setInputValue(option ? option.label : "")
  }

  const handleInputChange = (newValue, { action }) => {
    if (action === "input-change") {
      setInputValue(newValue)
      if (newValue) {
        setMenuIsOpen(true)
      } else {
        handleChange({ value: "", label: "" })
        setMenuIsOpen(false)
      }
    }
  }

  useEffect(() => {
    if (value) {
      setInputValue(value.label)
    }
  }, [options])

  return (
    <SelectContainer>
      {label ? <HelperText>{label}</HelperText> : null}
      <InputContainer
        isError={isError}
        focus={focus}
        showIndicator={showIndicator}
        bgColor={bgColor}
        borderColor={borderColor}
        rounded={rounded}>
        <Select
          value={value}
          onChange={handleChange}
          options={
            options
              ?.filter((option) => customFilter(option, inputValue))
              ?.sort((a, b) => customSort(a, b, inputValue)) || []
          }
          placeholder={placeholder}
          inputValue={inputValue}
          onInputChange={handleInputChange}
          menuIsOpen={controlledMenu ? menuIsOpen : undefined}
          onMenuClose={() => setMenuIsOpen(false)}
          filterOption={null}
          className='auto-complete-container'
          classNamePrefix='auto-complete'
          styles={{
            ...customStyles,
            control: () => null,
            SelectContainer: () => null,
            Input: () => null,
          }}
          components={{ Input }}
          onBlur={() => {
            setFocus(false)
          }}
          onFocus={() => {
            setFocus(true)
          }}
        />
      </InputContainer>

      {isError ? (
        <HelperText
          color='pink'
          size='small'>
          {errorText}
        </HelperText>
      ) : null}
    </SelectContainer>
  )
}

const SelectContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 1rem;
`

export const InputContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 43px;
  background-color: ${({ bgColor = "inputBgNeutral" }) => themeColor(bgColor)};
  border-width: 1.5px;
  border-style: solid;
  border-color: ${({ isError, borderColor }) =>
    isError
      ? themeColor("pink")
      : themeColor(borderColor ? borderColor : "transparent")};
  border-radius: ${({ rounded }) => (rounded ? "99px" : "5px")};
  padding-left: 1rem;
  padding-right: ${({ showIndicator }) => (showIndicator ? "2rem" : "1rem")};
  & .auto-complete-container,
  .auto-complete__value-container,
  .auto-complete__control {
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
    border-radius: 8px;
  }

  & .auto-complete__control {
    display: flex;
    align-items: center;
    position: relative;
  }

  & .auto-complete__indicator {
    display: ${({ showIndicator }) => (showIndicator ? "flex" : "none")};
    position: absolute;
    right: -2rem;
  }

  & .auto-complete__indicator-separator {
    display: none;
  }

  & .auto-complete__placeholder {
    color: ${themeColor("txt")};
    opacity: ${({ bgColor }) => (bgColor === "transparent" ? "1" : "0.5")};
    font-size: ${themeColor("regular")};
    font-weight: 400;
    overflow: hidden;
    white-space: nowrap;
  }

  & .auto-complete__single-value {
    color: ${({ color = "txt" }) => themeColor(color)};
    font-family: Montserrat;
    font-size: ${themeColor("regular")};
    font-weight: 400;
    overflow: hidden;
  }

  .auto-complete__input-container {
    color: ${themeColor("txt")};
    overflow: hidden;
    .auto-complete__input {
      width: 100%;
      height: 100%;
      font-family: Montserrat;
      font-size: ${themeColor("small")};
      font-weight: 600;
    }
  }
`

export const InputStyled = styled.input`
  font-size: 14px;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  border-radius: 8px;
  color: ${themeColor("txt")};
  font-family: Montserrat, sans-serif !important;
`
