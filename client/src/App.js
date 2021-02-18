import { BrowserRouter, Route } from 'react-router-dom'
import { useEffect, useLayoutEffect, useState } from 'react'

import Home from './components/pages/Home'
import Signup from './components/pages/Signup'
import Login from './components/pages/Login'


function App() {    
    const [activeUser, setActiveUser] = useState(localStorage.getItem('user'))

// Sends a GET request so back-end middleware can run automatically on page change and receives data if user is active or not
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
    }, [])

  return (
      <BrowserRouter>
        <Route exact path="/"><Home activeUser={activeUser}/></Route>
        <Route exact path="/createaccount"><Signup /></Route>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/logout"><Home /></Route>
    </BrowserRouter>
  );
}

export default App;
