import React, { useState, useEffect } from "react";
import Navbar from '../Navbar/Navbar'
import axios from "axios";


import "./templateone.css"


const Linkedingithub = (props) => {
  if (props.personal.linkedin !== "" && props.personal.github !== "") {
    return (
      <>
        <div class="d-flex flex-row p-0 m-0">
          <div>
            <a href={props.personal.linkedin}>
            <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>

            </a>
          </div>
          <div class="px-3">
            <a href={props.personal.github}>
            <i class="fa fa-github-square fa-2x" aria-hidden="true"></i>

            </a>
          </div>
        </div>
      </>
    )
  }else if (props.personal.linkedin != "" ) {
    return (
      <>
        <div class="d-flex flex-row">
          <div>
            <a href={props.personal.linkedin}>
            <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>

            </a>
          </div>
        </div>
      </>
    )
  }else if (props.personal.github != "" ) {
    return (
      <>
        <div class="d-flex flex-row">
          <div>
            <a href={props.personal.github}>
            <i class="fa fa-github-square fa-2x" aria-hidden="true"></i>

            </a>
          </div>
        </div>
      </>
    )
  }else if(props.personal.linkedin === "" && props.personal.github === ""){
    return (
      <>
      </>
    )
  }
}

const Templateone = (params) => {

  const [personal, setPersonal] = useState({})
  const [existingdetailsed, setExistingdetailsed] = useState([])
  const [existingdetailsex, setExistingdetailsex] = useState([])
  const [exskill, setExskill] = useState([])




  useEffect(() => {
    console.log(params.resumeId)
    getAlleducation();
    getAllskills()
  }, []);

  const getAllskills = () => {
    axios.get(process.env.REACT_APP_SERVER_URL + '/getresumedetails/' + params.resumeId)
      .then((response) => {
        console.log(response.data)
        
        setPersonal(response.data)
        setExistingdetailsex(response.data.experiences)
        var ns = response.data.skills.replace("null", "");
        var skill_arr = ns.substr(0, ns.length - 1).split(",")
        setExskill(skill_arr);
      }, (error) => { })

  }

  const getAlleducation = () => {
    axios.get(process.env.REACT_APP_SERVER_URL + '/getalleducation/' + params.resumeId)
      .then((response) => {
        console.log(response.data)
        setExistingdetailsed(response.data)
        //setBlood(response.data)
      }, (error) => { })
  }


  const printDocument = () => {
    window.print();
  }

  return (

    <>

      <Navbar />

      <div class="padding mt-5">

      </div>

      <div class=" d-flex justify-content-center templateone" >
        <div class=" ">
          <div class=" page px-2 py-1">

            <div class="personal_details p-2 text-white">
              <span class="p-0 h1"> {personal.username}  </span>
              <span class="p-large px-3"> {personal.designation} </span><br />
              <span class="p-small bold mt-3">ADRESS : </span><span class="p-small"> {personal.city}, {personal.state}, {personal.pincode}  </span><br />
              <span class="p-small bold">PHONE : </span><span class="p-small"> {personal.phonenumber} </span> ||
              <span class="p-small bold">   EMAIL : </span><span class="p-small"> {personal.emailId}  </span>
              <Linkedingithub personal={personal} />
            </div>


            <div class="px-2">
              <span class="p-0 h3 make_it_blue_font underline1"> EDUCATION  </span><br />


              {existingdetailsed.map((d, index) => (
                <div class=" make_bg_grey mt-2 p-2">
                  <span class=" h4"> {d.course} </span>
                  <span class=" p-small px-3 "> {d.startyear} - {d.endyear} </span>  <span class=" p-large px-3 color_blue_2"> {d.marks} </span><br />
                  <span class=" p-large color_blue_1"> {d.institution} </span>
                </div>


              ))}




              {/*-----------------------------------------------------------------------------------------------*/}
              <span class="p-0 h3 make_it_blue_font underline1">  EXPERIENCES  </span><br />

              {existingdetailsex.map((d, index) => (
                <div class=" make_bg_grey mt-2 p-2">
                  <span class=" h4">{d.position}</span>
                  <span class=" p-large px-3 ">{d.company}</span>
                  <span class=" p-small px-3"> <span class="color_blue_1">from</span> {d.starttime}  <span class="color_blue_1">to</span>   {d.endtime}  </span><br />
                  <div class="p-small py-2">
                    {d.workd}
                  </div>
                </div>

              ))}

              <span class="p-0 h3 make_it_blue_font underline1"> SKILLS  </span><br />

              <div class="d-flex flex-row flex-wrap p-large">

                {exskill.map((d, index) => (
                  <div class="px-3  make_bg_grey m-2">{d}</div>
                ))}
              </div>

              {/*<span class="p-0 h3 make_it_blue_font underline1"> ACHIVMENTS AND CERTIFICATION  </span><br />

              <div class=" make_bg_grey mt-2 p-2">
                <span class=" h6">Achived 1000 rank in codevita 2021 </span>
                <span class=" p-small px-3 make_it_link "> cirtificate </span>  <br></br>
              </div>
              <div class=" make_bg_grey mt-2 p-2">
                <span class=" h6">Achived 1000 rank in codevita 2021 </span>
                <span class=" p-small px-3 make_it_link "> cirtificate </span>  <br></br>
                </div>*/}
            </div>

          </div>
        </div>
      </div>


      <div class="w-50 container print_button cursor_pointer" onClick={printDocument}>
        <div class="d-flex flex-row justify-content-center my-5 border-bottom-link">
          <div class="py-4 p-large  text-white px-3" onClick={printDocument}>
            <span class="px-2">Download</span>
          </div>
        </div>
      </div>

    </>

  )
}

export default Templateone;