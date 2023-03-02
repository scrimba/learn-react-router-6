import React from "react"
import { Outlet, Link } from "react-router-dom"

export default function Layout() {
  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="protected">Protected</Link>
      <Link to="login">Log in</Link>
    </nav>
    <main>
      <Outlet />
    </main>
    </>
  );
}
