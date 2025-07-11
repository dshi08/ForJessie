import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home'
import Cats from './components/Pages/Cats';
import Foodie from './components/Pages/Foodie';
import JessieOnly from './components/Pages/JessieOnly';
import Album from './components/Pages/Album';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path = '/' exact Component={Home}/>
          <Route path = '/cats' Component={Cats}/>
          <Route path = '/foodie' Component={Foodie}/>
          <Route path = '/jessie-only' Component={JessieOnly}/>
          <Route path = '/album' Component={Album}/>
        </Routes>
       </Router>
      </>
  );
}

export default App;
