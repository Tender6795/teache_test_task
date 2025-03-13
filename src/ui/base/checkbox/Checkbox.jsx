import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { themeColor } from "../../theme"
import { HelperText } from "../helperText/HelperText"

export default function Checkbox({
  value,
  checked,
  onChange,
  name,
  id,
  label,
  disabled,
  link,
  linkLabel,
}) {
  return (
    <Label htmlFor={id} disabled={disabled}>
      <Input
        id={id}
        type='checkbox'
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <TextLabelContainer>
        {label ? <HelperText>{label} </HelperText> : null}
        {linkLabel ? (
          <HelperText color='blue'>
            <Link to={link} target='_blank' rel='noopener noreferrer'>
              {linkLabel}
            </Link>
          </HelperText>
        ) : null}
      </TextLabelContainer>
    </Label>
  )
}

const Anchor = styled.p`
  color: ${({ color = "blue" }) => themeColor(color)};
  cursor: pointer;
`

const TextLabelContainer = styled.div`
  display: flex;
  gap: 0.3rem;
`

const Input = styled.input`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 0.2rem;
  cursor: pointer;
`

const Label = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`
