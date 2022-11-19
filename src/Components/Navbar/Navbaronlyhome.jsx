import React, { useState, useEffect } from "react";
import './Navbar.css';
import '../common.css'

import { useNavigate } from "react-router-dom";


const Loginprofile = () => {

  const navigate = useNavigate();

  const signout = () => {
    localStorage.removeItem('emailid');
    localStorage.removeItem('username');
    navigate("/");
  }

  if (localStorage.getItem("emailid") == null) {
    return (
      <>
        <div class=" py-1 px-3 p-small login_border cursor_pointer ">
          <a href="/login" style={{ "color": "black" }}>Login</a>
        </div>
        <div class=" py-1 px-3 p-small login_border cursor_pointer mx-2">
          <a href="/register" style={{ "color": "black" }}>Signup</a>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div class=" py-1 px-3 p-small login_border cursor_pointer ">
          <a href="/profile" style={{ "color": "black" }}>My Resume</a>
        </div>
        <div class=" py-1 px-3 p-small  cursor_pointer text-danger" onClick={signout}>
          logout  <i class="fa fa-sign-out px-2" aria-hidden="true"></i>
        </div>
      </>
    )
  }
}

const Navbaronlyhome = () => {


  const printDocument = () => {
    window.print();
  }
  return (
    <>
      <div class=" outerNavbar " >
        <div class=" innerNavbar" >
          <div class=" container ">
            <div class=" row py-2 ">
              <div class=" col-lg-4 ">
                <a class="" href="/"><h3 class="text-white cursor_pointer"> Resume Maker </h3></a>
              </div>
              <div class=" col-lg-8 ">
                <div class=" d-flex flex-row navbar_option ">
                  <a href="/about" >
                    <div class=" py-1 px-3 h6 cursor_pointer text-white">
                      About
                    </div>
                  </a>
                  <div class=" py-1 px-3 h6 cursor_pointer  ">
                    <a href="/#learn" class="text-white" >Learn </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}




export default Navbaronlyhome;