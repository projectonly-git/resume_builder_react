import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios"


import Navbar from '../Navbar/Navbar'
import './Home.css';
import '../common.css'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    echomessage();

    /*--------------------------------------------------
    let user = {
      "username":"apurba3",
      "emailid": "maityapurba020@gmail.com",
      "password": "password"
    }
    axios.post(process.env.REACT_APP_SERVER_URL + "/api/v1", user)
    .then((response) => {
      console.log(response.data)
      
    }, (error) => {
      toast.error("Email Not preasent! register", {
        position: "top-right", autoClose: 2000,
      })
    })
    ----------------------------------------------------*/

  }, []);

  const echomessage = () => {
    try {
      if (location.state.massage == "loggedin") {
        toast.success("Login success", {
          position: "top-right", autoCloseautoClose: 2000,
        })
      }
    } catch (e) { }

  }


  const gotomedicalsoftware = () => {

    if (localStorage.getItem('emailid') === null) {
      toast.error("please login to continue", {
        position: "top-right", autoClose: 2000,
      })
    } else {
      axios.get(process.env.REACT_APP_SERVER_URL + '/createresume', { params: { emailid: localStorage.getItem('emailid') } })
        .then((response) => {
          navigate('/userchooseme/' + response.data, {state: {message: "resume_created"}} );
        }, (error) => { })

    }
  }
  return (


    <>
      <ToastContainer />

      <Navbar />

      <div class="home_hero_section">
        <div class=" header my-5">
          <div class=" container text-center">
            <div class="">
              <div class=" h1 ">
                Build your dream resume <br /> with <span class="gradiend_text">Resume Maker</span>
              </div>
              <div class=" p-small py-3 d-flex justify-content-center">
                Build the resume now that  will get you in your dream company
              </div>
              <div class=" d-flex justify-content-center py-4 " onClick={gotomedicalsoftware}>
                <div class=" top_header_button h4 p-3 cursor_pointer">

                  <span class=" px-3 "><i class="fa fa-play" aria-hidden="true"></i> </span>
                  Create your resume now</div>
              </div>
            </div>

          </div>
        </div>


        <div class="home_screen_learn" id="learn">
          <div class="container my-5">
            <div class="set_background py-5">

              <div class="p-3">
                <div class="text-center h1">
                  How to create your dream resume
                </div>
              </div>


              <div class="learn_outer container">


                <div class=" mt-5">
                  <div class="row">
                    <div class="col-6">
                      <div class="text-center">
                        <img src="https://img.graphicsurf.com/2020/08/medicine-vector-flat-illustration.jpg"></img>
                      </div>
                    </div>

                    <div class="col-6 d-flex align-items-center">
                      <div>
                        <div class=" h1 numbering p-2 text-center ">01</div>
                        <h1>Choose your profession</h1>
                        <h5>We cover both mediacal and engineering</h5>
                      </div>
                    </div>

                  </div>
                </div>


                <div class=" mt-5">
                  <div class="row">
                    <div class="col-6 d-flex justify-content-center ">
                      <div class=" d-flex  align-items-center px-5">
                        <div>
                          <div class=" h1 numbering p-2 text-center ">02</div>
                          <h1> Choose a template</h1>
                          <h5> Choose from templates that suits you the best </h5>
                        </div>
                      </div>
                    </div>

                    <div class="col-6">
                      <div class="text-center">
                        <img src=" https://img.freepik.com/free-vector/graduate-choosing-college-profession-choice-decision-making-future-planning-multiple-career-opportunities-business-science-art_335657-3467.jpg?w=2000 "></img>
                      </div>
                    </div>

                  </div>
                </div>

                <div class=" mt-5">
                  <div class="row">
                    <div class="col-6">
                      <div class="text-center">
                        <img src="https://img.freepik.com/free-vector/employees-cv-candidates-resume-corporate-workers-students-id-isolate-flat-design-element-job-applications-avatars-personal-information-concept-illustration_335657-1661.jpg?w=2000"></img>
                      </div>
                    </div>

                    <div class="col-6 d-flex align-items-center">
                      <div>
                        <div class=" h1 numbering p-2 text-center ">03</div>
                        <h1> Enter your details </h1>
                        <h5>personal - education - projects - skills - achivments</h5>
                      </div>
                    </div>

                  </div>
                </div>


                <div class=" mt-5">
                  <div class="row">
                    <div class="col-6 d-flex justify-content-center ">
                      <div class=" d-flex  align-items-center px-5">
                        <div>
                          <div class=" h1 numbering p-2 text-center ">04</div>
                          <h1>Download your resume</h1>
                          <h5>Now you are ready for a dream job</h5>
                        </div>
                      </div>
                    </div>

                    <div class="col-6">
                      <div class="text-center">
                        <img src="data:image/png;base64,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"></img>
                      </div>
                    </div>

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




export default Home;