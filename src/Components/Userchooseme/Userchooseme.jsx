import React, { useState, useEffect } from "react";
import { useNavigate  } from "react-router-dom";


import Navbar from '../Navbar/Navbar'


import './Userchooseme.css'
import '../common.css';

const Userchooseme = () => {
  const navigate = useNavigate ();

  const gotomedicalsoftware = () =>{
    navigate('/enterresumedetails/1');
  }


  return (

    <>

      <Navbar />

      <div class="chooseouter container mt-3">
        <div class="doctor mt-2 p-3">
          <div class="row">
            <div class="col-lg-6">
              <div class="text-center">
                <img src="https://img.graphicsurf.com/2020/08/medicine-vector-flat-illustration.jpg"></img>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="i_am_medical top_header_button p-2 cursor_pointer" onClick={gotomedicalsoftware}>
              <a href="/enterresumedetails/1"><h4 class="text-white"> I am a medical srudent </h4></a>
              </div>
            </div>

          </div>
        </div>


        <div class="doctor mt-2 p-3">
          <div class="row">
            <div class="col-lg-6 d-flex justify-content-center">
              <div class="i_am_medical top_header_button p-2" onClick={gotomedicalsoftware}>
                <a href="/enterresumedetails/1"><h4 class="text-white"> I am a Software Engineer</h4></a>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="text-center">
                <img src=" https://img.freepik.com/free-vector/cross-platform-software-concept-illustration_114360-7293.jpg?w=2000 "></img>
              </div>
            </div>

          </div>
        </div>

      </div>



    </>

  )
}

export default Userchooseme;