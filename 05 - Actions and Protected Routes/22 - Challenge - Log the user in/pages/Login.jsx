import React from "react"
import { useNavigate, useLocation, Form } from "react-router-dom"
import { loginUser } from "../api"

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const data = await loginUser({email, password})
    localStorage.setItem("loggedin", true)
}

/**
 * Challenge: Get the data from the action into your component.
 * If the data has a `token` property, navigate the user to 
 * whatever the value of `from` is. (There is more than one
 * way to accomplish this 👍🏻)
 */

export default function Login() {
    const [status, setStatus] = React.useState("idle")
    const [error, setError] = React.useState(null)
    
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from || "/host";
 
    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        setError(null)
        loginUser(loginFormData)
            .then(data => {
                localStorage.setItem("loggedin", true)
                navigate(from, { replace: true })
            })
            .catch(err => {
                setError(err)
            })
            .finally(() =>{
                setStatus("idle")
            })
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