import React from "react"
import {Outlet} from "react-router-dom"

export default function AuthRequired() {
    // Check the authenticated status of the user 
    // If they're NOT logged in
        // Send them to the login page
    // If they ARE logged in
        // Render the Outlet
    return <Outlet />
}