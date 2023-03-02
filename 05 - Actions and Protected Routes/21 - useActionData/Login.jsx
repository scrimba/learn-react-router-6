import React from "react"
import { useNavigate, Form } from "react-router-dom"

async function fakeLoginUser(creds) {
    return { token: "Here's your token!" }
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const data = await fakeLoginUser({email, password})
    // ?? Now what?
}

export default function Login() {
    const navigate = useNavigate()

    return (
        <Form action="/login" method="post">
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