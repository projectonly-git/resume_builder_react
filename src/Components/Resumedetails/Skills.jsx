import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


import Navbar from '../Navbar/Navbar'
import './Resumedetails.css'
import '../common.css'


const Skills = () => {
  const { templateId, field, resumeId } = useParams()
  const navigate = useNavigate();
  const [skill, setSkill] = useState("");
  const [exskill, setExskill] = useState([])

  useEffect(() => {
    //window.location.reload()
    setSkill("")
    window.scrollTo(0, 0)
    getAllskills()
  }, [])

  const getAllskills = () => {
    axios.get(process.env.REACT_APP_SERVER_URL + '/getresumedetails/' + resumeId)
      .then((response) => {
        console.log(response.data)
        var skill_str = response.data.skills;
        skill_str = skill_str.replace("null", "")
        if (skill_str.length === 0) setExskill([])
        else {
          var skill_arr = skill_str.substr(0, skill_str.length - 1).split(",")
          setExskill(skill_arr);
        }
      }, (error) => { })

  }




  const update = (event) => {
    setSkill(event.target.value)
  }

  const addThisSkill = () => {
    console.log(skill)

    axios.get(process.env.REACT_APP_SERVER_URL + '/saveskill/' + resumeId, { params: { skill: skill } })
      .then((response) => {
        window.location.reload()
      }, (error) => { })
  }

  const deleteSkill = (skill) => {
    console.log(skill)

    axios.get(process.env.REACT_APP_SERVER_URL + '/deleteskill/' + resumeId, { params: { skill: skill } })
      .then((response) => {
        window.location.reload()
      }, (error) => { })
  }
  const previewanddownload = () => {
    const link = "/showresults/" + resumeId + "/" + templateId + "/" + field
    navigate(link, { state: { message: "saved_resume" } })
  }


  const goPrevious = () => {
  }

  const goNext = () => {
  }
  return (

    <div class="enter_resume_details">

      <Navbar />


      <div class="container mt-5">
        <div class="d-flex flex-row justify-content-between">


          <div class="flexbox_side">
            <div class="heading p-3 mt-3 ">
              <h2> Saved skill </h2>
            </div>

            {exskill.map((d, index) => (
              <div class="heading mt-2 p-3">
                <div class="d-flex flex-row justify-content-between">
                  <div class="" style={{ "width": "70%" }}>
                    <div class="h4">{d}</div>
                  </div>
                  <div class="text-danger p-small py-2 cursor_pointer" onClick={() => deleteSkill(d)}>
                    <i class="fa fa-trash-o fa-2x" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            ))}



          </div>


          <div class="flexbox_side">
            <div class="heading p-3 mt-3 w-100">
              <h2> New skill </h2>
            </div>
            <div class="mt-3">
              <div class="d-flex flex-row">
                <input  name="skills" class="w-100  px-3 p-large input_box_text" type="text" onChange={update} placeholder="eg.. Software Engineering" autoFocus/>
              </div>
            </div>
            <div class="mt-2">

              <div class="top_header_button h5 p-3 w-100 cursor_pointer text-center" onClick={addThisSkill}>
                Add This Skill
                <span class=" px-3 "><i class="fa fa-play" aria-hidden="true"></i> </span>
              </div>
            </div>


          </div>


        </div>

        <div class="d-flex flex-row justify-content-between my-5 border-bottom-link">
          <div class="p-large cursor_pointer text-white px-3" onClick={goPrevious}>
            <a href={"/enterprojectdetails/" + resumeId + "/" + field + "/" + templateId} class="text-white"><i class="fa fa-backward" aria-hidden="true"></i>
              <span class="px-2">Go Previous </span></a>
          </div>
          <div class="p-large cursor_pointer text-white px-3" onClick={goNext}>
            <a href={"/enterachivments/" + resumeId + "/" + field + "/" + templateId} class="text-white"><span class="px-2">Go Next </span>  <i class="fa fa-forward" aria-hidden="true"></i></a>
          </div>
        </div>

        <div class="d-flex flex-row justify-content-center my-5 " onClick={previewanddownload}>
          <div class=" h3 cursor_pointer text-white px-3 border-bottom-link save_and_preview py-3" >
            <span class="px-2"> preview and download </span>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Skills;