import React from "react"
import { useNavigate, useLocation } from "react-router-dom"

/**
 * Challenge: hook up our form so it (halfway) works.
 * 
 * 1. Pull in the `loginUser` function from the api.js file
 * 2. Call loginUser when the form is submitted and log the
 *    data that comes back. Use "b@b.com" as the username and
 *    "p123" as the password.
 * 
 *    NOTE: loginUser returns a promise, so you'll need
 *    a .then(data => {...}) to access the data, or use
 *    a separate aync function defined inside handleSubmit
 * 3. TBA
 */

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState(
        { email: "", password: "" }
    )
    const location = useLocation()
    
    function handleSubmit(e) {
        e.preventDefault()
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
                <h3 className="login-first">{location.state.message}</h3>
            }
            <h1>Sign in to your account</h1>
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
                <button>Log in</button>
            </form>
        </div>
    )

}