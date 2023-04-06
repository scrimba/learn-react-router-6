import { redirect } from "react-router-dom"

/**
 * Challenge: Implement the `redirectTo` feature we just
 * learned about to VanLife!
 * 
 * 1. Pass the request to all calls to `requireAuth` (this
 *    includes all inline loaders on /host routes as well
 *    as the loaders defined separately inside the component
 *    files of /host routes)
 * 2. Receive the request in requireAuth and pass along a
 *    search param of `redirectTo`
 * 3. You're on your own for the last part :) You can do it! 💪
 */

export async function requireAuth() {
    const isLoggedIn = localStorage.getItem("loggedin")

    if (!isLoggedIn) {
        throw redirect("/login?message=You must log in first.")
    }
}
