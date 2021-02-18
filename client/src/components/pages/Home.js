function Home(props) {
    const handleLogout = () => {
        fetch('/api/logout', {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log('Incorrect Details'))
    }
    
    return(
        <div className="home">
            <div className="home-menu">
            {props.activeUser=== 'false' ? 
            <>
                <p>Welcome to Quizbox</p> 
                <a href="/" className="home-menu-btn">Play</a>
                <a href="/createaccount" className="home-menu-btn">Create Account</a>
                <a href="/login" className="home-menu-btn">Sign In</a>
            </>
            :
            <> 
                <p>Welcome to Quizbox, {props.activeUser}</p>
                <a href="/" className="home-menu-btn">Play</a>
                <a href="/" className="home-menu-btn" onClick={handleLogout}>Logout</a>
            </>
            }
            </div>
        </div>
    )
}

export default Home