import { useEffect } from 'react'
import Cinema from '../../pages/Cinema'

function CinemaResults(props) {
    const results = JSON.parse(sessionStorage.getItem('Cinema'))
    
    useEffect(() => {
        fetch('/api/cinemaResults', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify(results)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log('Incorrect Details'))
    }, [])

    return(
        <div className="resultsContainer">
            <a href="/">Home</a>
            <div className="results">
                <h1>Results:</h1>
                {Object.keys(results).map((keyName) => {
                    if (results[keyName] === true) {
                        return <p key={'C' + keyName} className="correctAnswer">{keyName}: Correct</p>;
                    } else {
                        return <p key={'C' + keyName} className="incorrectAnswer">{keyName}: Incorrect</p>;
                    }
                })}
            </div>
        </div>
    )
} 

export default CinemaResults