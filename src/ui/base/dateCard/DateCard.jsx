import styled from "styled-components"
import { themeColor, themeFontSize } from "../../theme"

export const DateCard = ({
  date: { date, time, cost, type },
  action,
}) => (
    <CardContainer>
      {type && (
        <TypeColumn>
          <InfoLabel>TYPE</InfoLabel>
          <InfoValue>{type}</InfoValue>
        </TypeColumn>
      )}

      <InfoColumn>
        <InfoLabel>DATE</InfoLabel>
        <InfoValue>{date}</InfoValue>
      </InfoColumn>

      <InfoColumn>
        <InfoLabel>TIME</InfoLabel>
        <InfoValue>{time}</InfoValue>
      </InfoColumn>

      <InfoColumn>
        <InfoLabel>COST</InfoLabel>
        <InfoValue>{cost}</InfoValue>
      </InfoColumn>

      {action ? action : null}
    </CardContainer>
  )

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 100%;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgb(237, 240, 255);
  & > :last-child {
    margin-left: auto;
  }
  @media (min-width: 768px) {
    & > :last-child {
      margin-left: 0px;
    }
  }
`

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
`

const TypeColumn = styled.div`
  display: flex;
  flex-direction: column;
`

const InfoLabel = styled.span`
  color: ${themeColor("txt")};
  opacity: 0.5;
  font-size: ${themeFontSize("extraSmall")};
  font-weight: 600;
  margin-bottom: 5px;
`

const InfoValue = styled.span`
  color: ${themeColor("txt")};
  font-size: ${themeFontSize("regular")};
  font-weight: 600;
`
