import React, { useState, useEffect } from "react";
import axios from 'axios'


import '../common.css';
import './Profile.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from '../Navbar/Navbar'


const Profile = () => {

  const [resume, setResume] = useState([])

  useEffect(() => {
    getAllresume()
  }, []);

  const getAllresume = () => {
    axios.get(process.env.REACT_APP_SERVER_URL + '/user/resume/all', { params: { email: localStorage.getItem('emailid') } })
      .then((response) => {
        console.log(response.data)
        setResume(response.data)
        console.log("hererer")
      }, (error) => {
      })
  }


  return (
    <div class="profile">
      <Navbar />

      <div class="container mt-5">

        <div class="heading p-3 mt-3">
          <h1> Your Existing Resume </h1>
        </div>


        <div class="d-flex flex-row flex-wrap mt-3">

          {resume.map((d, index) => (
            <div class="p-3">
              <div class="make_bg_grey h3 p-3">
                resumeId : {d.resumeid}
                <div class="d-flex flex-row justify-content-between">
                  <a href={"/enterpersonaldetails/" + d.resumeid + "/" + d.templateid} >
                    <div>
                      <i class="fa fa-pencil-square" aria-hidden="true"></i>
                    </div>
                  </a>
                  <a href={"/showresults/" +d.resumeid + "/" + d.templateid} >
                    <div>
                      <i class="fa fa-trash-o" aria-hidden="true"></i>
                    </div>
                  </a>
                  <a href={"/showresults/" +d.resumeid + "/" + d.templateid} >
                    <div>
                      <i class="fa fa-download" aria-hidden="true"></i>
                    </div>
                  </a>

                </div>
              </div>
            </div>


          ))}



        </div>





      </div>


    </div>
  )
}

export default Profile;