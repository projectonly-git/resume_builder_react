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

  const delteResune = (rid) => {
    axios.get(process.env.REACT_APP_SERVER_URL + '/deleteresume/' + rid,)
      .then((response) => {
        console.log(response.data)
        getAllresume()
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
              <div class="make_bg_grey p-large p-3">
                {d.resumeid}___{d.date}
                <div class="d-flex flex-row h3 py-3 justify-content-center">
                  <a href={"/enterpersonaldetails/" + d.resumeid + "/" + d.templateid}  class="px-2">
                    <div>
                      <i class="fa fa-pencil-square" aria-hidden="true"></i>
                    </div>
                  </a>

                  <div className="cursor_pointer" onClick={() => delteResune(d.resumeid)} class="px-2">
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                  </div>

                  <a href={"/showresults/" + d.resumeid + "/" + d.templateid} class="px-2" >
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