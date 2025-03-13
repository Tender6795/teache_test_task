import React from "react"
import styled from "styled-components"
import FallbackClassImg from "../../../assets/fallback.png"
import StarIcon from "../../../static/pictures/star.svg";
import {themeColor, themeFontSize} from "../../theme"

export const MapClassCard = ({classData}) => {
    return (
        <Container>
            <ImageContainer>
                {classData?.img ? (
                    <Img src={classData.img}/>
                ) : (
                    <Img src={FallbackClassImg}/>
                )}
            </ImageContainer>
            {classData ? (
                <TextContainer>
                    <TitleText>{classData.title}</TitleText>

                    <OneLine>
                        <RatingContainer>
                            <Icon src={StarIcon}/>
                            <RatingText>{classData.rating}</RatingText>
                        </RatingContainer>

                        <ReviewText>{classData.reviews}</ReviewText>
                    </OneLine>


                    <PriceText>{classData.price}</PriceText>
                    <SeeMoreText>See more</SeeMoreText>
                </TextContainer>
            ) : (
                <TextContainer>
                    <PlaceholderText width={65}/>
                    <PlaceholderText/>
                    <PlaceholderText/>
                </TextContainer>
            )}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 280px;
`

const ImageContainer = styled.div`
    /* width: 100%; */
    border-radius: 6px;
    margin-bottom: 6px;
`
const Img = styled.img`
    width: 280px;
    height: 200px;
    object-fit: cover;
    border-radius: 6px;
    background: #0000000d;
`

const Icon= styled.img`
    width: 20px;
    height: 20px;
    object-fit: cover;
`

const OneLine = styled.div`
    display: flex;
    gap: 12px
`

const RatingText = styled.p`
    color: ${themeColor("pink")};
    font-size: ${themeColor("small")};
    font-weight: 600;
`

const ReviewText = styled.p`
    color: ${themeColor("lightGrey")};
    font-size: ${themeFontSize("regular")};
    font-weight: 600;
`

const TitleText = styled.p`
    color: ${themeColor("txt")};
    font-size: ${themeFontSize("large")};
    font-weight: 600;
`

const PriceText = styled.p`
    color: ${themeColor("txt")};
    font-size: ${themeFontSize("medium")};
    font-weight: 600;
`

const SeeMoreText = styled.p`
    font-size: ${themeFontSize("small")};
    font-weight: 500;
    text-decoration: underline;
    opacity: 0.7;
    cursor: pointer;
`

const TextContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
`
const RatingContainer = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`

const PlaceholderText = styled.div`
    width: ${({width}) => (width ? width + "%" : "90%")};
    height: 13px;
    border-radius: 5px;
    background: ${themeColor("buttonBgNeutral")};
`
