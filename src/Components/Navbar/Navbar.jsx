import React, { useState, useEffect } from "react";
import './Navbar.css';
import '../common.css'

const Navbar = () => {


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
                <a class="cursor_pointer" href="/"><h3 style={{ "color": "#3c4852" }}> Resume Maker </h3></a>
              </div>

              <div class=" col-lg-8 ">
                <div class=" d-flex flex-row navbar_option ">
                  <div class=" py-1 px-3 p-small cursor_pointer">
                    About
                  </div>
                  <div class=" py-1 px-3 p-small cursor_pointer ">
                    <a href="/#learn" style={{ "color": "#7e898a" }}>Learn </a>
                  </div>
                  <div class=" py-1 px-3 p-small login_border cursor_pointer ">
                    <a href="/login" style={{"color" : "black"}}>Login / Signup</a>
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




export default Navbar;