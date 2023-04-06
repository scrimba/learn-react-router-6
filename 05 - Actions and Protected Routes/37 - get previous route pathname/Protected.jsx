import React from "react"
import { redirect } from "react-router-dom"
import { requireAuth } from "./requireAuth"

export async function loader() {
    await requireAuth()
    return null
}

export default function Protected() {
    return (
        <h1>Super secret info here</h1>
    )
}
