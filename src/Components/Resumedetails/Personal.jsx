import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Navbar from '../Navbar/Navbar'
import './Resumedetails.css'
import '../common.css'


const Personal = () => {

  const { templateId, resumeId } = useParams()

  const saveThePersonal = () =>{
    console.log("save the details ")
  }






  return (

    <div class="enter_resume_details">

      <Navbar />

      <div class="container mt-5">
        <div class="heading p-3 mt-3">
          <h1> ENTER PERSONAL DETAILS </h1>
        </div>

        <div class="d-flex flex-row mt-2 justify-content-between">
          <div class="mt-2 each_box">
            <div class=" ">
              <div class="h4"> Enter Full Name</div>
            </div>
            <div class="input_box_text w-100">
              <input class="w-100  px-3 p-large" type="text" placeholder="enter your full name" />
            </div>
          </div>

          <div class="mt-2 each_box">
            <div class=" ">
              <div class="h4"> Enter Job Title</div>
            </div>
            <div class="input_box_text w-100 px-2">
              <input class="w-100  p-large" type="text" placeholder="eg. software engineer" />
            </div>
          </div>
        </div>


        <div class="mt-3 ">
          <div class=" ">
            <div class="h4"> Enter Your Address</div>
          </div>
          <div class="d-flex flex-row justify-content-between">
            <div class="each_box1_personal">
              <input class="w-100 input_box_text px-3 p-large" type="text" placeholder="enter city" />
            </div>
            <div class="each_box1_personal ">
              <input class="w-100 input_box_text px-3 p-large" type="text" placeholder="enter state" />
            </div>
            <div class="each_box1_personal">
              <input class="w-100 input_box_text px-3 p-large" type="text" placeholder="enter pincode" />
            </div>
          </div>
        </div>

        <div class="d-flex flex-row mt-3 justify-content-between">
          <div class="mt-2 each_box">
            <div class=" ">
              <div class="h4"> Enter Email Address</div>
            </div>
            <div class="input_box_out w-100">
              <input class="w-100 input_box_text px-3 p-large" type="mail" placeholder="enter your email address" />
            </div>
          </div>

          <div class="mt-2 each_box">
            <div class=" ">
              <div class="h4"> Enter Your Phone Number</div>
            </div>
            <div class="input_box_out w-100">
              <input class="w-100 input_box_text px-3 p-large" type="number" placeholder="eg. 1234567890" />
            </div>
          </div>
        </div>


        <div class="heading p-3 mt-3">
          <h1> ENTER SOCIEL PROFILES </h1>
        </div>


        <div class="mt-3">
          <div class=" ">
            <div class="h4"> Enter Your Linkedin Profile </div>
          </div>
          <div class="input_box_text px-3 d-flex flex-row">
            <div class="px-3 py-2">
              <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
            </div>
            <input class="w-100  p-large" type="text" placeholder="enter your linkedin profile link" />
          </div>
        </div>

        <div class="mt-3">
          <div class=" ">
            <div class="h4"> Enter Your Github Profile Link</div>
          </div>
          <div class="input_box_text px-3 d-flex flex-row">
            <div class="px-3 py-2">
              <i class="fa fa-github-square fa-2x" aria-hidden="true"></i>
            </div>
            <input class="w-100  p-large" type="text" placeholder="eg.. https://github.com/apurbamaity" />
          </div>
        </div>


        {/*<div class="d-flex flex-row my-5 justify-content-between">


          <div class="mt-2 w-100">

            <div class="top_header_button1 h4 p-3 cursor_pointer">
              Save and Preview
              <span class=" px-3 "><i class="fa fa-play" aria-hidden="true"></i> </span>
            </div>
          </div>

          <div class="mt-2 w-100 px-3">

            <div class="top_header_button h4 p-3 cursor_pointer" onClick={entereducationaldetails}>
              Save And Continue
              <span class=" px-3 "><i class="fa fa-play" aria-hidden="true"></i> </span>
            </div>
          </div>

    </div>*/}


        <div class="d-flex flex-row justify-content-between my-5 border-bottom-link">
          <div class="p-large  text-white px-3" >

          </div>
          <div class="p-large cursor_pointer text-white px-3" onClick={saveThePersonal}>
            <a href={"/entereducationaldetails/"+resumeId+"/"+templateId}><span class="px-2 text-white">Go Next </span>  <i class="fa fa-forward text-white" aria-hidden="true"></i> </a>
          </div>
        </div>

        <div class="d-flex flex-row justify-content-center my-5 ">
          <a href={"/showresults/" + resumeId + "/" + templateId } >
            <div class=" h3 cursor_pointer text-white px-3 border-bottom-link save_and_preview py-3">
              <span class="px-2">SAVE AND PREVIEW </span>
            </div>
          </a>
        </div>

      </div>













    </div>
  )
}

export default Personal;