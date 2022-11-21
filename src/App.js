import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

import React, { useState, useEffect } from "react";
import $ from 'jquery';





// import components from './components'
import Navbar from './Components/Navbar/Navbar'
import Templatehead from './Components/Resumetemplates/Templatehead'
import Templategallery from './Components/TemplateSet/Templategallery'

import Home from './Components/Homescreen/Home'
import Userchooseme from './Components/Userchooseme/Userchooseme'
import Personal from './Components/Resumedetails/Personal'
import Education from './Components/Resumedetails/Education'
import Projects from './Components/Resumedetails/Projects'
import Skills from './Components/Resumedetails/Skills'
import Achivments from './Components/Resumedetails/Achivments'

import Profile from './Components/Profile/Profile'


import Login from './Components/Loginregister/Login'
import Register from './Components/Loginregister/Register'
import About from './Components/About/About'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>

      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>

      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>

      <Routes>
        <Route path="/userchooseme/:resumeId" element={<Userchooseme />} />
      </Routes>

      <Routes>
        <Route path="/choosetemplates/:resumeId/:field" element={<Templategallery />} />
      </Routes>



      <Routes>
        <Route path="/enterpersonaldetails/:resumeId/:field/:templateId" element={<Personal />} />
      </Routes>

      <Routes>
        <Route path="/entereducationaldetails/:resumeId/:field/:templateId" element={<Education />} />
      </Routes>

      <Routes>
        <Route path="/enterprojectdetails/:resumeId/:field/:templateId" element={<Projects />} />
      </Routes>

      <Routes>
        <Route path="/enterskills/:resumeId/:field/:templateId" element={<Skills />} />
      </Routes>

      <Routes>
        <Route path="/enterachivments/:resumeId/:field/:templateId" element={<Achivments />} />
      </Routes>



      <Routes>
        <Route path="/showresults/:resumeId/:templateId/:field" element={<Templatehead />} />
      </Routes>










    </BrowserRouter>
  );
}

export default App;
