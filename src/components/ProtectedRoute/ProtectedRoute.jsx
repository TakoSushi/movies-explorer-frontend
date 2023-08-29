import { Navigate } from "react-router-dom";

function ProtectedRoute ({ element: Component, isLoggedIn, ...props  }) {

  return (
    isLoggedIn ? <Component isLoggedIn={isLoggedIn} {...props} /> : <Navigate to="/" replace/>
)}

export { ProtectedRoute };