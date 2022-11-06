import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from '../Navbar/Navbar'
import './Resumedetails.css'
import '../common.css'


const Projects = () => {

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  const { templateId, resumeId } = useParams()
  const navigate = useNavigate();

  const [posw, setPosw] = useState("")
  const [companyw, setCompanyw] = useState("")
  const [workdw, setWorkdw] = useState("")




  // getting existing details for show in loop
  const [existingdetails, setExistingdetails] = useState([])
  const [makeformdata, setMakeformdata] = useState({ position: "", company: "", starttime: "", endtime: "", workd: "" })

  const update = (event) => {
    let val = event.target.value
    let name = event.target.name
    setMakeformdata((prev) => {
      if (name === "position") {
        return { position: val, company: prev.company, starttime: prev.starttime, endtime: prev.endtime, workd: prev.workd }
      } else if (name === "company") {
        return { position: prev.position, company: val, starttime: prev.starttime, endtime: prev.endtime, workd: prev.workd }
      } else if (name === "starttime") {
        return { position: prev.position, company: prev.company, starttime: val, endtime: prev.endtime, workd: prev.workd }
      } else if (name === "endtime") {
        return { position: prev.position, company: prev.company, starttime: prev.starttime, endtime: val, workd: prev.workd }
      } else {
        return { position: prev.position, company: prev.company, starttime: prev.starttime, endtime: prev.endtime, workd: val }
      }
    })
    //console.log(makeformdata)
  }


  useEffect(() => {
    window.scrollTo(0, 0)
    getAllexp()
  }, [])

  const deleteExperience = (xpid) => {
    axios.get(process.env.REACT_APP_SERVER_URL + '/deleteexperiencedetails/' + xpid)
      .then((response) => {
        console.log(response.data)
        window.location.reload()
      }, (error) => { })
  }

  const getAllexp = () => {
    axios.get(process.env.REACT_APP_SERVER_URL + '/getallexp/' + resumeId)
      .then((response) => {
        console.log(response.data)
        setExistingdetails(response.data)
        //setBlood(response.data)
      }, (error) => { })
  }


  const saveThisExperience = () => {
    var flag = true;
    if (makeformdata.position === "") {
      setPosw("Please enter your position")
      flag = false;
    } else {
      setPosw("")
    }

    if (makeformdata.company === "") {
      setCompanyw("Please enter your company")
      flag = false;
    } else {
      setCompanyw("")
    }

    if (makeformdata.workd === "") {
      setWorkdw("Please enter your work description")
      flag = false;
    } else {
      setWorkdw("")
    }

    if (flag) {

      var exp = {};
      exp.position = makeformdata.position;
      exp.company = makeformdata.company
      exp.starttime = makeformdata.starttime
      exp.endtime = makeformdata.endtime
      exp.workd = makeformdata.workd

      axios.post(process.env.REACT_APP_SERVER_URL + '/saveexperiencedetails/' + resumeId, exp)
        .then((response) => {
          console.log(response.data)
          getAllexp()
          toast.success(" addedd this work experience", {
            position: "top-center", autoClose: 1000,
          })
          window.location.reload()
        }, (error) => { })


    }




    //console.log(makeformdata)
  }




  return (

    <div class="enter_resume_details">
      <ToastContainer />

      <Navbar />


      <div class="container mt-5">
        <div class="d-flex flex-row justify-content-between">


          <div class="flexbox_side">
            <div class="heading p-3 mt-3 ">
              <h2> EXISTING WORK EXPERIENCES </h2>
            </div>

            {existingdetails.map((d, index) => (
              <div class="heading mt-2 p-3">
                <div class=" ">
                  <div class="h2"> {d.position} </div>
                </div>
                <div class=" ">
                  <div class="h4"> {d.company} </div>
                </div>

                <div class=" mt-3">
                  <div class="d-flex flex-row">

                    <div clas="mx-5">
                      <div class="h6 text-info">
                        FROM
                      </div>
                      <div class="h5"> {d.starttime} </div>
                    </div>

                    <div class="mx-5">
                      <div class="h6 text-info">
                        TO
                      </div>
                      <div class="h5"> {d.endtime} </div>
                    </div>

                  </div>

                </div>
                <div class=" ">
                  <div class="p-small"> {d.workd}
                  </div>
                </div>


                <div class="d-flex flex-row">


                  <div class="mt-2 each_box">

                    <div class="top_header_button1 p-large p-3 w-100 cursor_pointer" onClick={() => deleteExperience(d.xpid)}>
                      delete
                      <span class=" px-3 "><i class="fa fa-play" aria-hidden="true"></i> </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}






          </div>


          <div class="flexbox_side">
            <div class="heading p-3 mt-3 w-100">
              <h2> ENTER WORK DETAILS </h2>
            </div>

            <div class="mt-3">
              <div class=" ">
                <div class="h4"> Enter The Position </div>
              </div>
              <div class="input_box_text px-3 d-flex flex-row">
                <div class="px-3 py-2">
                  <i class="fa fa-file-code-o fa-2x" aria-hidden="true"></i>
                </div>
                <input onChange={update} name="position" class="w-100  p-large" type="text" placeholder="eg.. SDE - III" />
              </div>
              <div class="p-small text-danger py-2"> {posw} </div>
            </div>

            <div class="mt-3">
              <div class=" ">
                <div class="h4"> Enter Company name </div>
              </div>
              <div class="input_box_text px-3 d-flex flex-row">
                <div class="px-3 py-2">
                  <i class="fa fa-building-o fa-2x" aria-hidden="true"></i>
                </div>
                <input name="company" onChange={update} class="w-100  p-large" type="text" placeholder="eg.. Alphabet" />
              </div>
              <div class="p-small text-danger py-2"> {companyw} </div>
            </div>


            <div class="mt-3 ">
              <div class="">
                <div class="h4"> Enter Duration</div>
              </div>
              <div class="d-flex flex-row">
                <div class="">
                  <input name="starttime" onChange={update} class=" input_box_text px-3 p-large" type="date" placeholder="start eg.. MM/YYYY" />
                </div>
                <div class="px-3 ">
                  <input name="endtime" onChange={update} class=" input_box_text px-3 p-large" type="date" placeholder="end eg.. MM/YYYY" />
                </div>
              </div>
            </div>

            <div class="mt-3">
              <div class="">
                <div class="h4"> Enter Work Description </div>
              </div>
              <div class="input_box_text_area_project px-3 d-flex flex-row">
                {/*<textbox class="w-100  p-large" type="text" placeholder="eg.. 90" />*/}
                <textarea name="workd" onChange={update} class="p-small" placeholder="enter work description"></textarea>
              </div>
              <div class="p-small text-danger py-2"> {workdw} </div>
            </div>


            <div class="mt-2">

              <div class="top_header_button h5 p-3 w-100 cursor_pointer text-center" onClick={saveThisExperience}>
                Add This Experince
                <span class=" px-3 "><i class="fa fa-play" aria-hidden="true"></i> </span>
              </div>
            </div>


          </div>


        </div>

        <div class="d-flex flex-row justify-content-between my-5 border-bottom-link">
          <div class="p-large cursor_pointer text-white px-3" >
            <a href={"/entereducationaldetails/" + resumeId + "/" + templateId} class="text-white"><i class="fa fa-backward" aria-hidden="true"></i>
              <span class="px-2">Go Previous </span></a>
          </div>
          <div class="p-large cursor_pointer text-white px-3" >
            <a href={"/enterskills/" + resumeId + "/" + templateId} class="text-white"><span class="px-2">Go Next </span>  <i class="fa fa-forward" aria-hidden="true"></i></a>
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

export default Projects;