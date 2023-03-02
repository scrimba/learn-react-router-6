import React from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { loginUser } from "../api"

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState(
        { email: "", password: "" }
    )
    const [status, setStatus] = React.useState("idle")
    const [error, setError] = React.useState(null)
    
    const location = useLocation()
    const navigate = useNavigate()
    
    /**
     * Challenge: make it so after login, we go to the page
     * we originally were trying to go to instead of always
     * to the /host route. If the user wasn't redirected to
     * the login page (i.e. they clicked the link to the login
     * page instead of being redirected there from a protected 
     * route) they should be redirected to /host by default.
     * 
     * Hint: you'll need to add code to AuthRequired.jsx and
     * Login.jsx
     */
    
    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        setError(null)
        loginUser(loginFormData)
            .then(data => {
                localStorage.setItem("loggedin", true)
                navigate("/host", { replace: true })
            })
            .catch(err => {
                setError(err)
            })
            .finally(() =>{
                setStatus("idle")
            })
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
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
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button 
                    disabled={status === "submitting"}
                >
                    {status === "submitting" 
                        ? "Logging in..." 
                        : "Log in"
                    }
                </button>
            </form>
        </div>
    )

}