import React from "react"

import styled from "styled-components"
import { HelperText } from "../../base/helperText/HelperText"
import { ChevronLeft, LogoIcon } from "../../icons"
import { themeColor } from "../../theme"

export const StepHeader = ({ title = "", step = 1, maxStep = 7, onClick }) => {
  const percent = (100 * step) / maxStep

  return (
    <StepHeaderContainer>
      <LogoContainer>
        <LogoIcon width='154' height='29' />
      </LogoContainer>
      <StepContainer>
        <HelperText size='regular'>{`Step ${step} of ${maxStep}`}</HelperText>
        <BarContainer>
          <BarBackground />
          <BarProgress percent={percent} />
        </BarContainer>
      </StepContainer>
      <HeaderContainer>
        <BackButton onClick={onClick}>
          <ChevronLeft />
        </BackButton>
        <HelperText size='large' sizeMobile='regular' weight={600}>
          {title}
        </HelperText>
        <div style={{ width: "56px", height: "56px" }}></div>
      </HeaderContainer>
    </StepHeaderContainer>
  )
}

const StepHeaderContainer = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 1rem;
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StepContainer = styled.div`
  display: grid;
  gap: 10px;
`

const BarContainer = styled.div`
  height: 7px;
  width: 100%;
  position: relative;
`

const BarBaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
`

const BarBackground = styled(BarBaseBox)`
  background: ${themeColor("lightBlue")};
  width: 100%;
`

const BarProgress = styled(BarBaseBox)`
  background: ${themeColor("blue")};
  width: ${({ percent }) => percent}%;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const BackButton = styled.div`
  border-width: 1px;
  border-color: #edf0ff;
  border-style: solid;
  border-radius: 8px;
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition-duration: 200ms;
  transition-property: background-color;
  &:hover {
    background-color: #edf0ff;
  }
`
