import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Navbar from '../Navbar/Navbar'
import './Resumedetails.css'
import '../common.css'


const Skills = () => {
  const { templateId, resumeId } = useParams()

  const navigate = useNavigate();

  const goPrevious = () => {
  }

  const goNext = () => {
  }
  return (

    <div class="enter_resume_details">

      <Navbar />


      <div class="container mt-5">
        <div class="d-flex flex-row justify-content-between">


          <div class="flexbox_side">
            <div class="heading p-3 mt-3 ">
              <h2> EXISTING SKILLS </h2>
            </div>

            <div class="heading mt-2 p-3">
              <div class="d-flex flex-row justify-content-between">
                <div class="" style={{ "width": "70%" }}>
                  <div class="h4"> C++ </div>
                </div>
                <div class="text-danger p-small py-2 cursor_pointer">
                  <i class="fa fa-trash-o fa-2x" aria-hidden="true"></i>
                </div>
              </div>
            </div>



          </div>


          <div class="flexbox_side">
            <div class="heading p-3 mt-3 w-100">
              <h2> ENTER NEW SKILLS </h2>
            </div>

            <div class="mt-3">

              <div class="input_box_text px-3 d-flex flex-row">
                <div class="px-3 py-2">

                </div>
                <input class="w-100  p-large" type="text" placeholder="eg.. Software Engineering" />
              </div>
            </div>




            <div class="mt-2">

              <div class="top_header_button h5 p-3 w-100 cursor_pointer text-center">
                Add This Skill
                <span class=" px-3 "><i class="fa fa-play" aria-hidden="true"></i> </span>
              </div>
            </div>


          </div>


        </div>

        <div class="d-flex flex-row justify-content-between my-5 border-bottom-link">
          <div class="p-large cursor_pointer text-white px-3" onClick={goPrevious}>
            <a href={"/enterprojectdetails/" + resumeId + "/" + templateId} class="text-white"><i class="fa fa-backward" aria-hidden="true"></i>
              <span class="px-2">Go Previous </span></a>
          </div>
          <div class="p-large cursor_pointer text-white px-3" onClick={goNext}>
            <a href={"/enterachivments/" + resumeId + "/" + templateId} class="text-white"><span class="px-2">Go Next </span>  <i class="fa fa-forward" aria-hidden="true"></i></a>
          </div>
        </div>

        <div class="d-flex flex-row justify-content-center my-5 ">
          <a href={"/showresults/" + resumeId + "/" + templateId} >
            <div class=" h3 cursor_pointer text-white px-3 save_and_preview py-3">
              <span class="px-2">SAVE AND PREVIEW </span>
            </div>
          </a>
        </div>


      </div>

    </div>
  )
}

export default Skills;