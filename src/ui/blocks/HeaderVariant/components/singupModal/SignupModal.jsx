import { CreateAccountProvider } from "context/CreateAccountContext"
import { useState } from "react"
import styled from "styled-components"
import { Modal } from "ui/base/modal/Modal.jsx"
import { Otp } from "./Otp"
import { Signup } from "./Singup"

export const SignupModal = ({ show, handleClose, setLoginModal }) => {
  const [activeTab, setActiveTab] = useState("signup")
  return (
    <Modal show={show} handleClose={handleClose} maxWidth={600}>
      <Container>
        <svg
          width='192'
          height='192'
          viewBox='0 0 192 192'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M96 190C147.915 190 190 147.915 190 96C190 44.0852 147.915 2 96 2C44.0852 2 2 44.0852 2 96C2 147.915 44.0852 190 96 190Z'
            fill='#554DF1'
          />
          <path
            d='M163.975 96.2793C163.975 101.67 162.103 106.237 158.359 109.98C154.766 113.574 150.273 115.371 144.883 115.371C139.642 115.371 135.075 113.574 131.182 109.98C127.438 106.237 125.566 101.67 125.566 96.2793C125.566 88.3431 122.721 81.5299 117.031 75.8398C111.341 70 104.528 67.0801 96.5918 67.0801C88.5059 67.0801 81.6178 70 75.9277 75.8398C70.2376 81.5299 67.3926 88.3431 67.3926 96.2793C67.3926 104.215 70.2376 111.104 75.9277 116.943C81.6178 122.633 88.5059 125.479 96.5918 125.479C101.683 125.479 106.1 127.35 109.844 131.094C113.737 134.688 115.684 139.18 115.684 144.57C115.684 149.811 113.812 154.303 110.068 158.047C106.325 161.79 101.833 163.737 96.5918 163.887C77.5749 163.587 61.7025 156.999 48.9746 144.121C36.2467 131.243 29.5833 115.296 28.9844 96.2793C29.5833 77.2624 36.1719 61.39 48.75 48.6621C61.4779 35.7845 77.3503 29.1211 96.3672 28.6719C115.534 29.1211 131.481 35.8594 144.209 48.8867C157.087 61.7643 163.675 77.5618 163.975 96.2793ZM77.5 96.2793C77.5 91.0384 79.2969 86.5462 82.8906 82.8027C86.6341 78.9095 91.2012 76.9629 96.5918 76.9629C101.833 76.9629 106.325 78.9095 110.068 82.8027C113.962 86.5462 115.908 91.0384 115.908 96.2793C115.908 101.67 113.962 106.237 110.068 109.98C106.325 113.574 101.833 115.371 96.5918 115.371C91.2012 115.371 86.6341 113.574 82.8906 109.98C79.2969 106.237 77.5 101.67 77.5 96.2793Z'
            fill='white'
          />
        </svg>
        <CreateAccountProvider>
          <Tab active={activeTab === "signup"}>
            <Signup
              setActiveTab={setActiveTab}
              setLoginModal={setLoginModal}
              handleClose={handleClose}
            />
          </Tab>
          <Tab active={activeTab === "otp"}>
            <Otp setActiveTab={setActiveTab} handleClose={handleClose} />
          </Tab>
        </CreateAccountProvider>
      </Container>
    </Modal>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  gap: 1rem;
  & > svg {
    width: 70px;
    height: 70px;
  }
`

const Tab = styled.div`
  width: 100%;
  height: 100%;
  display: ${({ active }) => (active ? "flex" : "none")};
`
