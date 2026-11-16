
import React from 'react'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <>
      <div className="container mt-5 text-center">
        <div className="card shadow border-0 p-5">
          <h1 className="fw-bold mb-3">Simple Auth App</h1>

          <div>
            <a href="/login" className="btn btn-primary me-2">
              Login
            </a>

            <a href="/register" className="btn btn-outline-primary">
              Register
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
