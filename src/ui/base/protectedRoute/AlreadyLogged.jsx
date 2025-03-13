import { useAuth } from "context/AuthContext"
import { appRoute } from "pages/app/app.routes"
import { Navigate } from "react-router-dom"

export const AlreadyLogged = ({ children }) => {
  const { token } = useAuth()
  if (token) {
    return <Navigate to={appRoute.completeProfile.fullPath} />
  }
  return children
}
