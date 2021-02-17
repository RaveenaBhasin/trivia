function Home() {
    return(
        <div className="home">
            <div className="home-menu">
                <p>Welcome to Quizbox</p>
                <a href="/" className="home-menu-btn">Play</a>
                <a href="/createaccount" className="home-menu-btn">Create Account</a>
                <a href="/login" className="home-menu-btn">Sign In</a>
            </div>
        </div>
    )
}

export default Home