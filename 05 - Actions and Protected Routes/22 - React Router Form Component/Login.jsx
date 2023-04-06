import React from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {
    const [formData, setFormData] = React.useState({ email: "", password: "" })
    const navigate = useNavigate()
    
    function handleChange(e) {
        const { name, value } = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
        // loginUser(formData)
        navigate("/protected")
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
            />
            <br />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
            />
            <br />
            <button>Log in</button>
        </form>
    )
}