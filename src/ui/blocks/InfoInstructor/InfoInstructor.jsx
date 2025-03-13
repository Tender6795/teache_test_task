import React from "react"
import { Container } from "../../base/Container"
import { GearIcon, StarIcon, UserIcon } from "../../icons"
import { Col, Icon, InfoWrapper, Row, Text, Title } from "./InfoStyled"

const InfoMock = [
  {
    id: "user",
    icon: <UserIcon />,
    title: "Select Location",
    text: "Choose the location for your class - your home, public park, or anywhere you can teach.",
  },
  {
    id: "gear",
    icon: <GearIcon />,
    title: "Management",
    text: "Manage your own schedule and teach classes whenever you want.",
  },
  {
    id: "star",
    icon: <StarIcon />,
    title: "Payments",
    text: "Receive payments through the app and keep track of your earnings.",
  },
]

const InfoInstructor = () => {
  return (
    <InfoWrapper>
      <Container>
        <Row>
          {InfoMock.map((item) => (
            <Col key={item.id} className='last'>
              <Icon>{item.icon}</Icon>
              <Title>{item.title}</Title>
              <Text>{item.text}</Text>
            </Col>
          ))}
        </Row>
      </Container>
    </InfoWrapper>
  )
}

export default InfoInstructor
