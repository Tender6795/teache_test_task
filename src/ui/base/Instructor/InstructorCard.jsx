import FallbackClassImg from "assets/fallback.png"
import styled from "styled-components"
import { StarFullIcon } from "ui/icons/StarFullIcon"
import { themeColor, themeFontSize } from "ui/theme"
import { getAvatarUrl, getLowestValidPrice } from "utils"

const getImage = (gallery, profile_pic) => {
  return gallery.length > 0 ? gallery[0] : profile_pic
}

export const InstructorCard = ({ instructor, onClick }) => {
  return (
    <Container>
      <ImageContainer onClick={onClick}>
        {instructor?.profile_pic || instructor?.user?.gallery[0]?.name ? (
          <Img
            src={getAvatarUrl(
              instructor.profile_pic || instructor?.user?.gallery[0]?.name
            )}
          />
        ) : (
          <Img src={FallbackClassImg} />
        )}
        <RatingText>
          <StarFullIcon />
          {instructor?.rate || 0}
        </RatingText>
      </ImageContainer>
      <TextContainer>
        <TitleText>{instructor?.subject_sub_category}</TitleText>
        <Username>{`${instructor?.user?.first_name || ""} ${
          instructor?.user?.last_name?.[0] || ""
        }.`}</Username>
        <PriceText>
          {`from $${getLowestValidPrice(
            instructor?.type_of_class,
            instructor?.price_per_group_class,
            instructor?.price_per_private_class
          )} / person`}
        </PriceText>
      </TextContainer>
    </Container>
  )
}

const Container = styled.div`
  padding-left: 1rem;
  flex: 0 0 280px;
  display: grid;
  gap: 13px;
  height: fit-content;
  padding-bottom: 1rem;
`

const ImageContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  aspect-ratio: 1/1;
  position: relative;
  cursor: pointer;
`
const Img = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 10px;
  background: #0000000d;
`

const TextContainer = styled.div`
  display: grid;
  gap: 5px;
`

const Username = styled.p`
  font-size: ${themeFontSize("small")};
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${themeColor("txt")};
  opacity: 0.6;
`

const TitleText = styled.p`
  font-size: ${themeFontSize("regular")};
  font-weight: 600;
`

const PriceText = styled.p`
  font-size: ${themeFontSize("small")};
  font-weight: 600;
`

const RatingText = styled.p`
  position: absolute;
  top: 0.6rem;
  left: 0.6rem;
  font-size: ${themeColor("small")};
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.2rem 0.5rem;
  background-color: ${themeColor("blue")};
  color: ${themeColor("white")};
  border-radius: 5px;
  & > svg {
    width: 0.85rem;
    height: 0.85rem;
  }
`
