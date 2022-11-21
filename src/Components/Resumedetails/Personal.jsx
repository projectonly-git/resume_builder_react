import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";


import Navbar from '../Navbar/Navbar'
import './Resumedetails.css'
import '../common.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Personal = (props) => {

  const navigate = useNavigate();
  const location = useLocation();
  const [id, setId] = useState(1);



  const { resumeId, field, templateId } = useParams()

  const [skills, setSkills] = useState("");
  const [namew1, setNamew1] = useState(""); const [namew2, setNamew2] = useState(""); const [cityw, setcityw] = useState(""); const [statew, setStatew] = useState("");
  const [addressw, setAddressw] = useState(""); const [pincodew, setPincodew] = useState(""); const [emailw, setEmailw] = useState(""); const [jobtitlew, setJobtitlew] = useState("");
  const [phonew, setPhonew] = useState("");

  // handle form input and making formdata for saving in database...
  const [makeformdata, setMakeformdata] = useState({
    fullname1: "", fullname2: "", jobtitle: "",
    address: "", city: "", state: "AK - Alaska", pincode: "", email: "",
    phone: "", linkedin: "", github: ""
  })

  useEffect(() => {
    echo_message();
    getresumedetails()
  }, [id]);

  const echo_message = () => {
    try {
      if (location.state.massage == "resume_created") {
        toast.success("resume saved under my resume", {
          position: "top-center", autoCloseautoClose: 100,
        })
        //alert("okkkk")
      }
    } catch (e) { }
  }

  const getresumedetails = () => {
    axios.get(process.env.REACT_APP_SERVER_URL + '/getresumedetails/' + resumeId)
      .then((response) => {
        console.log(response.data)
        var resumed = response.data;
        setMakeformdata({
          fullname1: resumed.firstname, fullname2: resumed.secondname, jobtitle: resumed.designation,
          address: resumed.address, city: resumed.city, state: resumed.state, pincode: resumed.pincode, email: resumed.emailId,
          phone: resumed.phonenumber, linkedin: resumed.linkedin, github: resumed.github
        })
        setSkills(resumed.skills)
      }, (error) => { })
  }

  const update = (event) => {
    let val = event.target.value
    let name = event.target.name
    setMakeformdata((prev) => {
      if (name === "fullname1") {
        return { fullname1: val, fullname2: prev.fullname2, jobtitle: prev.jobtitle, address: prev.address, city: prev.city, state: prev.state, pincode: prev.pincode, email: prev.email, phone: prev.phone, linkedin: prev.linkedin, github: prev.github }
      } else if (name === "fullname2") {
        return { fullname1: prev.fullname1, fullname2: val, jobtitle: prev.jobtitle, address: prev.address, city: prev.city, state: prev.state, pincode: prev.pincode, email: prev.email, phone: prev.phone, linkedin: prev.linkedin, github: prev.github }
      } else if (name === "jobtitle") {
        return { fullname1: prev.fullname1, fullname2: prev.fullname2, jobtitle: val, address: prev.address, city: prev.city, state: prev.state, pincode: prev.pincode, email: prev.email, phone: prev.phone, linkedin: prev.linkedin, github: prev.github }
      } else if (name === "address") {
        return { fullname1: prev.fullname1, fullname2: prev.fullname2, jobtitle: prev.jobtitle, address: val, city: prev.city, state: prev.state, pincode: prev.pincode, email: prev.email, phone: prev.phone, linkedin: prev.linkedin, github: prev.github }
      } else if (name === "city") {
        return { fullname1: prev.fullname1, fullname2: prev.fullname2, jobtitle: prev.jobtitle, address: prev.address, city: val, state: prev.state, pincode: prev.pincode, email: prev.email, phone: prev.phone, linkedin: prev.linkedin, github: prev.github }
      } else if (name === "state") {
        return { fullname1: prev.fullname1, fullname2: prev.fullname2, jobtitle: prev.jobtitle, address: prev.address, city: prev.city, state: val, pincode: prev.pincode, email: prev.email, phone: prev.phone, linkedin: prev.linkedin, github: prev.github }
      } else if (name === "pincode") {
        return { fullname1: prev.fullname1, fullname2: prev.fullname2, jobtitle: prev.jobtitle, address: prev.address, city: prev.city, state: prev.state, pincode: val, email: prev.email, phone: prev.phone, linkedin: prev.linkedin, github: prev.github }
      } else if (name === "email") {
        return { fullname1: prev.fullname1, fullname2: prev.fullname2, jobtitle: prev.jobtitle, address: prev.address, city: prev.city, state: prev.state, pincode: prev.pincode, email: val, phone: prev.phone, linkedin: prev.linkedin, github: prev.github }
      } else if (name === "phone") {
        var phone = val;
        var newPhone = phone.replaceAll("-", "");
        var currval = "";
        if (newPhone.length === 10) {
          currval = newPhone.substr(0, 3) + "-" + newPhone.substr(3, 3) + "-" + newPhone.substr(6)
          return { fullname1: prev.fullname1, fullname2: prev.fullname2, jobtitle: prev.jobtitle, address: prev.address, city: prev.city, state: prev.state, pincode: prev.pincode, email: prev.email, phone: currval, linkedin: prev.linkedin, github: prev.github }
        } else {
          return { fullname1: prev.fullname1, fullname2: prev.fullname2, jobtitle: prev.jobtitle, address: prev.address, city: prev.city, state: prev.state, pincode: prev.pincode, email: prev.email, phone: val, linkedin: prev.linkedin, github: prev.github }
        }
      } else if (name === "linkedin") {
        return { fullname1: prev.fullname1, fullname2: prev.fullname2, jobtitle: prev.jobtitle, address: prev.address, city: prev.city, state: prev.state, pincode: prev.pincode, email: prev.email, phone: prev.phone, linkedin: val, github: prev.github }
      } else {
        return { fullname1: prev.fullname1, fullname2: prev.fullname2, jobtitle: prev.jobtitle, address: prev.address, city: prev.city, state: prev.state, pincode: prev.pincode, email: prev.email, phone: prev.phone, linkedin: prev.linkedin, github: val }
      }

    })
    //console.log(makeformdata)
  }

  const saveThePersonal = (wts) => {

    var flag = true

    // name case
    if (makeformdata.fullname1 === "") {
      setNamew1("first name can not be empty ! ")
      flag = false
    } else {
      var ifOnlyAlphabet = /^[a-zA-Z\s.,]+$/.test(makeformdata.fullname1);
      if (!ifOnlyAlphabet) {
        setNamew1("name can have only alphabet")
        flag = false;
      } else {
        setNamew1("")
      }
    }

    if (makeformdata.fullname2 === "") {
      setNamew2("last name can not be empty ! ")
      flag = false
    } else {
      var ifOnlyAlphabet = /^[a-zA-Z\s.,]+$/.test(makeformdata.fullname2);
      if (!ifOnlyAlphabet) {
        setNamew2("name can have only alphabet")
        flag = false;
      } else {
        setNamew2("")
      }
    }

    if (makeformdata.jobtitle === "") {
      setJobtitlew("please enter your job-title")
      flag = false
    } else {
      setJobtitlew("")
    }

    if (makeformdata.address === "") {
      console.log("herererre")
      setAddressw("please enter your address ")
      flag = false
    } else {
      setAddressw("")
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
      setPincodew("please enter your zipcode ")
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

    var phone = makeformdata.phone;
    var newPhone = phone.replaceAll("-", "");
    console.log(newPhone)
    if (newPhone.length != 10) {
      setPhonew("enter a valid phone-no of 10 digit (111-222-3333) ")
      flag = false
    } else {
      setPhonew("")
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
    if (flag === true) {
      const resume = {};
      resume.resumeid = resumeId
      resume.date = new Date();
      resume.templateid = templateId
      resume.medoreng = field

      resume.firstname = makeformdata.fullname1
      resume.secondname = makeformdata.fullname2
      resume.designation = makeformdata.jobtitle

      resume.address = makeformdata.address
      resume.state = makeformdata.state
      resume.city = makeformdata.city
      resume.pincode = makeformdata.pincode

      resume.emailId = makeformdata.email
      resume.phonenumber = makeformdata.phone

      resume.linkedin = makeformdata.linkedin
      resume.github = makeformdata.github

      resume.skills = skills


      axios.post(process.env.REACT_APP_SERVER_URL + '/savepersonaldetails/' + localStorage.getItem('emailid'), resume)
        .then((response) => {
          console.log(response.data)
          //setBlood(response.data)
        }, (error) => { })
      navigate("/entereducationaldetails/" + resumeId + "/" + field + "/" + templateId)


    }
    //console.log(makeformdata)
  }





  return (

    <div class="enter_resume_details">
      <ToastContainer />
      <Navbar />

      <div id="topsectiondetails" class="container mt-5">
        <div class="heading p-3 mt-3">
          <h1> Enter personal information </h1>
        </div>

        <div class="d-flex flex-row mt-2 justify-content-between">
          <div class="mt-2 each_box1_personal">
            <div class=" ">
              <div class="h4"> first name</div>
            </div>
            <div class="w-100 focus_it">
              <input name="fullname1" onChange={update} class="w-100  px-3 p-large input_box_text px-2" type="text" value={makeformdata.fullname1} autoFocus ></input>
            </div>
            <div class="p-small text-danger"> {namew1} </div>
          </div>

          <div class="mt-2 each_box1_personal">
            <div class=" ">
              <div class="h4"> last name</div>
            </div>
            <div class="w-100">
              <input name="fullname2" onChange={update} class="w-100  px-3 p-large input_box_text px-2 focus_it" type="text" value={makeformdata.fullname2} />
            </div>
            <div class="p-small text-danger"> {namew2} </div>
          </div>

          <div class="mt-2 each_box1_personal">
            <div class=" ">
              <div class="h4"> job title</div>
            </div>
            <div class="w-100">
              <input onChange={update} name="jobtitle" class="w-100  p-large input_box_text px-2 focus_it" type="text" value={makeformdata.jobtitle} />
              <div class="p-small text-danger py-2"> {jobtitlew} </div>
            </div>

          </div>
        </div>


        <div class="mt-3 ">
          <div class=" ">

          </div>
          <div class="d-flex flex-row justify-content-between">
            <div class="each_box1_personal focus_it">
              <div class="h4"> Address</div>
              <input onChange={update} name="address" class="w-100 input_box_text px-3 p-large" type="text" value={makeformdata.address} />
              <div class="p-small text-danger"> {addressw} </div>
            </div>
            <div class="each_box1_personal">
              <div class="h4"> city</div>
              <input onChange={update} name="city" class="w-100 input_box_text px-3 p-large " type="text" value={makeformdata.city} />
              <div class="p-small text-danger"> {cityw} </div>
            </div>
            <div class="each_box1_personal ">
              <div class="h4"> state </div>
              <div class=" input_box_text py-3 px-4 h6 " name="state" placeholder="eg. AK - Alaska">
                <select name="state" onChange={update} class="w-100" value={makeformdata.state}>
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
              <div class="h4"> zipcode</div>
              <input onChange={update} name="pincode" class="w-100 input_box_text px-3 p-large" type="text" value={makeformdata.pincode} />
              <div class="p-small text-danger"> {pincodew} </div>
            </div>
          </div>
        </div>

        <div class="d-flex flex-row mt-3 justify-content-between">
          <div class="mt-2 each_box">
            <div class=" ">
              <div class="h4"> email address</div>
            </div>
            <div class="input_box_out w-100">
              <input onChange={update} name="email" class="w-100 input_box_text px-3 p-large" type="mail" value={makeformdata.email} />
              <div class="p-small text-danger"> {emailw} </div>
            </div>
          </div>

          <div class="mt-2 each_box">
            <div class=" ">
              <div class="h4"> phone number</div>
              {/*<div class="p-small text-info font-weight-bold"> For international number add country code ( eg +1)</div> */}
            </div>
            <div class="input_box_out w-100">
              <input onChange={update} name="phone" class="w-100 input_box_text px-3 p-large" type="text" value={makeformdata.phone} />
              <div class="p-small text-danger"> {phonew} </div>
            </div>
          </div>
        </div>


        <div class="heading p-3 mt-3">
          <h1> Social profile </h1>
        </div>


        <div class="mt-3">
          <div class=" ">
            <div class="h4"> LinkedIn profile link</div>
          </div>
          <div class="input_box_text px-3 d-flex flex-row">
            <div class="px-3 py-2">
              <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
            </div>
            <input onChange={update} name="linkedin" class="w-100  p-large px-2 " type="text" value={makeformdata.linkedin} />
          </div>
        </div>

        <div class="mt-3">
          <div class=" ">
            <div class="h4"> GitHub profile link</div>
          </div>
          <div class="input_box_text px-3 d-flex flex-row">
            <div class="px-3 py-2">
              <i class="fa fa-github-square fa-2x" aria-hidden="true"></i>
            </div>
            <input onChange={update} name="github" class="w-100  p-large" type="text" value={makeformdata.github} />
          </div>
        </div>



        <div class="d-flex flex-row justify-content-between my-5 border-bottom-link">
          <div class="p-large  text-white px-3 cursor_pointer" >
            <a href={"/choosetemplates/" + resumeId + "/" + field}>
              <i class="fa fa-arrow-circle-left text-white" aria-hidden="true"></i> <span class="px-2 text-white"> Change template </span>
            </a>
          </div>

          <div class="p-large cursor_pointer text-white px-3" onClick={saveThePersonal}>
            <span class="px-2 text-white">Save and go next </span>  <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
          </div>
        </div>

        {/*<div class="d-flex flex-row justify-content-center my-5 ">

          <a  onClick={() => saveThePersonal(0)}>
            <div class=" h3 cursor_pointer text-white px-3 border-bottom-link save_and_preview py-3">
              <span class="px-2">SAVE AND PREVIEW </span>
            </div>
          </a>
  </div>*/}

      </div>













    </div>
  )
}

export default Personal;