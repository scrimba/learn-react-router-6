import React from "react"
import { useNavigate, useActionData, Form } from "react-router-dom"

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fakeLoginUser(creds) {
    await sleep(2000)
    return { token: "Here's your token!" }
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")

    try {
        const data = await fakeLoginUser({ email, password })
        return data
    } catch (err) {
        return {
            error: err.message
        }
    }
}

export default function Login() {
    const navigate = useNavigate()
    const data = useActionData()

    return (
        <>
            {data?.error && <h4>{data.error}</h4>}
            {data?.token && navigate("/protected")}
            
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
        </>
    )
}