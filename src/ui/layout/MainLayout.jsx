import { SignupModalProvider } from "context/SignupModalContext"
import { Outlet } from "react-router-dom"
import { FooterVariant } from "ui/blocks/FooterVariant/FooterVariant"
import { HeaderVariant } from "ui/blocks/HeaderVariant/HeaderVariant"

export const MainLayout = ({ children, primary }) => {
  return (
    <SignupModalProvider>
      <HeaderVariant primary={primary} />
      {children ? children : <Outlet />}
      <FooterVariant />
    </SignupModalProvider>
  )
}
