import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//---------------------------------------------------------------------------------------
import Navbar from '../Navbar/Navbar'
import './Userchooseme.css'
import '../common.css';
//------------------------------------------------------------------------------------------------------

const Userchooseme = () => {
  const { resumeId } = useParams()
  const location = useLocation()
  //-------------------------------------------------imports-----------------------------------------------------------------------------
  const navigate = useNavigate();

  const createtemplate = (field) => {
    axios.get(process.env.REACT_APP_SERVER_URL + '/updateresumemedoreng', { params: { emailid: localStorage.getItem('emailid'), resumeid: resumeId, medoreng: field } })
      .then((response) => {
        const link = "/choosetemplates/" + resumeId + "/" + field
        navigate(link)
      }, (error) => { })
  }

  useEffect(() => {
    echo_message();
  }, []);

  const echo_message = () => {
    try {
      if (location.state.message == "resume_created") {
        toast.success("resume created and saved under my resume", {
          position: "top-center", autoCloseautoClose: 100,
        })
        //alert("okkkk")
      }
    } catch (e) { }
  }



  return (

    <>
      <ToastContainer />
      <Navbar />

      <div class="chooseouter container mt-3">

        <div class="doctor mt-2 p-3">
          <div class="row">
            <div class="col-lg-6 d-flex justify-content-center">
              <div class="i_am_medical top_header_button p-2 cursor_pointer" onClick={() => createtemplate("engineer")}>
                <h4 class="text-white cursor_pointer"> Software engineer</h4>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="text-center">
                <img src=" https://img.freepik.com/free-vector/cross-platform-software-concept-illustration_114360-7293.jpg?w=2000 "></img>
              </div>
            </div>

          </div>
        </div>
        <div class="doctor mt-2 p-3">
          <div class="row">
            <div class="col-lg-6">
              <div class="text-center">
                <img src="https://img.graphicsurf.com/2020/08/medicine-vector-flat-illustration.jpg"></img>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="i_am_medical top_header_button p-2 cursor_pointer " onClick={() => createtemplate("medical")} >
                <h4 class="text-white cursor_pointer"> Medical student </h4>
              </div>
            </div>

          </div>
        </div>




      </div>



    </>

  )
}

export default Userchooseme;