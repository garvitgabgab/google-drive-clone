import React, { Profiler } from "react"
import Signup from "./authentication/Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Profile from "./authentication/Profile"
import PrivateRoute from "./authentication/PrivateRoute"
import Login from "./authentication/Login"
import Dashboard from "./google-drive/Dashboard"
import ForgotPassword from "./authentication/ForgotPassword"
import UpdateProfile from "./authentication/UpdateProfile"
import CenteredContainer from "./authentication/CenteredContainer"

function App() {
  return (
    // <Container
    //   className="d-flex align-items-center justify-content-center"
    //   style={{ minHeight: "100vh" }}
    // >
    //   <div className="w-100" style={{ maxWidth: "400px" }}>
    <Router>
      <AuthProvider>

        <Routes>
          {/* Drive */}
          <Route
            path="/"
            element={<PrivateRoute
            > <Dashboard /> </PrivateRoute>}
          />

          <Route path="/folder/:folderId" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />


          {/* Profile */}
          <Route
            path="/user"
            element={<PrivateRoute> <Profile /></PrivateRoute>}
          />
          <Route
            path="/update-profile"
            element={<PrivateRoute> <UpdateProfile /></PrivateRoute>}
          />

          {/* Auth */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </AuthProvider>
    </Router>
    //   </div>
    // </Container>
  )
}

export default App;
