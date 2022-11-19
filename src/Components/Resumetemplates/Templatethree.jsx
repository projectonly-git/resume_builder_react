import React, { useState, useEffect } from "react";
import Navbar from '../Navbar/Navbar'
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom'



import '../common.css';
import './Templatethree.css'


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
  } else if (props.personal.linkedin != "") {
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
  } else if (props.personal.github != "") {
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
  } else if (props.personal.linkedin === "" && props.personal.github === "") {
    return (
      <>
      </>
    )
  }
}

const Templatefour = (params) => {
  const { resumeId, templateId, field } = useParams()
  const navigate = useNavigate();

  const [personal, setPersonal] = useState({})
  const [existingdetailsed, setExistingdetailsed] = useState([])
  const [existingdetailsex, setExistingdetailsex] = useState([])
  const [exskill, setExskill] = useState([])
  const [achivment, setAchivment] = useState([])




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

        setAchivment(response.data.achivments)

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
    document.title = localStorage.getItem('username') + "__" + personal.date;
    window.print();

  }

  const reedit = () => {
    const link = "/enterpersonaldetails/" + resumeId + "/" + field + "/" + templateId
    navigate(link)

  }

  return (

    <div class="">

      <Navbar />

      <div class="padding mt-5">

      </div>

      <div class=" d-flex justify-content-center templatethree" >
        <div class=" ">
          <div class=" page px-2 py-1 ">

            <div class="personal_details px-4 mt-3">
              <span class="p-0 h1"> {personal.firstname} {personal.secondname} </span>
              <span class="p-large px-3 underline_it"> {personal.designation} </span><br />
              <span class="p-small bold mt-3">ADRESS : </span><span class="p-small"> {personal.city}, {personal.state}, {personal.pincode}  </span><br />
              <span class="p-small bold">PHONE : </span><span class="p-small"> {personal.phonenumber} </span> ||
              <span class="p-small bold">   EMAIL : </span><span class="p-small"> {personal.emailId}  </span>
              <Linkedingithub personal={personal} />
            </div>


            <div class="px-2">
              <div class="px-3 h3  make_it_blue_font underline1 w-100"> EDUCATION  </div><br />

              {existingdetailsed.map((d, index) => (
                <div class=" make_bg_grey px-3">
                  <span class=" h4"> <i class="fa fa-graduation-cap" aria-hidden="true"></i>{d.course} </span> <br />
                  <span class=" p-large color_blue_1"> <i class="fa fa-building" aria-hidden="true"></i> {d.institution} </span>
                  <span class=" p-small px-3 "> <i class="fa fa-clock-o" aria-hidden="true"></i> {d.startyear} - {d.endyear} </span>  <span class=" h6 px-3 marks_border_bg"> {d.marks} <span class="p-small">/4</span> </span><br />

                </div>


              ))}


              {/*-----------------------------------------------------------------------------------------------
              <div class="p-0 h3 my-0 make_it_blue_font underline1 w-100"> PROJECTS  </div><br />

              <div class=" make_bg_grey">
                <span class=" h4">Blood Bank Application</span>
                <span class=" p-small px-3">08/2022 - 10/2022</span>
                <span class=" p-small px-3 make_it_link ">github link</span>  <br></br>
                <span class="p-small px-3 "> <span class="px-2"><i class="fa fa-circle" aria-hidden="true"></i>   </span>
                  project about part 1 </span><br />
                <span class="p-small px-3 "> <span class="px-2"><i class="fa fa-circle" aria-hidden="true"></i>   </span>
                  project about part 2 </span><br />
                <span class="p-small px-3 "> <span class="px-2"><i class="fa fa-circle" aria-hidden="true"></i>   </span>
                  project about part 3 </span><br />
              </div>
              <div class=" make_bg_grey mt-2 p-2">
                <span class=" h4">Blood Bank Application</span>
                <span class=" p-small px-3">08/2022 - 10/2022</span>
                <span class=" p-small px-3 make_it_link ">github link</span>  <br></br>
                <span class="p-small px-3 "> <span class="px-2"><i class="fa fa-circle" aria-hidden="true"></i>   </span>
                  project about part 1 </span><br />
                <span class="p-small px-3 "> <span class="px-2"><i class="fa fa-circle" aria-hidden="true"></i>   </span>
                  project about part 2 </span><br />
                <span class="p-small px-3 "> <span class="px-2"><i class="fa fa-circle" aria-hidden="true"></i>   </span>
                  project about part 3 </span><br />
              </div>*/}


              <div class="px-3 h3 my-0 make_it_blue_font underline1 w-100"> PROFESSIONAL EXPERIENCES  </div><br />

              {existingdetailsex.map((d, index) => (
                <div class=" make_bg_grey my-1">
                  <span class=" h4 px-3"><i class="fa fa-briefcase" aria-hidden="true"></i>{d.position}</span><br />
                  <span class=" p-large px-3 "><i class="fa fa-id-badge" aria-hidden="true"></i> {d.company}</span><br />
                  <span class=" p-small px-3"> <span class="color_blue_1"><i class="fa fa-calendar" aria-hidden="true"></i> from</span> {d.starttime}  <span class="color_blue_1">to</span>   {d.endtime}  </span><br />
                  <div class="p-small mt-1 px-3">
                    {d.workd}
                  </div>
                </div>

              ))}

              <div class="px-3 h3 my-0 make_it_blue_font underline1 w-100"> SKILLS  </div><br />


              <div class="d-flex flex-row flex-wrap p-large">
                {exskill.map((d, index) => (
                  <div class="px-3  make_bg_grey">{d}</div>
                ))}
              </div>


              <div class="px-3 h3 my-0 make_it_blue_font underline1 w-100"> ACHIVMENTS AND CERTIFICATION   </div><br />

              {achivment.map((d, index) => (
                <>
                  <div class=" make_bg_grey my-1 px-3">
                    <i class="fa fa-free-code-camp" aria-hidden="true"></i> <span class=" h5"> {d.achivmentname}</span>
                    <a href={d.certificatelink}><span class=" p-small px-3 make_it_link "> <i class="fa fa-link" aria-hidden="true"></i> cirtificate link </span></a>  <br></br>
                  </div>
                </>
              ))}





            </div>

          </div>
        </div>
      </div>


      <div class="w-50 container print_button" >
        <div class="h6 d-flex flex-row justify-content-center my-5 border-bottom-link">
          <div class="py-4 text-white px-3 bg-success cursor_pointer" onClick={printDocument}>
            <span class="px-2">download</span>
          </div>
          <div class="py-4  text-white px-3 bg-warning cursor_pointer" onClick={reedit}>
            <span class="px-2">continue to edit</span>
          </div>
        </div>
      </div>


    </div>

  )
}

export default Templatefour;