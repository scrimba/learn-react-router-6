import React from "react"
import {Outlet} from "react-router-dom"

export default function AuthRequired() {
    const auth = { token: "1234" }
    if (!auth.token) {
        // Send them to the login page
    }
    if (auth.token) {
        return <Outlet />
    }
}