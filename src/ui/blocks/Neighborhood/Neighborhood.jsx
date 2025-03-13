import React, { useState } from "react"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { pixelTrackEvent } from "../../../utils/facebookPixel"
import { Container } from "../../base/Container"
import { Input } from "../../base/Input"
import {
  Form,
  NeighborhoodWrapper,
  SendButton,
  Title,
} from "./NeighborhoodStyled"
const Neighborhood = () => {
  const [number, setNumber] = useState()

  const handleSubmit = () => {
    pixelTrackEvent("Home: Clicked on Send me a link")
    fetch("https://v1.teache.co/api/send-sms-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mobile_number: number }),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok")

        toast.success("Message Sent!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
        setNumber("")
      })
      .catch(() =>
        toast.warn("Check the number and try again", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      )
  }

  return (
    <NeighborhoodWrapper>
      <Container>
        <Title>See what classes are available in your neighborhood</Title>
        <Form>
          <Input
            number
            setValue={setNumber}
            value={number}
            max={15}
            placeholder='Mobile number'
          />
          <SendButton background='pink' onClick={handleSubmit}>
            Send me a link
          </SendButton>
        </Form>
      </Container>
    </NeighborhoodWrapper>
  )
}

export default Neighborhood
