import React from "react"
import Select, { components } from "react-select"
import styled from "styled-components"
import { themeColor, themeFontSize } from "../../theme"

const IndicatorsContainer = (props) => {
  return (
    <IndicatorsContainerStyle>
      <components.IndicatorsContainer {...props} />
    </IndicatorsContainerStyle>
  )
}

export const SelectInputVariant = ({
  options,
  value,
  onChange,
  placeholder,
  label,
  errorText,
  isError,
  borderColor = "#EDF0FF",
  backgroundColor = "#fff",
  placeholderColor = `#bdc7d7`,
}) => {
  return (
    <SelectContainer>
      {label ? <SelectLabel>{label}</SelectLabel> : null}
      <Select
        value={value}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        components={{ IndicatorsContainer }}
        isSearchable={false}
        styles={{
          control: (baseStyles, state) => {
            return {
              ...baseStyles,
              borderColor,
              backgroundColor,
              height: "51px",
              borderRadius: "5px",
              borderWidth: "2px",
              "&:hover": {
                borderColor,
              },
            }
          },
          placeholder: (baseStyles) => {
            return {
              ...baseStyles,
              color: placeholderColor,
            }
          },

          IndicatorSeparator: () => {
            return { display: "none" }
          },
          menuList: (base) => ({
            ...base,
            "@media (max-width: 768px)": {
              maxHeight: "150px", // your desired height
            },
          }),
        }}
      />
      {isError ? (
        <SelectLabel color='pink' size='extraSmall'>
          {errorText}
        </SelectLabel>
      ) : null}
    </SelectContainer>
  )
}

const SelectContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 0.2rem;
`

const SelectLabel = styled.label`
  font-size: ${({ size = "small" }) => themeFontSize(size)};
  color: ${({ color = "gray" }) => themeColor(color)};
`
const IndicatorsContainerStyle = styled.div`
  height: 100%;
  width: 46px;
  background-color: ${themeColor("border")};
  display: flex;
  justify-content: center;
  align-items: center;
  & span {
    display: none;
  }
  & svg {
    color: ${themeColor("blue")};
  }
`
