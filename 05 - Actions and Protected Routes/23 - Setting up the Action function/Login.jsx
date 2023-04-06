import React from "react"
import { useNavigate, Form } from "react-router-dom"

export default function Login() {
    return (
        <Form>
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