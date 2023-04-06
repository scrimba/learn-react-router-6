import React from "react"
import { Outlet, Link } from "react-router-dom"

function fakeLogoutUser() {
  localStorage.removeItem("loggedin")
}

export default function Layout() {
  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="protected">Protected</Link>
      <Link to="login">Login</Link>
      <button onClick={fakeLogoutUser}>X</button>
    </nav>
    <main>
      <Outlet />
    </main>
    </>
  );
}
