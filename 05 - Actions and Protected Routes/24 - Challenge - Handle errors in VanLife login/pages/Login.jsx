import React from "react"
import { useNavigate, useLocation, useActionData, Form } from "react-router-dom"
import { loginUser } from "../api"

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const data = await loginUser({email, password})
    localStorage.setItem("loggedin", true)
    return data
}

/**
 * Challenge: Remove any local state we created prior for 
 * handling errors, and instead handle errors via the action 
 * function with a helpful message on the login page. 
 * 
 * Hints: 
 * - You can trigger an error by submitting the form
 *   without filling it out. 
 * - Check api.js to see what the structure of the error object 
 *   coming back from the loginUser function will look like.
 */

export default function Login() {
    const [status, setStatus] = React.useState("idle")
    const [error, setError] = React.useState(null)
    const data = useActionData()
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from || "/host";
 
    if (data?.token) {
        navigate(from, { replace: true })
    }
    
    return (
        <div className="login-container">
            {
                location.state?.message && 
                <h3 className="login-error">{location.state.message}</h3>
            }
            <h1>Sign in to your account</h1>
            {
                error && 
                <h3 className="login-error">{error.message}</h3>
            }
            <Form 
                action="/login" 
                method="post"
                className="login-form"
            >
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button 
                    disabled={status === "submitting"}
                >
                    {status === "submitting" 
                        ? "Logging in..." 
                        : "Log in"
                    }
                </button>
            </Form>
        </div>
    )

}