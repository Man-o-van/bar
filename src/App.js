import React,{useState}  from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home'
import About from './About'

import './App.css';

function App() {
  const[user,setUser]=useState('')
  return ( 
      <Router>
         
            <Routes>
                <Route exact path='/' element={<Home setUser={setUser}/>} />
                <Route path='/about' element={<About user={user}/>} />
                
            </Routes>
          
        </Router>
      );
  ;
}

export default App;
