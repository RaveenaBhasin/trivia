function Login() {
    return(
        <div className="home">
            <div className="login-signup-form" id="login-form">
                <a href="/">Home</a>
                <form method="POST" action="/login">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" placeholder="Enter your username" requried></input>
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" placeholder="Password" required></input>
                    <button>Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Login