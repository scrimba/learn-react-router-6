import React from "react"
import { Form, useActionData } from "react-router-dom"

async function fakeLoginUser(creds) {
    if (creds.email === "b@b.com" && creds.password === "p123") {
        localStorage.setItem("loggedin", true)
        return {
            email: creds.email,
            token: "1234567890abcdef"
        }
    }
    throw new Error("Couldn't log the user in")
}

export async function action({ request }) {
    /**
     * Challenge: add a try...catch block that attempts to log the user
     * in with `fakeLoginUser({email, password}). If it's successful,
     * redirect the user to the /protected route. If there's an error,
     * return the error message that gets thrown from the fakeLoginUser
     * function.
     */
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    // ??
}

export default function Login() {
    const error = useActionData()
    return (
        <Form method="post" replace>
            <h2>Login</h2>
            {error && <h4 className="red">{error}</h4>}
            <input
                type="email"
                name="email"
                placeholder="Email address"
            />
            <br />
            <input
                type="password"
                name="password"
                placeholder="Password"
            />
            <br />
            <button>Log in</button>
        </Form>
    )
}