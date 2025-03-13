import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import React from "react"
import styled from "styled-components"
import { ReviewCard } from "../../../base/reviewCard/ReviewCard"
import { themeColor } from "./../../../theme"
import { DotButton, useDotButton } from "./EmblaCarouselDotButton"

const EmblaCarousel = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 8000 }),
  ])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  return (
    <Embla>
      <EmblaViewport ref={emblaRef}>
        <EmblaContainer>
          {slides.map((slide, index) => (
            <EmblaSlide key={index}>
              <ReviewCard
                img={slide.img}
                name={slide.name}
                subTitle={slide.class}
                message={slide.message}
                rate={5}
              />
            </EmblaSlide>
          ))}
        </EmblaContainer>
      </EmblaViewport>
      <div>
        <EmblaControls>
          <EmblaDots>
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={
                  index === selectedIndex ? "embla__dot--selected" : ""
                }
              />
            ))}
          </EmblaDots>
        </EmblaControls>
      </div>
    </Embla>
  )
}

export default EmblaCarousel

const Embla = styled.section`
  --slide-height: 19rem;
  --slide-spacing: 1rem;
  --slide-size: 100%;
  max-width: 371px;
  /* @media (min-width: 768px) {
    max-width: 558px;
  } */
  @media (min-width: 1280px) {
    max-width: 630px;
  }
`
const EmblaViewport = styled.div`
  overflow: hidden;
`
const EmblaContainer = styled.div`
  display: flex;
  margin-left: calc(var(--slide-spacing) * -1);
`

const EmblaSlide = styled.div`
  transform: translate3d(0, 0, 0);
  flex: 0 0 var(--slide-size);
  min-width: 0;
  padding-left: var(--slide-spacing);
  display: grid;
  gap: 19px;
`

const EmblaUserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
const EmblaUserAvatar = styled.img`
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
const EmblaUserInfoContainer = styled.div`
  display: grid;
  gap: 10px;
`
const EmblaUserInfoName = styled.p`
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
const EmblaUserInfoClass = styled.p`
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

const EmblaSlideReview = styled.div`
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

const EmblaControls = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`
const EmblaDots = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
