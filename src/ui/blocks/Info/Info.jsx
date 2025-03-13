import React, { forwardRef } from "react"
import { Container } from "../../base/Container"
import { CheckIcon, GearIcon, StarIcon, UserIcon } from "../../icons"
import { Col, Icon, InfoWrapper, Row, Text, Title } from "./InfoStyled"

const InfoMock = [
  {
    id: "check",
    icon: <CheckIcon />,
    title: "Class Variety",
    text: "Wide range of variety in classes. Everything that can be learned, can be taught.",
  },
  {
    id: "user",
    icon: <UserIcon />,
    title: "In-person Classes",
    text: "Teache focuses on in-person classes offered in your current location.",
  },
  {
    id: "gear",
    icon: <GearIcon />,
    title: "Management",
    text: "Through the app, you can manage classes, your calendar, communications, and payments.",
  },
  {
    id: "star",
    icon: <StarIcon />,
    title: "All Levels",
    text: "Classes available to beginners, experienced, and experts.",
  },
]

const Info = forwardRef((props, ref) => {
  return (
    <InfoWrapper>
      <Container>
        <Row ref={ref}>
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
})

export default Info
