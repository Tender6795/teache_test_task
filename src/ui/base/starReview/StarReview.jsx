import React from "react"
import styled from "styled-components"
import StarRatingIcon from "../../icons/StarRatingIcon"
import { HelperText } from "./../helperText/HelperText"

const ratingArray = [1, 2, 3, 4, 5]
export const StarReview = ({
  rate,
  setRate,
  label,
  isError,
  errorText,
  color = "#E2E1F1",
  filledColor = "#FF827A",
  size = 30,
}) => {
  return (
    <Container>
      {label ? (
        <HelperText size='medium' sizeMobile='regular'>
          {label}
        </HelperText>
      ) : null}
      <RatingContainer>
        {ratingArray.map((givenRating) => {
          return (
            <label key={givenRating}>
              <Radio
                type='radio'
                value={givenRating}
                onClick={() => {
                  setRate?.(givenRating)
                }}
              />
              <Rating>
                <StarRatingIcon
                  width={size}
                  height={size}
                  color={
                    givenRating < rate || givenRating === rate
                      ? filledColor
                      : color
                  }
                />
              </Rating>
            </label>
          )
        })}
      </RatingContainer>
      {isError && errorText ? (
        <HelperText color='pink' size='small'>
          {errorText}
        </HelperText>
      ) : null}
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  gap: 10px;
`
const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Radio = styled.input`
  display: none;
`
const Rating = styled.div`
  cursor: pointer;
`
