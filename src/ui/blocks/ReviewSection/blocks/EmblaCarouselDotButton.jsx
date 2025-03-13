import React, { useCallback, useEffect, useState } from "react"
import styled from "styled-components"
import { themeColor } from "../../../theme"

export const useDotButton = (emblaApi) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const onDotButtonClick = useCallback(
    (index) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect)
  }, [emblaApi, onInit, onSelect])

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  }
}

export const DotButton = (props) => {
  const { children, ...restProps } = props

  return (
    <EmblaDot type='button' {...restProps}>
      {children}
    </EmblaDot>
  )
}

const EmblaDot = styled.button`
  background-color: ${themeColor("lightBlue")};
  display: inline-flex;
  text-decoration: none;
  cursor: pointer;
  border: 0;
  padding: 0;
  margin: 0;
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  &.embla__dot--selected {
    background-color: ${themeColor("blue")};
  }
`
