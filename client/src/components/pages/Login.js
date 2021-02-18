import { useEffect, useState } from 'react'

function Login() {
    const [input, setInput] = useState({
        username: '',
        password: ''
    })

// Runs when any input changes value and then changes the state object with input name and value
    const handleChange = (event) => {
        const { name, value } = event.target

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })        
    }

// Handles form submit and triggers a POST request with user login details which back-end runs authentication for
    const handleSubmit = (event) => {
        event.preventDefault()
        const user = {
            username: input.username,
            password: input.password
        }

        fetch('/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .then(window.location.href = "/")
        .catch(err => console.log('Incorrect Details'))
    }

    return(
        <div className="home">
            <div className="login-signup-form" id="login-form">
                <a href="/">Home</a>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input onChange={handleChange} type="text" name="username" value={input.username} placeholder="Enter your username" required></input>
                    <label htmlFor="password">Password:</label>
                    <input onChange={handleChange} type="text" name="password" value={input.password} placeholder="Password" required></input>
                    <button>Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Login