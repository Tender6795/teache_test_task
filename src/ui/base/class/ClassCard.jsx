import FallbackClassImg from "assets/fallback.png"
import styled from "styled-components"
import { StarFullIcon } from "ui/icons/StarFullIcon"
import { themeColor, themeFontSize } from "ui/theme"
import { getAvatarUrl, getLowestValidPrice } from "utils"

export const ClassCard = ({ classData, onClick }) => {
  return (
    <Container>
      {classData ? (
        <>
          <ImageContainer onClick={onClick}>
            {classData?.user?.gallery[0]?.name || classData?.profile_pic ? (
              <Img
                src={getAvatarUrl(
                  classData?.user?.gallery[0]?.name || classData?.profile_pic
                )}
              />
            ) : (
              <Img src={FallbackClassImg} />
            )}
          </ImageContainer>
          <TextContainer>
            <TitleText>{classData?.subject_sub_category}</TitleText>
            <RatingText>
              <p className='rating'>
                <StarFullIcon />
                {classData?.rate || 0}
              </p>
              <p className='review'>({classData?.review || 0} reviews)</p>
            </RatingText>
            <PriceText>
              {`from $${getLowestValidPrice(
                classData?.type_of_class,
                classData?.price_per_group_class,
                classData?.price_per_private_class
              )} / person`}
            </PriceText>
            <SeeMoreText onClick={onClick}>see more</SeeMoreText>
          </TextContainer>
        </>
      ) : (
        <>
          <ImageContainer>
            <Img src={FallbackClassImg} />
          </ImageContainer>
          <TextContainer>
            <PlaceholderText />
            <PlaceholderText width={65} />
            <PlaceholderText />
          </TextContainer>
        </>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  gap: 13px;
`

const ImageContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
`
const Img = styled.img`
  width: 100%;
  height: 342px;
  object-fit: cover;
  border-radius: 10px;
  background: #0000000d;
`

const TextContainer = styled.div`
  display: grid;
  gap: 5px;
`

const RatingText = styled.div`
  font-size: ${themeFontSize("small")};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  & > .rating {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    color: ${themeColor("pink")};
    & > svg {
      width: 0.85rem;
      height: 0.85rem;
    }
  }
  & > .review {
    color: ${themeColor("txt")};
    opacity: 0.6;
  }
`

const TitleText = styled.p`
  font-size: ${themeFontSize("regular")};
  font-weight: 600;
`

const PriceText = styled.p`
  font-size: ${themeFontSize("small")};
  font-weight: 600;
`

const SeeMoreText = styled.button`
  all: unset;
  font-size: ${themeFontSize("small")};
  font-weight: 600;
  text-decoration: underline;
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`

const PlaceholderText = styled.div`
  width: ${({ width }) => (width ? width + "%" : "85%")};
  height: 13px;
  border-radius: 5px;
  background: ${themeColor("buttonBgNeutral")};
`
