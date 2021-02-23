import React, {useEffect} from 'react'

function Home(props) {
    // Logs out and updates storage / state back to none logged in user.
    const handleLogout = () => {
        fetch('/api/logout', {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log('Incorrect Details'))
    }
// Gets scores from GET request, stores them in session storage and then appends to state for live refresh for leaderboard.
    useEffect(() => {
        fetch('/api/scores', {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => sessionStorage.setItem('scores', JSON.stringify(data)))
        .then(() => props.setScores(sessionStorage.getItem('scores')))
        .catch(err => console.log('error'))
    }, [])

    return(
        <div className="home">
            <div className="home-menu">
            {props.activeUser === 'false' ? 
            <>
                <p>Welcome to Quizbox</p> 
                <a href="/" className="home-menu-btn">Play</a>
                <a href="/createaccount" className="home-menu-btn">Create Account</a>
                <a href="/login" className="home-menu-btn">Sign In</a>
            </>
            :
            <> 
                <p>Welcome to Quizbox, {props.activeUser}</p>
                <a href="/categories" className="home-menu-btn">Play</a>
                <a href="/leaderboard" className="home-menu-btn">Leaderboard</a>
                <a href="/" className="home-menu-btn" onClick={handleLogout}>Logout</a>
            </>
            }
            </div>
        </div>
    )
}

export default Home