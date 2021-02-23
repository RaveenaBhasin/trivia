import React from 'react'
// Sends POST request to back-end for user creation, returns to login page if successful.
function Signup() {
    return(
        <div className="home">
            <div className="login-signup-form" id="signup-form">
                <a href="/">Home</a>
                <form method="POST" action="/createaccount">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" placeholder="Enter a username" required></input>
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" placeholder="Password" required></input>
                    <input type="text" name="confirmPassword" placeholder="Confirm Password" required></input>
                    <button>Create Account</button>
                </form>
            </div>
        </div>
    )
}

export default Signup