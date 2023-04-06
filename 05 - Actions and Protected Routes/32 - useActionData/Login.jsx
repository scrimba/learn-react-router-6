import React from "react"
import { Form } from "react-router-dom"

async function fakeLoginUser(creds) {
    if (creds.email === "b@b.com" && creds.password === "p123") {
        return "User is logged in!"
    }
    throw new Error("Couldn't log the user in")
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
}

export default function Login() {
    return (
        <Form method="post" replace>
            <h2>Login</h2>
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