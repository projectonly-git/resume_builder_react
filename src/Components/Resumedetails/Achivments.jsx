import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'

import Navbar from '../Navbar/Navbar'
import './Resumedetails.css'
import '../common.css'


const Whattoshow = (props) => {

  const [makeformdata, setMakeformdata] = useState({
    achivmentname: "", certificatelink: ""
  })
  const [achcnamew, setAchcnamew] = useState("")

  const update = (event) => {
    let val = event.target.value
    let name = event.target.name
    setMakeformdata((prev) => {
      if (name === "achivmentname") {
        return { achivmentname: val, certificatelink: prev.certificatelink }
      } else if (name === "certificatelink") {
        return { achivmentname: prev.achivmentname, certificatelink: val }
      }
    })
    console.log(makeformdata)
  }

  const addthisachivement = () => {

    var flag = true;
    if (makeformdata.achivmentname === "") {
      setAchcnamew("achivement name can not be empty")
      flag = false;
    } else {
      setAchcnamew("")
    }

    if (flag) {
      var achivement = {};
      achivement.achivmentname = makeformdata.achivmentname
      achivement.certificatelink = makeformdata.certificatelink

      axios.post(process.env.REACT_APP_SERVER_URL + '/saveachivement/' + props.resumeId, achivement)
        .then((response) => {
          console.log(response.data)
          window.location.reload()
        }, (error) => { })

    }
  }


  if (props.editoradd == 0) {
    return (
      <>
        <div class="mt-3 ">
          <div class="">
            <div class="h4"> Achivement title </div>
          </div>
          <div class="d-flex flex-row">
            <input name="achivmentname" onChange={update} class="w-100  p-large input_box_text px-3" type="text" placeholder="enter achivement title " autoFocus/>
          </div>
          <div class="p-small text-danger py-2"> {achcnamew} </div>
        </div>

        <div class="mt-3">
          <div class="">
            <div class="h4"> Certificate  link </div>
          </div>
          <div class="input_box_text px-3 d-flex flex-row">
            <div class="px-3 py-2">
              <i class="fa fa-link fa-2x" aria-hidden="true"></i>
            </div>
            <input name="certificatelink" onChange={update} class="w-100  p-small" type="text" placeholder="eg.. https://github.com/apurbamaity/blood_bank_react" />
          </div>
        </div>

        <div class="mt-2">
          <div class="top_header_button h5 p-3 w-100 cursor_pointer text-center" onClick={addthisachivement}>
            Add
            <span class=" px-3 "><i class="fa fa-play" aria-hidden="true"></i> </span>
          </div>
        </div>
      </>

    )
  }

}


const Achivments = () => {
  const { templateId, field, resumeId } = useParams()
  const [editoradd, setEditoradd] = useState(0);
  const [existingachivments, setExistingachivments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getallachivments()
  }, []);

  const getallachivments = () => {
    axios.get(process.env.REACT_APP_SERVER_URL + '/getresumedetails/' + resumeId)
      .then((response) => {
        console.log(response.data)
        setExistingachivments(response.data.achivments);
      }, (error) => { })
  }
  const deletethisachivment = (achid) => {
    axios.get(process.env.REACT_APP_SERVER_URL + '/deletethisachivment/' + achid)
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

      <Navbar />


      <div class="container mt-5">
        <div class="d-flex flex-row justify-content-between">


          <div class="flexbox_side">
            <div class="heading p-3 mt-3 ">
              <h2> Achivement </h2>
            </div>

            {existingachivments.map((d, index) => (
              <div class="heading mt-2 p-3">
                <div class="">
                  <div class="h2"> {d.achivmentname} </div>
                </div>
                <div class="cursor_pointer mt-3">
                  <div class="p-small color_blue_1">  {d.certificatelink} </div>
                </div>
                <div class="d-flex flex-row">
                  <div class="mt-2 each_box">
                    <div class="top_header_button1 h5 p-3 w-100 cursor_pointer" onClick={() => deletethisachivment(d.achid)}>
                      delete
                      <span class=" px-3 "> <i class="fa fa-trash-o" aria-hidden="true"></i> </span>
                    </div>
                  </div>
                  {/*<div class="px-3 mt-2 each_box">
                    <div class="top_header_button p-large p-3 w-100 cursor_pointer">
                      Edit
                      <span class=" px-3 "><i class="fa fa-play" aria-hidden="true"></i> </span>
                    </div>
                  </div>*/}

                </div>
              </div>
            ))}



          </div>

          <div class="flexbox_side">
            <div class="heading p-3 mt-3 w-100">
              <h2> New achivement </h2>
            </div>
            <Whattoshow editoradd={editoradd} resumeId={resumeId} getallachivments={getallachivments} />
          </div>


        </div>

        <div class="d-flex flex-row justify-content-between my-5 border-bottom-link">
          <div class="p-large cursor_pointer text-white px-3">
            <a href={"/enterskills/" + resumeId + "/" + field + "/" + templateId} class="text-white"><i class="fa fa-backward" aria-hidden="true"></i>
              <span class="px-2">Go Previous </span></a>
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

export default Achivments;