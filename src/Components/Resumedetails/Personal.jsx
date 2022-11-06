import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


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
    jobtitle: "", city: "", state: "AK - Alaska", pincode: "", email: "",
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

  const saveThePersonal = (wts) => {

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
        flag = false
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
        flag = false
      } else {
        setEmailw("")
      }
    }
    if (flag === true && wts === 0) {
      const resume = {};
      resume.resumeid = resumeId
      resume.date = new Date();
      resume.templateid = templateId
      resume.username = makeformdata.fullname
      resume.designation = makeformdata.jobtitle
      resume.state = makeformdata.state
      resume.city = makeformdata.city
      resume.pincode = makeformdata.pincode
      resume.emailId = makeformdata.email
      resume.phonenumber = makeformdata.phone
      resume.linkedin = makeformdata.linkedin
      resume.github = makeformdata.github

      console.log(resume)

      axios.post(process.env.REACT_APP_SERVER_URL + '/savepersonaldetails/' + localStorage.getItem('emailid'), resume)
        .then((response) => {
          console.log(response.data)
          //setBlood(response.data)
        }, (error) => { })


      navigate("/entereducationaldetails/" + resumeId + "/" + templateId)
    } else if (flag === true && wts === 1) {
      navigate("/showresults/" + resumeId + "/" + templateId)
    }
    //console.log(makeformdata)
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
              <input name="fullname" onChange={update} class="w-100  px-3 p-large" type="text" placeholder="eg. John Doe" />
            </div>
            <div class="p-small text-danger"> {namew} </div>
          </div>

          <div class="mt-2 each_box">
            <div class=" ">
              <div class="h4"> Enter Job Title</div>
            </div>
            <div class="input_box_text w-100 px-2">
              <input onChange={update} name="jobtitle" class="w-100  p-large" type="text" placeholder="eg. Software Engineer" />
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
              <input onChange={update} name="city" class="w-100 input_box_text px-3 p-large" type="text" placeholder="eg. firafex" />
              <div class="p-small text-danger"> {cityw} </div>
            </div>
            <div class="each_box1_personal ">
              <div class="h4"> Enter state </div>
              <div class=" input_box_text py-3 px-4 h6 " name="state" placeholder="eg. AK - Alaska">
                <select name="state" onChange={update} class="w-100">
                  <option value='AK - Alaska'>AK - Alaska</option>
                  <option value='AL - Alabama'>AL - Alabama</option>
                  <option value='AR - Arkansas'>AR - Arkansas</option>
                  <option value='AS - American Samoa'>AS - American Samoa</option>
                  <option value='AZ - Arizona'>AZ - Arizona</option>
                  <option value='CA - California'>CA - California</option>
                  <option value='CO - Colorado'>CO - Colorado</option>
                  <option value='CT - Connecticut'>CT - Connecticut</option>
                  <option value='DC - District of Columbia'>DC - District of Columbia</option>
                  <option value='DE - Delaware'>DE - Delaware</option>
                  <option value='FL - Florida'>FL - Florida</option>
                  <option value='GA - Georgia'>GA - Georgia</option>
                  <option value='GU - Guam'>GU - Guam</option>
                  <option value='HI - Hawaii'>HI - Hawaii</option>
                  <option value='IA - Iowa'>IA - Iowa</option>
                  <option value='ID - Idaho'>ID - Idaho</option>
                  <option value='IL - Illinois'>IL - Illinois</option>
                  <option value='IN - Indiana'>IN - Indiana</option>
                  <option value='KS - Kansas'>KS - Kansas</option>
                  <option value='KY - Kentucky'>KY - Kentucky</option>
                  <option value='LA - Louisiana'>LA - Louisiana</option>
                  <option value='MA - Massachusetts'>MA - Massachusetts</option>
                  <option value='MD - Maryland'>MD - Maryland</option>
                  <option value='ME - Maine'>ME - Maine</option>
                  <option value='MI - Michigan'>MI - Michigan</option>
                  <option value='MN - Minnesota'>MN - Minnesota</option>
                  <option value='MO - Missouri'>MO - Missouri</option>
                  <option value='MS - Mississippi'>MS - Mississippi</option>
                  <option value='MT - Montana'>MT - Montana</option>
                  <option value='NC - North Carolina'>NC - North Carolina</option>
                  <option value='ND - North Dakota'>ND - North Dakota</option>
                  <option value='NE - Nebraska'>NE - Nebraska</option>
                  <option value='NH - New Hampshire'>NH - New Hampshire</option>
                  <option value='NJ - New Jersey'>NJ - New Jersey</option>
                  <option value='NM - New Mexico'>NM - New Mexico</option>
                  <option value='NV - Nevada'>NV - Nevada</option>
                  <option value='NY - New York'>NY - New York</option>
                  <option value='OH - Ohio'>OH - Ohio</option>
                  <option value='OK - Oklahoma'>OK - Oklahoma</option>
                  <option value='OR - Oregon'>OR - Oregon</option>
                  <option value='PA - Pennsylvania'>PA - Pennsylvania</option>
                  <option value='PR - Puerto Rico'>PR - Puerto Rico</option>
                  <option value='RI - Rhode Island'>RI - Rhode Island</option>
                  <option value='SC - South Carolina'>SC - South Carolina</option>
                  <option value='SD - South Dakota'>SD - South Dakota</option>
                  <option value='TN - Tennessee'>TN - Tennessee</option>
                  <option value='TX - Texas'>TX - Texas</option>
                  <option value='UT - Utah'>UT - Utah</option>
                  <option value='VA - Virginia'>VA - Virginia</option>
                  <option value='VI - Virgin Islands'>VI - Virgin Islands</option>
                  <option value='VT - Vermont'>VT - Vermont</option>
                  <option value='WA - Washington'>WA - Washington</option>
                  <option value='WI - Wisconsin'>WI - Wisconsin</option>
                  <option value='WV - West Virginia'>WV - West Virginia</option>
                  <option value='WY - Wyoming'>WY - Wyoming</option>


                </select>
              </div>
              <div class="p-small text-danger"> {statew} </div>
            </div>
            <div class="each_box1_personal">
              <div class="h4"> Enter pincode</div>
              <input onChange={update} name="pincode" class="w-100 input_box_text px-3 p-large" type="text" placeholder="eg. 22030" />
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
              <input onChange={update} name="email" class="w-100 input_box_text px-3 p-large" type="mail" placeholder="eg. johndoe029@gmail.com" />
              <div class="p-small text-danger"> {emailw} </div>
            </div>
          </div>

          <div class="mt-2 each_box">
            <div class=" ">
              <div class="h4"> Enter Your Phone Number</div>
              <div class="p-small text-info font-weight-bold"> For international number add country code ( eg +49)</div>
            </div>
            <div class="input_box_out w-100">
              <input onChange={update} name="phone" class="w-100 input_box_text px-3 p-large" type="text" placeholder="eg. 111223333" />
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
          <a href= {"/entereducationaldetails/" + resumeId + "/" + templateId}>
          <div class="p-large cursor_pointer text-white px-3" >
            <span class="px-2 text-white">Skip And Go Next </span>  <i class="fa fa-forward text-white" aria-hidden="true"></i>
          </div>
          </a>
        </div>

        <div class="d-flex flex-row justify-content-center my-5 ">

          <a  onClick={() => saveThePersonal(0)}>
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