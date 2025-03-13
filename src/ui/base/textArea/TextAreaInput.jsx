import { forwardRef, useState } from "react"
import styled from "styled-components"
import { themeColor, themeFontSize } from "../../theme"
import { HelperText } from "../helperText/HelperText"

export const TextAreaInput = forwardRef(
  (
    {
      label,
      setValue,
      isError = false,
      errorText,
      id,
      value,
      maxLength,
      minLength,
      minHeight,
      labelWeight,
      ...rest
    },
    ref
  ) => {
    const [hide, setHide] = useState(false)
    const onChangeHandler = (el) => {
      setValue?.(el.target.value)
    }

    const showLimitCharacter = () => {
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
    return (
      <TextAreaWrapper>
        {label && (
          <HelperText htmlFor={id} className='pre-line' weight={labelWeight}>
            {label}
          </HelperText>
        )}
        <TextAreaContainer>
          <TextAreaStyled
            id={id}
            ref={ref}
            onChange={onChangeHandler}
            value={value}
            maxLength={maxLength}
            minLength={minLength}
            onFocus={() => setHide(true)}
            onBlur={() => setHide(false)}
            isError={isError}
            {...rest}
          />
        </TextAreaContainer>
        {value && hide ? (
          <ShowLimitCharacterContainer className='showLimit'>
            {showLimitCharacter()}
          </ShowLimitCharacterContainer>
        ) : null}
        {isError ? (
          <HelperText color='pink' size='small'>
            {errorText || ""}
          </HelperText>
        ) : null}
      </TextAreaWrapper>
    )
  }
)

const TextAreaWrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 1rem;
  font-family: Montserrat, sans-serif;
  & .pre-line {
    white-space: pre-line;
  }
`

const TextAreaContainer = styled.div`
  width: 100%;
  position: relative;
`

const TextAreaStyled = styled.textarea`
  width: 100%;
  height: 62px;
  padding-inline: 8px;
  padding-block: ${({ value }) => (value ? "20px" : "10px")};
  font-size: ${themeFontSize("regular")};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ isError }) =>
    isError ? themeColor("pink") : themeColor("mobileInputBorder")};
  outline: none;
  font-family: Montserrat, sans-serif;
  border-radius: 10px;
  resize: none;
  &::placeholder {
    color: ${themeColor("placeholder")};
    font-weight: 400;
  }
  #showLimit {
    display: none;
  }
  @media (min-width: 768px) {
    padding-block: 20px;
  }
`
const ShowLimitCharacterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
