import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Navbar/Navbar'
import './Resumedetails.css'
import '../common.css'

import Projectsadd from './Projectsadd'
import Projectsedit from './Projectsaedit'



const Returneditoradd = (props) => {

  if (props.editingornew === 0) {
    return (
      <>
        <Projectsadd resumeId={props.resumeId} getAllexp={props.getAllexp} />
      </>
    )
  } else {
    return (
      <>
        <Projectsedit whatsedditing={props.whatsedditing} resumeId={props.resumeId} getAllexp={props.getAllexp} updateEditingornewtoadd={props.updateEditingornewtoadd} />
      </>
    )
  }



}
const Projects = () => {
  const { templateId, field, resumeId } = useParams()
  const navigate = useNavigate();



  const [editingornew, setEditingornew] = useState(0);
  const [whatsedditing, setWhatsedditing] = useState({});
  const [editingoedu, setEditingoedu] = useState({});

  // getting existing details for show in loop
  const [existingdetails, setExistingdetails] = useState([])





  useEffect(() => {
    window.scrollTo(0, 0)
    getAllexp()
  }, [])

  const updateEditingornewtoedit = (d) => {
    setWhatsedditing(d)
    setEditingornew(1)
  }

  const updateEditingornewtoadd = () => {
    setEditingornew(0)
  }

  const getAllexp = () => {
    axios.get(process.env.REACT_APP_SERVER_URL + '/getallexp/' + resumeId)
      .then((response) => {
        console.log(response.data)
        setExistingdetails(response.data)
        //setBlood(response.data)
      }, (error) => { })
  }

  const deleteExperience = (xpid) => {
    axios.get(process.env.REACT_APP_SERVER_URL + '/deleteexperiencedetails/' + xpid)
      .then((response) => {
        console.log(response.data)
        window.location.reload()
      }, (error) => { })
  }
  const previewanddownload = () => {
    const link = "/showresults/" + resumeId + "/" + templateId + "/" + field
    navigate(link, { state: { message: "saved_resume" } })
  }

  return (

    <div class="enter_resume_details">
      <ToastContainer />
      <Navbar />
      <div class="container mt-5">
        <div class="d-flex flex-row justify-content-between">


          <div class="flexbox_side">
            <div class="heading p-3 mt-3 ">
              <h2> Existing professional experience </h2>
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

                  <div class="px-3 mt-2 each_box">
                    <div class="top_header_button p-large p-3 w-100 cursor_pointer" onClick={() => updateEditingornewtoedit(d)} >
                      Edit
                      <span class=" px-3 "><i class="fa fa-play" aria-hidden="true"></i> </span>
                    </div>
                  </div>


                </div>
              </div>
            ))}

          </div>


          <div class="flexbox_side">
            <div class="heading p-3 mt-3 w-100">
              <h2> Professional experience </h2>
            </div>
            < Returneditoradd editingornew={editingornew} resumeId={resumeId} getAllexp={getAllexp} whatsedditing={whatsedditing} updateEditingornewtoadd={updateEditingornewtoadd}/>
          </div>
        </div>

        <div class="d-flex flex-row justify-content-between my-5 border-bottom-link">
          <div class="p-large cursor_pointer text-white px-3" >
            <a href={"/entereducationaldetails/" + resumeId + "/" + field + "/" + templateId} class="text-white"><i class="fa fa-backward" aria-hidden="true"></i>
              <span class="px-2">Go Previous </span></a>
          </div>
          <div class="p-large cursor_pointer text-white px-3" >
            <a href={"/enterskills/" + resumeId + "/" + field + "/" + templateId} class="text-white"><span class="px-2">Go Next </span>  <i class="fa fa-forward" aria-hidden="true"></i></a>
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

export default Projects;