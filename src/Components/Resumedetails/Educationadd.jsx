import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from '../Navbar/Navbar'
import './Resumedetails.css'
import '../common.css'


const Educationadd = (props) => {


  const [value, setValue] = useState("2000"); // for end year  
  const [check, setCheck] = useState(false); // for end year  
  const [start, setStart] = useState("2000"); // start year
  const [insw, setInsw] = useState(""); const [degreew, setDegreew] = useState(""); // for warnings
  const [showorhide, setShoworhide] = useState("")
  const [makeformdata, setMakeformdata] = useState({
    class: "", institution: "", startyear: 2000, endyear: 2000, marks: ""
  })

  const update = (event) => {
    let val = event.target.value
    let name = event.target.name
    setMakeformdata((prev) => {
      if (name === "class") {
        return { class: val, institution: prev.institution, startyear: prev.startyear, endyear: prev.startyear, marks: prev.marks }
      } else if (name === "institution") {
        return { class: prev.class, institution: val, startyear: prev.startyear, endyear: prev.startyear, marks: prev.marks }
      } else if (name === "startyear") {
        return { class: prev.class, institution: prev.institution, startyear: val, endyear: prev.endyear, marks: prev.marks }
      } else if (name === "endyear") {
        return { class: prev.class, institution: prev.institution, startyear: prev.startyear, endyear: val, marks: prev.marks }
      } else {
        return { class: prev.class, institution: prev.institution, startyear: prev.startyear, endyear: prev.endyear, marks: val }
      }
    })
    console.log(makeformdata)
  }


  const showGpaalert = () => {
    alert("Enter Your GPA (0-4)")
  }


  const handleChangeEnd = (e) => {
    setValue(e.target.value);
    setMakeformdata((prev) => {
      return { class: prev.class, institution: prev.institution, startyear: prev.startyear, endyear: e.target.value, marks: prev.marks }
    })
  }

  const handleChangeStart = (e) => {
    setStart(e.target.value)
    setMakeformdata((prev) => {
      return { class: prev.class, institution: prev.institution, startyear: e.target.value, endyear: prev.endyear, marks: prev.marks }
    })
  }

  const saveThisEducation = () => {
    var flag = true;
    if (makeformdata.institution === "") {
      setInsw("please enter your institution details")
      flag = false;
    } else {
      setInsw("")
    }


    if (makeformdata.class === "") {
      setDegreew("please enter your degree details")
      flag = false;
    } else {
      setDegreew("")
    }

    if (flag) {

      var education = {};
      education.course = makeformdata.class
      education.institution = makeformdata.institution
      education.startyear = makeformdata.startyear
      education.endyear = makeformdata.endyear
      education.marks = makeformdata.marks

      console.log(education)

      axios.post(process.env.REACT_APP_SERVER_URL + '/saveeducationdetails/' + props.resumeId, education)
        .then((response) => {
          console.log(response.data)
          props.getAlleducation()
          window.location.reload()
        }, (error) => { })

    }

    console.log(makeformdata)
  }


  return (
    <>

      <div class="mt-3">
        <div class=" ">
          <div class="h4"> Enter The Degree </div>
        </div>
        <div class="input_box_text px-3 d-flex flex-row">
          <div class="px-3 py-2">
            <i class="fa fa-graduation-cap fa-2x" aria-hidden="true"></i>
          </div>
          <input onChange={update} name="class" class="w-100  p-large" type="text" placeholder="enter course name" />
        </div>
        <div class="p-small text-danger py-2"> {degreew} </div>

      </div>

      <div class="mt-3">
        <div class=" ">
          <div class="h4"> Enter Institution name </div>
        </div>
        <div class="input_box_text px-3 d-flex flex-row">
          <div class="px-3 py-2">
            <i class="fa fa-building fa-2x" aria-hidden="true"></i>
          </div>
          <input onChange={update} name="institution" class="w-100  p-large" type="text" placeholder="enter institute name" />
        </div>
        <div class="p-small text-danger py-2"> {insw} </div>
      </div>

      <div class="mt-3 ">
        <div class=" ">

        </div>
        <div class="d-flex flex-row">
          <div class="">
            <div class="h5"> Course Start Year</div>
            {/*<input onChange={update} name="startyear" class=" input_box_text px-3 p-large" type="number" value={makeformdata.startyear} />*/}
            <div class=" input_box_text py-3 px-4 h6 ">
              <select value={start} onChange={handleChangeStart}>
                <option value='2000'>2000</option>
                <option value='2001'>2001</option>
                <option value='2002'>2002</option>
                <option value='2003'>2003</option>
                <option value='2004'>2004</option>
                <option value='2005'>2005</option>
                <option value='2006'>2006</option>
                <option value='2007'>2007</option>
                <option value='2008'>2008</option>
                <option value='2009'>2009</option>
                <option value='2010'>2010</option>
                <option value='2011'>2011</option>
                <option value='2012'>2012</option>
                <option value='2013'>2013</option>
                <option value='2014'>2014</option>
                <option value='2015'>2015</option>
                <option value='2016'>2016</option>
                <option value='2017'>2017</option>
                <option value='2018'>2018</option>
                <option value='2019'>2019</option>
                <option value='2020'>2020</option>
                <option value='2021'>2021</option>
                <option value='2022'>2022</option>

              </select>
            </div>
          </div>
          <div class="px-3 ">
            <div class="h5"> Course End Year <span class="p-small cursor_pointer text-danger tt" data-bs-toggle="tooltip" data-bs-placement="bottom" title="If you are currently studing choose present from dropdown" >(<i class="fa fa-info" aria-hidden="true"></i>)</span></div>

            {/*<input onChange={update} name="endyear" class=" input_box_text px-3 p-large" type="number" value={makeformdata.endyear} />*/}



            <div class={"input_box_text py-3 px-4 h6 " + showorhide}>
              <select value={value} onChange={handleChangeEnd}>
                <option value='2000'>2000</option>
                <option value='2001'>2001</option>
                <option value='2002'>2002</option>
                <option value='2003'>2003</option>
                <option value='2004'>2004</option>
                <option value='2005'>2005</option>
                <option value='2006'>2006</option>
                <option value='2007'>2007</option>
                <option value='2008'>2008</option>
                <option value='2009'>2009</option>
                <option value='2010'>2010</option>
                <option value='2011'>2011</option>
                <option value='2012'>2012</option>
                <option value='2013'>2013</option>
                <option value='2014'>2014</option>
                <option value='2015'>2015</option>
                <option value='2016'>2016</option>
                <option value='2017'>2017</option>
                <option value='2018'>2018</option>
                <option value='2019'>2019</option>
                <option value='2020'>2020</option>
                <option value='2021'>2021</option>
                <option value='2022'>2022</option>
                <option value='present'>PRESENT</option>

              </select>
            </div>

            {/*<div class="d-flex flex-row">
              <input type="checkbox" name="endyearcheckbox" value="present" checked={check} onClick={handleCheckboxChange} />
              <div class="px-3 py-2">
                <label for="element" class="p-small py-2">Present</label>
              </div>
  </div>*/}

          </div>
        </div>
      </div>

      <div class="mt-3">
        <div class=" ">
          <div class="h4"> Enter Your Grade
            <span class="p-small cursor_pointer text-danger tt" data-bs-toggle="tooltip" data-bs-placement="left" title="Enter your gpa (0-4)" >(<i class="fa fa-info" aria-hidden="true"></i>)</span>
          </div>
        </div>
        <div class="input_box_text px-3 d-flex flex-row">
          <div class="px-3 py-2">
            <i class="fa fa-percent fa-2x" aria-hidden="true"></i>
          </div>
          <input onChange={update} name="marks" class="w-100  p-large" type="text" placeholder="3.3" />
        </div>
      </div>


      <div class="mt-2">

        <div class="top_header_button p-large p-3 w-100 cursor_pointer text-center" onClick={saveThisEducation}>
          Add This Education
          <span class=" px-3 "><i class="fa fa-play" aria-hidden="true"></i> </span>
        </div>
      </div>
    </>
  )




}
export default Educationadd;