import React from "react"
import { useNavigate, Form } from "react-router-dom"

export async function action(obj) {
    console.log(obj)
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