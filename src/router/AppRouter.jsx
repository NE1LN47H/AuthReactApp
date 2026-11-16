import { Routes, Route } from "react-router"
import Home from "../pages/Home"
import Register from "../components/auth/Register"
import Login from "../components/auth/Login"

function AppRouter() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
    </Routes>
  )
}

export default AppRouter