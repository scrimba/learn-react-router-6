import React from "react"
import {
    useLoaderData,
    useNavigate,
    Form,
    redirect,
    useActionData
} from "react-router-dom"
import { loginUser } from "../api"

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

/**
 * Challenge: Remove error handling from the component state
 * and and a try...catch to the action to better handle the
 * errors, just like we just practiced.
 */

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    try {
        const data = await loginUser({ email, password })
        localStorage.setItem("loggedin", true)
        return redirect("/host")
    } catch(err) {
        return err.message
    }
}

/**
 * Challenge: Use useNavigation in order to track the current
 * status of the form submission and remove all the `status`
 * tracking we were handling manually in state.
 * 
 * Then, you should be able to completely remove the handleSubmit
 * function 🎉
 */

export default function Login() {
    const [status, setStatus] = React.useState("idle")
    const errorMessage = useActionData()
    const message = useLoaderData()
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        loginUser(loginFormData)
            .then(data => {
                navigate("/host", { replace: true })
            })
            .finally(() => setStatus("idle"))
    }

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {message && <h3 className="red">{message}</h3>}
            {errorMessage && <h3 className="red">{errorMessage}</h3>}

            <Form 
                method="post" 
                className="login-form" 
                replace
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
