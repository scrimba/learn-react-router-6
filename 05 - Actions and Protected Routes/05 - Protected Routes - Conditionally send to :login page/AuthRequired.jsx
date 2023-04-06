import React from "react"
import { Outlet } from "react-router-dom"

export default function AuthRequired() {
    // Fake auth
    // If the user is not logged in
        // Redirect them to the /login route
    // Otherwise:
    return <Outlet />
}