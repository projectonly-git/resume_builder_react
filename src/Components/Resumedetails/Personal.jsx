import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Navbar from '../Navbar/Navbar'
import './Resumedetails.css'
import '../common.css'


const Personal = () => {

  const navigate = useNavigate();
  const { templateId, resumeId } = useParams()

  const [namew, setNamew] = useState(""); const [cityw, setcityw] = useState(""); const [statew, setStatew] = useState("");
  const [pincodew, setPincodew] = useState(""); const [emailw, setEmailw] = useState(""); const [jobtitlew, setJobtitlew] = useState("");


  // handle form input and making formdata for saving in database...
  const [makeformdata, setMakeformdata] = useState({
    fullname: "",
    jobtitle: "", city: "", state: "", pincode: "", email: "",
    phone: "", linkedin: "", github: ""
  })
  const update = (event) => {
    let val = event.target.value
    let name = event.target.name
    setMakeformdata((prev) => {
      if (name === "fullname") {
        return { fullname: val, jobtitle: prev.jobtitle, city: prev.city, state: prev.state, pincode: prev.pincode, email: prev.email, phone: prev.phone, linkedin: prev.linkedin, github: prev.github }
      } else if (name === "jobtitle") {
        return { fullname: prev.fullname, jobtitle: val, city: prev.city, state: prev.state, pincode: prev.pincode, email: prev.email, phone: prev.phone, linkedin: prev.linkedin, github: prev.github }
      } else if (name === "city") {
        return { fullname: prev.fullname, jobtitle: prev.jobtitle, city: val, state: prev.state, pincode: prev.pincode, email: prev.email, phone: prev.phone, linkedin: prev.linkedin, github: prev.github }
      } else if (name === "state") {
        return { fullname: prev.fullname, jobtitle: prev.jobtitle, city: prev.city, state: val, pincode: prev.pincode, email: prev.email, phone: prev.phone, linkedin: prev.linkedin, github: prev.github }
      } else if (name === "pincode") {
        return { fullname: prev.fullname, jobtitle: prev.jobtitle, city: prev.city, state: prev.state, pincode: val, email: prev.email, phone: prev.phone, linkedin: prev.linkedin, github: prev.github }
      } else if (name === "email") {
        return { fullname: prev.fullname, jobtitle: prev.jobtitle, city: prev.city, state: prev.state, pincode: prev.pincode, email: val, phone: prev.phone, linkedin: prev.linkedin, github: prev.github }
      } else if (name === "phone") {
        return { fullname: prev.fullname, jobtitle: prev.jobtitle, city: prev.city, state: prev.state, pincode: prev.pincode, email: prev.email, phone: val, linkedin: prev.linkedin, github: prev.github }
      } else if (name === "linkedin") {
        return { fullname: prev.fullname, jobtitle: prev.jobtitle, city: prev.city, state: prev.state, pincode: prev.pincode, email: prev.email, phone: prev.phone, linkedin: val, github: prev.github }
      } else {
        return { fullname: prev.fullname, jobtitle: prev.jobtitle, city: prev.city, state: prev.state, pincode: prev.pincode, email: prev.email, phone: prev.phone, linkedin: prev.linkedin, github: val }
      }

    })
    //console.log(makeformdata)
  }






  const saveThePersonal = () => {

    var flag = true

    // name case
    if (makeformdata.fullname === "") {
      setNamew("please enter your name")
      flag = false
    } else {
      var ifOnlyAlphabet = /^[a-zA-Z\s.,]+$/.test(makeformdata.fullname);
      if (!ifOnlyAlphabet) {
        setNamew("name can have only alphabet")
        flag = false;
      } else {
        setNamew("")
      }
    }

    if (makeformdata.jobtitle === "") {
      setJobtitlew("please enter your job-title")
      flag = false
    } else {
      setJobtitlew("")
    }

    if (makeformdata.city === "") {
      setcityw("please enter your city")
      flag = false
    } else {
      setcityw("")
    }

    if (makeformdata.state === "") {
      setStatew("please enter your state")
      flag = false
    } else {
      setStatew("")
    }

    if (makeformdata.pincode === "") {
      setPincodew("please enter your pincode ")
      flag = false
    } else {
      var onlyNumber = /^[0-9\s.,]+$/.test(makeformdata.pincode);
      if (!onlyNumber) {
        setPincodew(" pincode can only contain numbers ")
      } else {
        setPincodew("")
      }
    }

    if (makeformdata.email === "") {
      setEmailw("please enter your emailId ")
      flag = false
    } else {
      var validEmail = makeformdata.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      if (!validEmail) {
        setEmailw(" Your Email Address Is Not Valid ")
      } else {
        setEmailw("")
      }
    }






    if (flag === true) {
      navigate("/entereducationaldetails/" + resumeId + "/" + templateId)
    }
    console.log(makeformdata)
  }






  return (

    <div class="enter_resume_details">

      <Navbar />

      <div id="topsectiondetails" class="container mt-5">
        <div class="heading p-3 mt-3">
          <h1> ENTER PERSONAL DETAILS </h1>
        </div>

        <div class="d-flex flex-row mt-2 justify-content-between">
          <div class="mt-2 each_box">
            <div class=" ">
              <div class="h4"> Enter Full Name</div>
            </div>
            <div class="input_box_text w-100">
              <input name="fullname" onChange={update} class="w-100  px-3 p-large" type="text" placeholder="John Doe" />
            </div>
            <div class="p-small text-danger"> {namew} </div>
          </div>

          <div class="mt-2 each_box">
            <div class=" ">
              <div class="h4"> Enter Job Title</div>
            </div>
            <div class="input_box_text w-100 px-2">
              <input onChange={update} name="jobtitle" class="w-100  p-large" type="text" placeholder="Software Engineer"  />
              <div class="p-small text-danger py-2"> {jobtitlew} </div>
            </div>

          </div>
        </div>


        <div class="mt-3 ">
          <div class=" ">

          </div>
          <div class="d-flex flex-row justify-content-between">
            <div class="each_box1_personal">
              <div class="h4"> Enter city</div>
              <input onChange={update} name="city" class="w-100 input_box_text px-3 p-large" type="text" placeholder="firafex" />
              <div class="p-small text-danger"> {cityw} </div>
            </div>
            <div class="each_box1_personal ">
              <div class="h4"> Enter state </div>
              <input onChange={update} name="state" class="w-100 input_box_text px-3 p-large" type="text"  placeholder="Virginia" />
              <div class="p-small text-danger"> {statew} </div>
            </div>
            <div class="each_box1_personal">
              <div class="h4"> Enter pincode</div>
              <input onChange={update} name="pincode" class="w-100 input_box_text px-3 p-large" type="text"  placeholder="22030" />
              <div class="p-small text-danger"> {pincodew} </div>
            </div>
          </div>
        </div>

        <div class="d-flex flex-row mt-3 justify-content-between">
          <div class="mt-2 each_box">
            <div class=" ">
              <div class="h4"> Enter Your Email Address</div>
            </div>
            <div class="input_box_out w-100">
              <input onChange={update} name="email" class="w-100 input_box_text px-3 p-large" type="mail" placeholder="johndoe029@gmail.com" />
              <div class="p-small text-danger"> {emailw} </div>
            </div>
          </div>

          <div class="mt-2 each_box">
            <div class=" ">
              <div class="h4"> Enter Your Phone Number</div>
              <div class="p-small text-info font-weight-bold"> For international number add country code ( eg +49)</div>
            </div>
            <div class="input_box_out w-100">
              <input onChange={update} name="phone" class="w-100 input_box_text px-3 p-large" type="text" placeholder="111223333" />
            </div>
          </div>
        </div>


        <div class="heading p-3 mt-3">
          <h1> ENTER SOCIEL PROFILES </h1>
        </div>


        <div class="mt-3">
          <div class=" ">
            <div class="h4"> Enter Your Linkedin Profile Link</div>
          </div>
          <div class="input_box_text px-3 d-flex flex-row">
            <div class="px-3 py-2">
              <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
            </div>
            <input onChange={update} name="linkedin" class="w-100  p-large" type="text" placeholder="enter your linkedin profile link" />
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
            <input onChange={update} name="github" class="w-100  p-large" type="text" placeholder="eg.. https://github.com/johndoe" />
          </div>
        </div>



        <div class="d-flex flex-row justify-content-between my-5 border-bottom-link">
          <div class="p-large  text-white px-3" >

          </div>
          <div class="p-large cursor_pointer text-white px-3" onClick={saveThePersonal}>

            <span class="px-2 text-white">Go Next </span>  <i class="fa fa-forward text-white" aria-hidden="true"></i>

          </div>
        </div>

        <div class="d-flex flex-row justify-content-center my-5 ">
          <a href={"/showresults/" + resumeId + "/" + templateId} >
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