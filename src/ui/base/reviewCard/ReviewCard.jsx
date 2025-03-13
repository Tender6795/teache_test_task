import React from "react"
import styled from "styled-components"
import { UserIcon } from "../../icons"
import { themeColor } from "../../theme"
import { StarReview } from "../starReview/StarReview"

export const ReviewCard = ({
  img,
  name,
  subTitle,
  message,
  rate,
  size = 18,
}) => {
  return (
    <Container>
      <UserContainer>
        <div>
          {img ? (
            <UserAvatar src={img} />
          ) : (
            <Avatar>
              <UserIcon color='txt' />
            </Avatar>
          )}
        </div>
        <UserInfoContainer>
          <div>
            <UserName>{name}</UserName>
            {subTitle ? <SubTitle>{subTitle}</SubTitle> : null}
          </div>
          <div>
            <StarReview filledColor='#554DF1' rate={rate} size={18} />
          </div>
        </UserInfoContainer>
      </UserContainer>
      <SlideReviewText>“{message}“</SlideReviewText>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  gap: 19px;
`

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const Avatar = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: ${themeColor("buttonBgNeutral")};
  border-radius: 99px;
  & > svg {
    height: 28px;
    width: 28px;
  }
`

const UserAvatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 99px;
  overflow: hidden;
  object-fit: cover;
  @media (min-width: 768px) {
    width: 80px;
    height: 80px;
  }
  @media (min-width: 1280px) {
    width: 105px;
    height: 105px;
  }
`

const UserInfoContainer = styled.div`
  display: grid;
  gap: 10px;
`

const UserName = styled.p`
  font-family: Poppins;
  font-weight: 600;
  font-size: ${themeColor("regular")};
  line-height: 24px;
  color: ${themeColor("txt")};
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 27px;
  }
  @media (min-width: 1280px) {
    font-size: 22px;
    line-height: 33px;
  }
`

const SubTitle = styled.p`
  font-family: Poppins;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  text-transform: uppercase;
  color: ${themeColor("txt")};
  opacity: 0.5;
  @media (min-width: 768px) {
    font-size: 13px;
    line-height: 19.5px;
  }
  @media (min-width: 1280px) {
    font-size: 15px;
    line-height: 22.5px;
  }
`

const SlideReviewText = styled.div`
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  font-size: ${themeColor("regular")};
  line-height: 25.6px;
  color: ${themeColor("black")};
  @media (min-width: 1280px) {
    font-size: 22px;
    line-height: 33.2px;
  }
`
