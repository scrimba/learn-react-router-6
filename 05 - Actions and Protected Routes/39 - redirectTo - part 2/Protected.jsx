import React from "react"
import { redirect, Outlet } from "react-router-dom"
import { requireAuth } from "./requireAuth"

/**
 * Challenge: Figure out how to get the `pathname` from the
 * URL in the loader into the `redirectTo` query parameter
 * inside the requireAuth function `redirect()` call.
 */

export async function loader({ request }) {
    await requireAuth(request)
    return null
}

export default function Protected() {
    return (
        <>
            <h1>Super secret info here</h1>
            <Outlet />
        </>
    )
}
