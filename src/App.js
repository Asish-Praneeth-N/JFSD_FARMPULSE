// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/Landingpage';
import Resources from './Pages/Resources';
import Community from './Pages/Community';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';  // Correct login import
import Signup from './Pages/Signup';  // Correct signup import
import Dashboard from './Pages/Dashboard';
import ManageEvents from './components/manageEvents';
import ManageUsers from './components/ManageUsers';
import Home from './components/Home';
import InteractiveMap from './components/InteractiveMap';
import PricesPage from './components/PricesPage';
import ReportsPage from './components/ReportsPage';

// In your routes configuration


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/interactivemap" element={<InteractiveMap/>}/>
          <Route path="/market-prices" element={<PricesPage/>}/>
          <Route path="/reports" element={<ReportsPage/>}/>
         
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/community" element={<Community />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />  {/* Login route */}
          <Route path="/signup" element={<Signup />} />  {/* Signup route */}
          <Route path="/manage-events" element={<ManageEvents/>} />
          <Route path="/manage-users" element={<ManageUsers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
