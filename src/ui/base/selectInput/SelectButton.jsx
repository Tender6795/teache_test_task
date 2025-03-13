import Select from "react-select";
import styled from "styled-components";
import { ChevronDownIcon } from "../../icons/inputIcons/ChevronDownIcon";
import { themeColor, themeFontSize } from "../../theme";
import { HelperText } from "../helperText/HelperText";
import { customStyles } from "./selectStyle";

export const SelectButton = ({
  options,
  value,
  onChange,
  placeholder,
  label,
  errorText,
  isError,
  icon,
  bgColor,
  valueColor,
  placeholderColor,
  borderColor,
  chevronColor,
  textAlign,
  showDelete,
  showIndicator = true,
  height,
  rounded,
}) => {
  return (
    <SelectContainer tabIndex={0}>
      {label ? <HelperText>{label}</HelperText> : null}
      <InputContainer
        isError={isError}
        bgColor={bgColor}
        valueColor={valueColor}
        placeholderColor={placeholderColor}
        borderColor={borderColor}
        hasIcon={!!icon}
        showIndicator={showIndicator}
        height={height}
        textAlign={textAlign}
        rounded={rounded}
      >
        {icon && (
          <InputIcon isError={isError} hasValue={!!value} position="left">
            {icon}
          </InputIcon>
        )}
        <Select
          value={value}
          onChange={onChange}
          options={
            showDelete
              ? [...options, { value: "delete", label: "Delete" }]
              : options
          }
          placeholder={placeholder}
          className="auto-complete-container"
          classNamePrefix="auto-complete"
          isSearchable={false}
          styles={{
            ...customStyles,
            control: () => null,
            SelectContainer: () => null,
            NoOptionsMessage: () => null,
          }}
          components={{
            IndicatorsContainer: () => null,
          }}
        />
        {showIndicator ? (
          <InputIcon isError={isError}>
            <ChevronDownIcon color={chevronColor} />
          </InputIcon>
        ) : null}
      </InputContainer>

      {isError ? (
        <HelperText color="pink" size="small">
          {errorText}
        </HelperText>
      ) : null}
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 1rem;
  cursor: pointer;
`;

export const InputContainer = styled.label`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  height: ${({ height = "64px" }) => height};
  border-width: 1.5px;
  border-style: solid;
  border-color: ${({ isError, focus, borderColor = "lightBlue" }) =>
    isError
      ? themeColor("pink")
      : focus
      ? themeColor("blue")
      : themeColor(borderColor)};
  border-radius: ${({ rounded }) => (rounded ? "99px" : "8px")};
  background-color: ${({ bgColor = "white" }) => themeColor(bgColor)};

  & .auto-complete-container,
  .auto-complete__value-container,
  .auto-complete__control,
  .auto-complete__menu-notice {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    border-radius: 8px;
    cursor: pointer;
    text-align: ${({ textAlign = "left" }) => textAlign};
  }

  .auto-complete__menu-notice {
    width: 100%;
    height: 100%;
    padding: 0.8rem;
  }

  & .auto-complete__placeholder {
    color: ${({ placeholderColor = "placeholder" }) =>
      themeColor(placeholderColor)};
    padding-left: ${({ hasIcon }) => (hasIcon ? "58px" : "1rem")};
  }

  & .auto-complete__single-value {
    font-size: ${({ size = "regular" }) => themeFontSize(size)};
    color: ${({ valueColor = "txt" }) => themeColor(valueColor)};
    padding-left: ${({ hasIcon }) => (hasIcon ? "58px" : "1rem")};
    padding-right: ${({ showIndicator }) => (showIndicator ? "58px" : "1rem")};
  }

  .auto-complete__input-container {
    color: ${themeColor("txt")};

    .auto-complete__input {
      width: 100%;
      height: 100%;
      font-size: ${themeFontSize("regular")} !important;
    }
  }
`;

const InputIcon = styled.label`
  height: 100%;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ isError, hasValue }) =>
    isError
      ? themeColor("pink")
      : hasValue
      ? themeColor("blue")
      : themeColor("border")};
  position: absolute;
  pointer-events: none;
  ${({ position }) => (position === "left" ? "left:1rem" : "right:1rem")}
`;

const InputStyled = styled.input`
  font-size: ${themeColor("regular")};
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  border-radius: 8px;
  color: ${themeColor("txt")};
  font-family: Montserrat, sans-serif !important;
`;
