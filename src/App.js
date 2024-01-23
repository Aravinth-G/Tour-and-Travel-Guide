
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import Logout from './components/Logout';
import Contactus from './components/Contactus';
import BookingDetails from './components/BookingDetails';
import { SearchBar } from "./components/SearchBar";
import { SearchResultsList } from "./components/SearchResultsList";
import Home from './components/Home';
import About from './components/About';
import Empty from './components/Destination';
import Contact from './components/Contact';
import Services from './components/Services';
import { Login } from './Login';
import { Register } from './Register';
import FVideo from "./components/intro";
import View from "./components/View";
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Admindashboard from "./components/Admindashboard";
function App() {
  const [results, setResults] = useState([]);

  return (
    <>
   <div className="App">
       <div className="myapp-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
       
      </div> 
    
       <BrowserRouter>
  
        <Routes>
          <Route path="/" element={<FVideo />} />
          <Route path="/about" element={<About />} />
          <Route path="/destination" element={<Empty />} />
          <Route path="/view" element={<View />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/admindashboard" element={<Admindashboard/>} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/bookingDashboard" element={<BookingDetails/>} />
          <Route path="/contactus" element={<Contactus/>} />
        </Routes>
      </BrowserRouter>
    </div>

 
    </> );
}
export default App;


