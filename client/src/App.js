import { BrowserRouter, Route } from 'react-router-dom'
import { useEffect, useLayoutEffect, useState } from 'react'

import Home from './components/pages/Home'
import Signup from './components/pages/Signup'
import Login from './components/pages/Login'
import Categories from './components/pages/Categories'
import Cinema from './components/pages/Cinema'
import Leaderboard from './components/pages/Leaderboard'

function App() {    
    const [activeUser, setActiveUser] = useState(localStorage.getItem('user'))
    const [scores, setScores] = useState(sessionStorage.getItem('scores'))
    const [render, setRender] = useState(false)

// Sends a GET request so back-end middleware can run automatically on page change and receives data if user is active or not,
//  runs when render state changes, so runs on mount or page refresh, and runs when state is updated.
    useEffect(() => {
        fetch('/api/runapp', {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
            if (data !== 'invalid' && activeUser === 'false') { 
                localStorage.setItem('user', data)
                setActiveUser(localStorage.getItem('user'))
            } else if (data === 'invalid' && activeUser !== 'false') {
                localStorage.setItem('user', 'false')
                setActiveUser(localStorage.getItem('user'))
            } 
        })
        .catch(() => console.log('Error with running express app'))
    }, [render])

// Conditionally loads home page after login and changes render back to false.
    useEffect(() => {
        if (activeUser !== 'false') {
            if (render === true) {
                window.location.href = "/"
                setRender(false)
            }
        }
    })

  return (
      <div>
      <BrowserRouter>
        <Route exact path="/"><Home activeUser={activeUser} setScores={setScores} /></Route>
        <Route exact path="/createaccount"><Signup /></Route>
        <Route exact path="/login"><Login setRender={setRender} /></Route>
        <Route exact path="/leaderboard"><Leaderboard scores={scores} /></Route>
        <Route exact path="/categories"><Categories /></Route>
        <Route exact path="/cinema"><Cinema /></Route>
    </BrowserRouter>
    </div>  
  );
}

export default App;
