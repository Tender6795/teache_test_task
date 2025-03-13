import { appRoute } from "pages/app/app.routes"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { AppButton } from "ui/base/appButton/AppButton"
import { HelperText } from "ui/base/helperText/HelperText"
import { themeColor, themeFontSize } from "ui/theme"

export const AccountInstructor = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <TextContainer>
        <Title>
          Join Teache <br />
          Start Earning
        </Title>
      </TextContainer>

      <Content>
        <AppButton onClick={() => navigate(appRoute.createAccount.fullPath)}>
          Sign up
        </AppButton>
        <Link to={appRoute.login.fullPath} style={{ textAlign: "center" }}>
          <HelperText
            color='pink'
            centerMobile
            center
            size='regular'
            sizeMobile='regular'
            style={{ cursor: "pointer" }}>
            Log in
          </HelperText>
        </Link>
        <Text>Qualified instructors who sign up will receive a $25 bonus!</Text>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  gap: 40px;
  width: 100%;
  margin-inline: auto;
  font-family: Montserrat, sans-serif;
  margin-top: 2dvh;
  max-width: 560px;
  @media (max-width: 1200px) {
    max-width: 460px;
  }
  @media (max-width: 640px) {
    max-width: 100%;
  }
`
const Title = styled.p`
  color: ${themeColor("txt")};
  font-size: 4vw;
  text-align: center;
  font-family: Poppins, Montserrat, sans-serif;
  font-weight: 600;
  line-height: 4.2vw;
  margin-inline: auto;
  max-width: 900px;
  @media (max-width: 1400px) {
    font-size: 4.8vw;
    line-height: 5.5vw;
  }
  @media (max-width: 640px) {
    font-size: 9vw;
    line-height: 12vw;
  }
  @media (max-width: 350px) {
    font-size: 8vw;
    line-height: 12vw;
  }
`

const Text = styled.div`
  font-size: ${themeFontSize("medium")};
  line-height: 27px;
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  margin-top: 15px;
  text-align: center;
  color: ${themeColor("blue")};

  @media (max-width: 1200px) {
    font-size: ${themeFontSize("small")};
    line-height: 30px;
    margin-top: 5px;
  }
  @media (max-width: 640px) {
    font-size: 3.75vw;
    line-height: 20px;
    margin-top: 1.5vw;
  }
  @media (max-width: 320px) {
    font-size: 3vw;
    line-height: 14px;
    margin-top: 1.5vw;
  }
`

const TextContainer = styled.div`
  display: grid;
  gap: 0.5rem;
`

const Content = styled.div`
  display: grid;
  gap: 1rem;
`
