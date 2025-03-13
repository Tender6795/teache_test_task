import { useCallback, useEffect, useState } from "react"
import styled from "styled-components"
import { ChevronLeft, ChevronRight } from "../../icons"
import { themeColor } from "../../theme"

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on("reInit", onSelect).on("select", onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  }
}

export const PrevButton = (props) => {
  const { children, ...restProps } = props

  return (
    <EmblaButton {...restProps}>
      <EmblaSvgContainer>
        <ChevronLeft />
      </EmblaSvgContainer>
      {children}
    </EmblaButton>
  )
}

export const NextButton = (props) => {
  const { children, ...restProps } = props

  return (
    <EmblaButton {...restProps}>
      <EmblaSvgContainer>
        <ChevronRight />
      </EmblaSvgContainer>
      {children}
    </EmblaButton>
  )
}

export const EmblaButton = styled.button`
  appearance: none;
  background-color: transparent;
  display: inline-flex;
  text-decoration: none;
  cursor: pointer;
  border-width: 2px;
  border-style: solid;
  border-color: ${themeColor("lightBlue")};
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const EmblaSvgContainer = styled.div`
  color: ${themeColor("txt")};
`
