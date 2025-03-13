import useEmblaCarousel from "embla-carousel-react"
import styled from "styled-components"
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../Button/EmblaButtons"
import { InstructorCard } from "./InstructorCard"

export const InstructorCarousel = ({
  slides,
  options,
  title,
  onSlideClick,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  return (
    <Embla>
      <EmblaControls>
        <EmblaTitle>{title}</EmblaTitle>
        <EmblaButtons>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </EmblaButtons>
      </EmblaControls>

      <EmblaViewport ref={emblaRef}>
        <EmblaContainer>
          {slides?.map((slide, index) => (
            <InstructorCard
              key={index}
              instructor={slide}
              onClick={() => onSlideClick?.(slide.user_id)}
            />
          ))}
        </EmblaContainer>
      </EmblaViewport>
    </Embla>
  )
}

const Embla = styled.section`
  max-width: 100%;
  margin: auto;
`

const EmblaViewport = styled.div`
  overflow: hidden;
`

const EmblaContainer = styled.div`
  display: flex;
  touch-action: pan-y pinch-zoom;
  margin-left: calc(1rem * -1);
`

const EmblaSlide = styled.div`
  transform: translate3d(0, 0, 0);
  flex: 0 0 293px;
  min-width: 0;
  padding-left: 1rem;
`

const EmblaSlideNumber = styled.div`
  box-shadow: inset 0 0 0 0.2rem;
  border-radius: 1.8rem;
  font-size: 4rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 19rem;
  user-select: none;
`

const EmblaControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.8rem;
`
const EmblaButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.6rem;
  align-items: center;
`
const EmblaTitle = styled.div`
  font-family: Montserrat, sans-serif;
  font-size: 34px;
  font-weight: 600;
  line-height: 41.98px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`
