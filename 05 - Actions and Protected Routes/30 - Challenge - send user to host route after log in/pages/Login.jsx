import React from "react"
import {
    useLoaderData,
    useNavigate,
    Form
} from "react-router-dom"
import { loginUser } from "../api"

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

/**
 * Challenge: figure out how to send the user to the /host
 * route after they successfully log in
 */

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const data = await loginUser({ email, password })
    localStorage.setItem("loggedin", true)

    return null
}

export default function Login() {
    const [status, setStatus] = React.useState("idle")
    const [error, setError] = React.useState(null)
    const message = useLoaderData()
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        setError(null)
        loginUser(loginFormData)
            .then(data => {
                navigate("/host", { replace: true })
            })
            .catch(err => setError(err))
            .finally(() => setStatus("idle"))
    }

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {message && <h3 className="red">{message}</h3>}
            {error && <h3 className="red">{error.message}</h3>}

            <Form method="post" className="login-form">
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
