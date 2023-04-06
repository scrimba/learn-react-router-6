import { redirect } from "react-router-dom"

export async function requireAuth() {
    const isLoggedIn = false
    
    if (!isLoggedIn) {
        throw redirect("/login?message=You must log in first")
    }
}