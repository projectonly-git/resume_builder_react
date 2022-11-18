import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

import Navbaronlyhome from '../Navbar/Navbaronlyhome'
import '../common.css';
import './login.css';

import axios from "axios";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Login = () => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({ email: "", password: "" })

  const update = (event) => {
    let val = event.target.value
    let name = event.target.name
    setFormdata((prev) => {
      if (name === "email") {
        return { email: val, password: prev.password }
      } else {
        return { email: prev.email, password: val }
      }
    })
    console.log(formdata)
  }

  const trytologin = () => {

    let user = {
      "emailid": formdata.email,
      "password": formdata.password
    }

    axios.post(process.env.REACT_APP_SERVER_URL + "/user/login", user)
      .then((response) => {
        console.log(response.data)
        localStorage.setItem("emailid", response.data.emailid)
        localStorage.setItem("username", response.data.username)



        if (response.data === '') {
          console.log("no no no")
          toast.error("Password not match", {
            position: "top-right", autoClose: 2000,
          })
        } else {
          navigate('/', { state: { massage: "loggedin" } });
        }
      }, (error) => {
        toast.error("Email Not preasent! register", {
          position: "top-right", autoClose: 2000,
        })
      })
  }

  return (

    <div class="login_css">
      <ToastContainer />
      <Navbaronlyhome />
      <div>
        <div class="container-fluid">
          <div class="row login_page_outside">
            <div class="col-xl-12 col-lg-10 px-lg-5 px-0 col-sm-12 main_login_window py-5">
              <div class="login_inside p-5">
                <div class="login_to_your_acc h1 text-center p-lg-3 p-2">
                  Login
                </div>



                <div class="p-large mt-3">
                  {/*Enter Email Adress*/}
                  <div class="px-3 py-2 mt-3 input">
                    <div class="row">
                      <div class="col-lg-2 col-2">
                        <i class="fa-solid fa-envelope-circle-check fa-2x"></i>
                      </div>
                      <div class="col-lg-10 col-10">
                        <input onChange={update} class="w-100 p-3" name="email" type="email" placeholder="email address" />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="p-large mt-3">
                  {/*Enter password*/}
                  <div class="px-3 py-2 mt-3 input">
                    <div class="row">
                      <div class="col-lg-2 col-2">
                        <i class="fa-solid fa-lock fa-2x"></i>
                      </div>
                      <div class="col-lg-10 col-10">
                        <input onChange={update} class="w-100 p-3" name="password" type="password" placeholder="password" />
                      </div>
                    </div>

                  </div>
                </div>

                <div class="h2 text-center mt-3  login_button p-3 cursor_pointer" onClick={trytologin} >
                  LOG IN {/*<i class="fa-solid fa-fingerprint"></i>*/}
                </div>
                <div class="p-small register_here make_it_pointer text-center cursor_pointer">
                  <a href="/register" style={{ "color": "#3c4852" }}>don't have an account <span class="underline_it"> register </span> </a>
                </div>
                {/*<div class="p-small register_here make_it_pointer text-center cursor_pointer">
                  <a href="/" style={{ "color": "red" }}>return to home </a>
  </div>*/}



              </div>
            </div>
          </div>
        </div>
      </div>

    </div>


  )
}

export default Login;