import React from "react"
import styled from "styled-components"
import { themeColor } from "../../theme"

const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`

const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 50px;
  height: 24px;
  border-radius: 100px;
  position: relative;
  background-color: ${({ toggled }) =>
    toggled ? themeColor("blue") : themeColor("placeholder")};
`

const SwitchButton = styled.span`
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  border-radius: 45px;
  transition: 0.2s;
  background: ${themeColor("white")};
  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  /* ${SwitchLabel}:active & {
    width: 43px;
  } */
`

export const Switch = ({ id, toggled, onChange }) => {
  return (
    <>
      <SwitchInput
        className='switch-checkbox'
        id={id}
        type='checkbox'
        checked={toggled}
        onChange={onChange}
      />
      <SwitchLabel className='switch-label' htmlFor={id} toggled={toggled}>
        <SwitchButton className='switch-button' />
      </SwitchLabel>
    </>
  )
}
