import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from '../Navbar/Navbar'
import './Resumedetails.css'
import '../common.css'


const Education = () => {

  const navigate = useNavigate();

  const goPrevious = () => {
    navigate('/enterresumedetails/1')
  }

  const goNext = () => {
    navigate('/enterprojectdetails')
  }
  return (

    <>

      <Navbar />


      <div class="container mt-5">
        <div class="d-flex flex-row justify-content-between">


          <div class="flexbox_side">
            <div class="heading p-3 mt-3 ">
              <h2> EXISTING DETAILS </h2>
            </div>

            <div class="heading mt-2 p-3">



              <div class=" ">
                <div class="h2"> class 10</div>
              </div>

              <div class=" ">
                <div class="h3"> Sankrail A.C High School </div>
              </div>

              <div class=" ">
                <div class="h4"> 2016-2017</div>
              </div>
              <div class=" ">
                <div class="p-large color_blue_1"> 84%</div>
              </div>


              <div class="d-flex flex-row">


                <div class="mt-2 each_box">

                  <div class="top_header_button1 p-large p-3 w-100 cursor_pointer">
                    delete
                    <span class=" px-3 "><i class="fa fa-play" aria-hidden="true"></i> </span>
                  </div>
                </div>

                <div class="px-3 mt-2 each_box">

                  <div class="top_header_button p-large p-3 w-100 cursor_pointer"  >
                    Edit
                    <span class=" px-3 "><i class="fa fa-play" aria-hidden="true"></i> </span>
                  </div>
                </div>

              </div>


            </div>

            <div class="heading mt-2 p-3">



              <div class=" ">
                <div class="h2"> class 12</div>
              </div>

              <div class=" ">
                <div class="h3"> Sankrail A.C High School </div>
              </div>

              <div class=" ">
                <div class="h4"> 2017-2018</div>
              </div>
              <div class=" ">
                <div class="p-large color_blue_1"> 56%</div>
              </div>


              <div class="d-flex flex-row">


                <div class="mt-2 each_box">

                  <div class="top_header_button1 p-large p-3 w-100 cursor_pointer">
                    delete
                    <span class=" px-3 "><i class="fa fa-play" aria-hidden="true"></i> </span>
                  </div>
                </div>

                <div class="px-3 mt-2 each_box">

                  <div class="top_header_button p-large p-3 w-100 cursor_pointer" >
                    Edit
                    <span class=" px-3 "><i class="fa fa-play" aria-hidden="true"></i> </span>
                  </div>
                </div>

              </div>


            </div>

          </div>


          <div class="flexbox_side">
            <div class="heading p-3 mt-3 w-100">
              <h2> ENTER NEW EDUCATION </h2>
            </div>

            <div class="mt-3">
              <div class=" ">
                <div class="h4"> Enter The Designation </div>
              </div>
              <div class="input_box_text px-3 d-flex flex-row">
                <div class="px-3 py-2">
                  <i class="fa fa-graduation-cap fa-2x" aria-hidden="true"></i>
                </div>
                <input class="w-100  p-large" type="text" placeholder="eg.. class 10 / SSC" />
              </div>
            </div>
            <div class="mt-3">
              <div class=" ">
                <div class="h4"> Enter Institution name </div>
              </div>
              <div class="input_box_text px-3 d-flex flex-row">
                <div class="px-3 py-2">
                  <i class="fa fa-building fa-2x" aria-hidden="true"></i>
                </div>
                <input class="w-100  p-large" type="text" placeholder="eg.. Howrah Zilla School" />
              </div>
            </div>

            <div class="mt-3 ">
              <div class=" ">
                <div class="h4"> Enter Duration</div>
              </div>
              <div class="d-flex flex-row">
                <div class="">
                  <input class=" input_box_text px-3 p-large" type="text" placeholder="enter start year" />
                </div>
                <div class="px-3 ">
                  <input class=" input_box_text px-3 p-large" type="text" placeholder="enter end year" />
                </div>
              </div>
            </div>

            <div class="mt-3">
              <div class=" ">
                <div class="h4"> Enter Grade In Percentage </div>
              </div>
              <div class="input_box_text px-3 d-flex flex-row">
                <div class="px-3 py-2">
                  <i class="fa fa-percent fa-2x" aria-hidden="true"></i>
                </div>
                <input class="w-100  p-large" type="text" placeholder="eg.. 90" />
              </div>
            </div>

            <div class="mt-2">

              <div class="top_header_button p-large p-3 w-100 cursor_pointer text-center">
                Add This Education
                <span class=" px-3 "><i class="fa fa-play" aria-hidden="true"></i> </span>
              </div>
            </div>


          </div>


        </div>

        <div class="d-flex flex-row justify-content-between my-5 border-bottom-link">
          <div class="p-large cursor_pointer text-white px-3" onClick={goPrevious}>
            <i class="fa fa-backward" aria-hidden="true"></i>
            <span class="px-2">Go Previous </span>
          </div>
          <div class="p-large cursor_pointer text-white px-3" onClick={goNext}>
            <span class="px-2">Go Next </span>  <i class="fa fa-forward" aria-hidden="true"></i>
          </div>
        </div>

        <div class="d-flex flex-row justify-content-center my-5 ">
          <a href={"/showresults/" + 12} >
            <div class=" h3 cursor_pointer text-white px-3 border-bottom-link save_and_preview py-3">
              <span class="px-2">SAVE AND PREVIEW </span>
            </div>
          </a>
        </div>


      </div>














    </>
  )
}

export default Education;