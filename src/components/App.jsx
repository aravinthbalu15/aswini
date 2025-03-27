import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavbarContainer/Navbar";
import Home from '../components/pages/Home'
import Login from "../components/auth/Login"
import Register from "../components/auth/Register"
import '../App.css'


const App = () => {
  return (
    <>
    <NavBar />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register />} />
   </Routes>
   </>
  );
};

export default App;
