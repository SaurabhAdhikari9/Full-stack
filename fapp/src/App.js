import React from 'react';
import {Link, Routes, Route,  BrowserRouter as Router} from 'react-router-dom';
import Add from './Add';
import Delete from './Delete';
import Login from './login';
import Update from './Update';
import Schedule from './Schedule'
import "./App.css";
function App() {
  return (
    <>
    <Router>
        <nav>
            <li><Link to="/" className='active' >Add</Link></li>
            <li><Link to="/login">Users</Link></li>
            <li><Link to="/update">Update</Link></li>
            <li><Link to="/delete">Delete</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
        </nav>

        <Routes>
        <Route exact path='/' element={<Add/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path ='/update' element={<Update/>}/>
        <Route exact path ='/delete' element={<Delete/>}/>
        <Route exact path ='/schedule' element={<Schedule/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default App