import { Routes, Route, Navigate } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useAuthContext } from "./context/AuthContext"

const App = () => {
  const { authUser } = useAuthContext()

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to={"/login"}/>}/>
        <Route path="/login" element={authUser ? <Navigate to={"/"}/> : <LoginPage />}/>
        <Route path="/signup" element={authUser ? <Navigate to={"/"}/> : <SignUpPage />}/>
      </Routes>
      <ToastContainer autoClose={3000}/>
    </div>
  )
}

export default App
