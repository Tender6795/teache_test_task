import { useScrollContext } from "context/ScrollContext"
import React from "react"
import { BottomWrapper } from "./BottomStyled"

const Bottom = ({ children, ...props }) => {
  const { position, setPosition } = useScrollContext()

  return <BottomWrapper {...props}>{children}</BottomWrapper>
}

export default Bottom
