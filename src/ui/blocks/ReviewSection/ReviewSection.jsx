import React from "react"
import styled from "styled-components"
import CookingAvatar from "../../../static/pictures/reviewAvatar/cooking-class-avatar.webp"
import DanceAvatar from "../../../static/pictures/reviewAvatar/dance-class-avatar.webp"

import ChessAvatar from "../../../static/pictures/reviewAvatar/chess-class-avatar.webp"

import { themeColor } from "../../theme"
import EmblaCarousel from "./blocks/EmblaCarousel"

const OuterContainer = styled.div`
  padding: 0 16px;
  margin-top: 120px;
  padding-inline: 1rem;
  max-width: 1280px;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60dvh;
  @media (max-width: 1200px) {
    padding: 0 30px;
    margin-top: 85px;
  }
  @media (max-width: 992px) {
    padding: 0 30px;
    margin-top: 85px;
  }
  @media (max-width: 640px) {
    padding: 0 50px;
    margin-top: 10px;
  }
  @media (max-width: 768px) {
    padding: 0 0 48px;
    padding-inline: 1rem;
    margin-top: 110px;
  }
`
const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  @media (max-width: 1280px) {
    gap: 20px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
    align-items: center;
    justify-content: center;
  }
`

const Title = styled.p`
  color: ${themeColor("txt")};
  font-family: Poppins, Montserrat, sans-serif;
  font-weight: 600;
  font-size: 34px;
  line-height: 44px;
  max-width: 375px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 46px;
    text-align: left;
  }
  @media (min-width: 1280px) {
    font-size: 48px;
    line-height: 60px;
    max-width: 560px;
  }
`

const SLIDES = [
  {
    name: "Sarah M",
    class: "Cooking Instructor",
    message:
      "Teache has completely transformed the way I teach cooking classes. I can easily connect with students nearby who are passionate about learning to cook. It's flexible, and I get to share my love for cooking with more people!",
    img: CookingAvatar,
  },
  {
    name: "Carlos R",
    class: "Dance Instructor",
    message:
      "Teache has been a great new source of income. They’ve helped me connect with many students through the app, making it easy to manage my schedule and payments. I can just focus on the teaching!",
    img: DanceAvatar,
  },
  {
    name: "Anna K",
    class: "Chess Instructor",
    message:
      "The platform has been fantastic in allowing me to teach chess whenever I want. I just list my class, and everything else—from bookings to payments—is handled through the app. I personally like that I can easily chat with students and manage my schedule on a weekly or daily basis.",
    img: ChessAvatar,
  },
]

const ReviewSection = () => {
  return (
    <OuterContainer>
      <Container>
        <div>
          <Title>Here’s what the instructors are saying</Title>
        </div>
        <div>
          <EmblaCarousel slides={SLIDES} />
        </div>
      </Container>
    </OuterContainer>
  )
}

export default ReviewSection
