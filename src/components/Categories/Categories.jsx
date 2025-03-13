import styled from "styled-components"
import { CookingIcon } from "../../icons/category/CookingIcon"
import { FitnessIcon } from "../../icons/category/FitnessIcon"
import { LanguageIcon } from "../../icons/category/LanguageIcon"
import { MeditationIcon } from "../../icons/category/MeditationIcon"
import { MusicIcon } from "../../icons/category/MusicIcon"
import { PaintingIcon } from "../../icons/category/PaintingIcon"
import { PhotographyIcon } from "../../icons/category/PhotographyIcon"
import { WritingIcon } from "../../icons/category/WritingIcon"

const array = [
  { label: "Fitness", icon: <FitnessIcon /> },
  { label: "Music", icon: <MusicIcon /> },
  { label: "Painting", icon: <PaintingIcon /> },
  { label: "Cooking", icon: <CookingIcon /> },
  { label: "Meditation", icon: <MeditationIcon /> },
  { label: "Yoga", icon: <MeditationIcon /> },
  { label: "Writing", icon: <WritingIcon /> },
  { label: "Photography", icon: <PhotographyIcon /> },
  { label: "Languages", icon: <LanguageIcon /> },
]

export const Categories = () => {
  return (
    <Container>
      {array.map((category) => (
        <CategoryButton key={category.label}>
          {category.icon}
          {category.label}
        </CategoryButton>
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 8px;
  height: 90px;
  overflow: hidden;
`

const CategoryButton = styled.div`
  outline: none;
  color: #191D3A;
  text-transform: capitalize;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 10px 1rem;
  border-width: 1px;
  border-style: solid;
  border-color: #EDF0FF;
  border-radius: 99px;
  & > svg {
    width: 25px;
    height: 25px;
  }
`
