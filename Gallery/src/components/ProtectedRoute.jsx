import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
    const isConnected = useSelector((state) => state.user.isConnected)

    if(!isConnected) {
        return <Navigate to="/" replace />
    }
  return children
}

export default ProtectedRoute
