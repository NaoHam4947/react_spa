import React from 'react';
import {
  BrowserRoute as Route,
  Routes,
  Route,
  Link } from 'react-route-dom';
import './App.css';
import Home from '../Home/Home.js';
import Planner from '../Planner/Planner.js';
import Hourglass from '../Hourglass/Hourglass.js';
import Clock from '../Clock/Clock.js';
import Logo from '../Logo/Logo.js';

const App = () => {
  return (
    <router>
      <div className="App">
      <Logo />
      <u1 className="App-header">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/hourglass">Hourglass</Link>
        </li>
        <li>
          <Link to="/planner">Planner</Link>
        </li>
        <li>
          <Link to="/clock">Clock</Link>
        </li>
       <li>
         <Link to="/logo">Logo</Link>
        </li> 
      </u1>
      </div>
    </router>


  )
}

export default App;
