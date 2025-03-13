import React from "react"
import * as ReactDOMServer from "react-dom/server"
import styled from "styled-components"
import FallbackClassImg from "../../../assets/fallback.png"

export const MarkerClassCard = ({ classData }) => {
  const Marker = () => (
    <Container>
      <ImageContainer>
        {classData?.img ? (
          <Img src={classData.img} />
        ) : (
          <Img src={FallbackClassImg} />
        )}
      </ImageContainer>

      <TextContainer>
        <TitleText>{classData.title}</TitleText>
        <RatingText>
          ⭐ {classData.rate} ({classData.review})
        </RatingText>
      </TextContainer>
    </Container>
  )
  return ReactDOMServer.renderToString(<Marker />)
}

const Container = styled.div`
  display: flex;
  gap: 5px;
  background-color: white;
  padding: 5px;
  width: 78px;
  height: 78px;
  border-radius: 5px;
  z-index: 1;
  transition: width 0.3s ease-out;
  overflow: hidden;
  &:hover {
    z-index: 10;
    width: 208px;
  }
`

const ImageContainer = styled.div`
  width: 78px;
  border-radius: 5px;
`
const Img = styled.img`
  width: 78px;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  aspect-ratio: 1/1;
`

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`

const RatingText = styled.p`
  font-size: 12px;
  font-weight: 400;
  white-space: nowrap;
`

const TitleText = styled.p`
  font-size: 12px;
  font-weight: 600;
  width: 100%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`
