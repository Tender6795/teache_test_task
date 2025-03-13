import React from "react"
import styled from "styled-components"
import { MinusIcon } from "../../icons/MinusIcon"
import { PlusIcon } from "../../icons/PlusIcon"
import { themeColor, themeFontSize } from "../../theme"
import { Tooltip } from "../tooltip/Tooltip"

export const CounterInput = ({
  value = 1,
  addToValue,
  subtractFromValue,
  tooltipText,
  maxValue = 20,
  label,
}) => {
  return (
    <CounterWrapper>
      {label ? <CounterLabel>{label}</CounterLabel> : null}
      <CounterContainer>
        <CounterIconContainer onClick={subtractFromValue} disabled={value < 2}>
          <MinusIcon width={20} color='#554DF1' />
        </CounterIconContainer>
        <CounterValueContainer readOnly value={value} />
        <CounterIconContainer onClick={addToValue} disabled={value > 19}>
          <PlusIcon size={20} color='#554DF1' />
        </CounterIconContainer>

        {tooltipText ? (
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Tooltip text={tooltipText} position='top' />
          </div>
        ) : null}
      </CounterContainer>
    </CounterWrapper>
  )
}
const CounterWrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 0.2rem;
`

const CounterContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
`

const CounterLabel = styled.label`
  font-size: ${({ size = "small" }) => themeFontSize(size)};
  color: ${({ color = "gray" }) => themeColor(color)};
`
const CounterValueContainer = styled.input`
  width: 100%;
  height: 40px;
  padding-inline: 20px;
  font-size: ${themeFontSize("regular")};
  border: 1px solid ${themeColor("lightBlue")};
  outline: none;
  font-family: Montserrat, sans-serif;
  border-radius: 10px;
  &::placeholder {
    color: ${themeColor("gray")};
    font-weight: 400;
  }
  text-align: center;
  grid-column-start: 2;
  grid-column-end: 4;
`

export const CounterIconContainer = styled.button`
  all: unset;
  height: ${({ size }) => size ?? "40px"};
  width: ${({ size }) => size ?? "100%"};
  background-color: ${({ backgroundColor, disabled }) =>
    disabled
      ? themeColor("lightBlue2")
      : backgroundColor ?? themeColor("lightBlue")};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ border }) => border ?? "10px"};
  cursor: pointer;
  pointer-events: ${({ disabled }) => (disabled ? "none" : null)};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition-property: background-color opacity;
  transition-duration: 200ms;
`
