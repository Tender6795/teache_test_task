import React, { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import { qrCodeButtonsData } from "../../../conts/QrCodeButtonData"
import { pixelTrackEvent } from "../../../utils/facebookPixel"
import { Container } from "../../base/Container"
import { QrCodeButton } from "../../base/QrCodeButton"
import { ButtonRow, DownloadWrapper, Title } from "./DownloadStyled"

const Download = () => {
  const sectionRef = useRef()
  const location = useLocation()

  useEffect(() => {
    location.hash === "#download" &&
      sectionRef.current.scrollIntoView({
        block: "center",
        behavior: "smooth",
      })
  }, [location])

  return (
    <DownloadWrapper ref={sectionRef}>
      <Container>
        <Title>Download the App</Title>
        <ButtonRow>
          {qrCodeButtonsData?.map((item) => (
            <QrCodeButton
              key={item.text}
              qrcode={item.qrcode}
              href={item.href}
              target='_blank'
              icon={item.icon}
              bg={item.bg}
              onClick={() => pixelTrackEvent(`Home: Clicked on ${item.text}`)}>
              {item.text}
            </QrCodeButton>
          ))}
        </ButtonRow>
      </Container>
    </DownloadWrapper>
  )
}

export default Download
