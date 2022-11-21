import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from '../Navbar/Navbar'
import Educationadd from './Educationadd'
import Educationedit from './Educationedit'
import './Resumedetails.css'
import '../common.css'






const Showeducation = (props) => {

  if (props.editingornew === 0) {
    return (
      <>
        <Educationadd getAlleducation={props.getAlleducation} resumeId={props.resumeId} />
      </>
    )
  } else {
    return (
      <>
        <Educationedit getAlleducation={props.getAlleducation} resumeId={props.resumeId} editingoedu={props.editingoedu} updateEditingornewtoadd={props.updateEditingornewtoadd} />
      </>
    )
  }
}


const Education = () => {
  const { templateId, field, resumeId } = useParams()
  const [editingornew, setEditingornew] = useState(0);
  const [editingoedu, setEditingoedu] = useState({});

  const navigate = useNavigate();

  // getting existing details for show in loop
  const [existingdetails, setExistingdetails] = useState([])
  useEffect(() => {
    window.scrollTo(0, 0)
    getAlleducation();


  }, [])
  const updateEditingornewtoedit = (curredu) => {
    setEditingornew(1)
    setEditingoedu(curredu)
  }

  const updateEditingornewtoadd = () => {
    setEditingornew(0)
  }
  const deleteEducation = (eid) => {
    axios.get(process.env.REACT_APP_SERVER_URL + '/deleteeducationdetails/' + eid)
      .then((response) => {
        console.log(response.data)
        window.location.reload();
      }, (error) => { })
  }
  const getAlleducation = () => {
    axios.get(process.env.REACT_APP_SERVER_URL + '/getalleducation/' + resumeId)
      .then((response) => {
        console.log(response.data)
        setExistingdetails(response.data)
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


      <div id="topsectiondetails" class="container mt-5">
        <div class="d-flex flex-row justify-content-between">


          <div class="flexbox_side">
            <div class="heading p-3 mt-3 ">
              <h2> Education details </h2>
            </div>


            {existingdetails.map((d, index) => (
              <div class="heading mt-2 p-3">



                <div class=" ">
                  <div class="h2"> {d.course} </div>
                </div>

                <div class=" ">
                  <div class="h3"> {d.institution} </div>
                </div>

                <div class=" ">
                  <div class="h4"> {d.startyear} - {d.endyear} </div>
                </div>
                <div class=" ">
                  <div class="p-large color_blue_1"> {d.marks} </div>
                </div>


                <div class="d-flex flex-row">


                  <div class="mt-2 each_box">

                    <div class="top_header_button1 p-large p-3 w-100 cursor_pointer" onClick={() => deleteEducation(d.eduid)}>
                      delete
                      <span class=" px-3 "><i class="fa fa-play" aria-hidden="true"></i> </span>
                    </div>
                  </div>

                  <div class="px-3 mt-2 each_box">
                    <div class="top_header_button h5 p-3 w-100 cursor_pointer" onClick={() => updateEditingornewtoedit(d)} >
                      Edit
                      <span class=" px-3 "><i class="fa fa-pencil" aria-hidden="true"></i> </span>
                    </div>
                  </div>

                </div>


              </div>
            ))}
          </div>


          <div class="flexbox_side">
            <div class="heading p-3 mt-3 w-100">
              <h2> Add education </h2>
            </div>

            <Showeducation editingornew={editingornew} updateEditingornewtoadd={updateEditingornewtoadd} getAlleducation={getAlleducation} resumeId={resumeId} editingoedu={editingoedu} />
          </div>


        </div>

        <div class="d-flex flex-row justify-content-between my-5 border-bottom-link">
          <div class="p-large cursor_pointer text-white px-3" >
            <a href={"/enterpersonaldetails/" + resumeId + "/" + field + "/" + templateId} class="text-white"><i class="fa fa-backward" aria-hidden="true"></i>
              <span class="px-2">Go Previous </span> </a>
          </div>
          <div class="p-large cursor_pointer text-white px-3" >
            <a href={"/enterprojectdetails/" + resumeId + "/" + field + "/" + templateId} class="text-white"><span class="px-2">Go Next </span>  <i class="fa fa-forward" aria-hidden="true"></i> </a>
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

export default Education;