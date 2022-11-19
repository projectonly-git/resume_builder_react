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
        //console.log(response.data)
        getAllresume()

        toast.success("resume is deleted", {
          position: "top-center", autoCloseautoClose: 100,
        })
      }, (error) => {
      })
  }


  return (
    <div class="profile">
      <ToastContainer />
      <Navbar />

      <div class="container mt-5">

        <div class="heading p-3 mt-3">
          <h1> Your Existing Resume </h1>
        </div>


        <div class="d-flex flex-row flex-wrap mt-3">

          {resume.map((d, index) => (
            <div class="p-3">
              <div class="make_bg_grey h5 p-3">
                {d.resumeid}___{d.date}
                <div class="d-flex flex-row h3 py-3 justify-content-center">
                  <a className="cursor_pointer px-2" href={"/enterpersonaldetails/" + d.resumeid + "/" + d.medoreng + "/" + d.templateid}>
                    <div class="h6 button bg-success text-white cursor_pointer" >
                      edit
                    </div>
                  </a>

                  <div class="cursor_pointer px-2" onClick={() => delteResune(d.resumeid)} >
                    <div class="h6 button bg-info text-white">
                      delete
                    </div>
                  </div>

                  <a className="cursor_pointer" href={"/showresults/" + d.resumeid + "/" + d.templateid + "/" + d.medoreng} class="px-2" >
                    <div class="h6 button bg-warning text-white cursor_pointer">
                      download
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