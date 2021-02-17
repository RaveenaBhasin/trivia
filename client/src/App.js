import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import Signup from './components/pages/Signup'
import Login from './components/pages/Login'

function App() {    
  return (
      <BrowserRouter>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/createaccount"><Signup /></Route>
        <Route exact path="/login"><Login /></Route>
    </BrowserRouter>
  );
}

export default App;
