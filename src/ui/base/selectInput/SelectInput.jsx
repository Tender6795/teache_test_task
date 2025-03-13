import { useEffect, useState } from "react"
import Select, { components } from "react-select"
import styled from "styled-components"
import { themeColor, themeFontSize } from "../../theme"
import { HelperText } from "../helperText/HelperText"
import { customStyles } from "./selectStyle"

const Input = (props) => <components.Input {...props} isHidden={false} />

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

export const SelectInput = ({
  options,
  value,
  onChange,
  placeholder,
  label,
  errorText,
  isError,
  icon,
  readOnly,
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
      <InputContainer isError={isError} focus={focus}>
        {icon && (
          <InputIcon isError={isError} hasValue={!!inputValue}>
            {icon}
          </InputIcon>
        )}
        <Select
          {...rest}
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
          menuIsOpen={menuIsOpen}
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
          components={{
            Input: (props) => Input({ readOnly, ...props }),
            IndicatorsContainer: () => null,
          }}
          onBlur={() => {
            setFocus(false)
          }}
          onFocus={() => {
            setFocus(true)
          }}
        />
      </InputContainer>

      {isError ? (
        <HelperText color='pink' size='small'>
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
    border-radius: 8px;
  }

  & .auto-complete__placeholder {
    color: ${themeColor("placeholder")};
  }
  & .auto-complete__single-value {
    font-size: ${({ size = "regular" }) => themeFontSize(size)};
    color: ${({ color = "txt" }) => themeColor(color)};
  }

  .auto-complete__input-container {
    color: ${themeColor("txt")};

    .auto-complete__input {
      width: 100%;
      height: 100%;
      font-size: ${themeFontSize("regular")} !important;
    }
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
      : themeColor("border")};
`

export const InputStyled = styled.input`
  font-size: ${themeColor("regular")};
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  border-radius: 8px;
  color: ${themeColor("txt")};
  font-family: Montserrat, sans-serif !important;
`
