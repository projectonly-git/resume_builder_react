import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from '../Navbar/Navbar'
import './Home.css';

const Home = () => {
  const navigate = useNavigate();


  const printDocument = () => {
    window.print();

  }

  const gotomedicalsoftware = () => {
    navigate('/userchooseme');
  }
  return (


    <>

      <Navbar />


      <div class=" header">
        <div class=" container text-center">
          <div class="">
            <div class=" h1 ">
              Build your dream resume <br /> with <u>REBUILDER</u>
            </div>
            <div class=" p-small py-3 d-flex justify-content-center">
              Build the resume now that  will get you in your dream company
            </div>
            <div class=" d-flex justify-content-center py-4 " onClick={gotomedicalsoftware}>
              <div class=" top_header_button h4 p-3 cursor_pointer">
                Start For Free Now
                <span class=" px-3 "><i class="fa fa-play" aria-hidden="true"></i> </span>
              </div>
            </div>
          </div>

        </div>
      </div>





    </>





  )
}




export default Home;