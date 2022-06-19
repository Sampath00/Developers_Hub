import React from 'react'
import Login from './Login';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Dashboard from './Dashboard';
import Myprofile from './Myprofile';
import Indprofile from './Indprofile';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/login' exact element={<Login/>}/>
          <Route path='/register' exact element={<Register/>}/>
          <Route path='/dashboard' exact element={<Dashboard/>}/>
          <Route path='/myprofile' exact element={<Myprofile/>}/>
          <Route path='/indprofile/:fullname/:email/:id' element={<Indprofile/>}/>
        </Routes>
      </Router>
    </div>
  )
}


export default App;