import { redirect } from "react-router-dom"

export async function requireAuth() {
    const isLoggedIn = true
    
    if (!isLoggedIn) {
        throw redirect("/login?message=You must log in first.")
    }
}