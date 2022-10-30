import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from '../Navbar/Navbar'
import './Resumedetails.css'
import '../common.css'


const Achivments = () => {

  const navigate = useNavigate();

  const goPrevious = () => {
    navigate('/enterskills')
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
              <h2> EXISTING ACHIVMENT DETAILS </h2>
            </div>

            <div class="heading mt-2 p-3">



              <div class="">
                <div class="h2"> 6 weeks training from walkover </div>
              </div>
              <div class="cursor_pointer mt-3">
                <div class="p-small color_blue_1">  Cirtificate </div>
              </div>


              <div class="d-flex flex-row">


                <div class="mt-2 each_box">

                  <div class="top_header_button1 p-large p-3 w-100 cursor_pointer">
                    delete
                    <span class=" px-3 "><i class="fa fa-play" aria-hidden="true"></i> </span>
                  </div>
                </div>

                <div class="px-3 mt-2 each_box">

                  <div class="top_header_button p-large p-3 w-100 cursor_pointer">
                    Edit
                    <span class=" px-3 "><i class="fa fa-play" aria-hidden="true"></i> </span>
                  </div>
                </div>

              </div>


            </div>

            <div class="heading mt-2 p-3">



              <div class="">
                <div class="h2"> 6 weeks training from walkover </div>
              </div>
              <div class="  cursor_pointer mt-3">
                <div class="p-small color_blue_1">  Cirtificate </div>
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
              <h2> ENTER NEW ACHIVEMENTS </h2>
            </div>

            <div class="mt-3">
              <div class="">
                <div class="h4"> Enter The Achivment Title </div>
              </div>
              <div class="input_box_text px-3 d-flex flex-row">
                <div class="px-3 py-2">
                  <i class="fa fa-file-code-o fa-2x" aria-hidden="true"></i>
                </div>
                <input class="w-100  p-large" type="text" placeholder="eg.. ML training" />
              </div>
            </div>






            <div class="mt-3">
              <div class="">
                <div class="h4"> Enter supporting  link </div>
              </div>
              <div class="input_box_text px-3 d-flex flex-row">
                <div class="px-3 py-2">
                  <i class="fa fa-link fa-2x" aria-hidden="true"></i>
                </div>
                <input class="w-100  p-small" type="text" placeholder="eg.. https://github.com/apurbamaity/blood_bank_react" />
              </div>
            </div>

            <div class="mt-2">

              <div class="top_header_button h5 p-3 w-100 cursor_pointer text-center">
                Add This Achivement
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

export default Achivments;