import React, { useState, useEffect } from "react";
import Navbar from '../Navbar/Navbar'
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";



import '../common.css';
import './Templategallery.css'

const Templategallery = () => {
  const { resumeId, field } = useParams();
  const [rid, setRid] = useState()
  const navigate = useNavigate();



  async function chooseTemplate(templateId) {
    // create the resume with a 6 digit random id and get the resumeId
    await axios.get(process.env.REACT_APP_SERVER_URL + '/setresumetemplate', { params: { emailid: localStorage.getItem('emailid'), resumeid: resumeId, templateid: templateId } })
      .then((response) => {
        const link = "/enterpersonaldetails/" + resumeId + "/" + field + "/" + templateId
        navigate(link, { state: { massage: "resume_created" } })
      }, (error) => { })
  }

  const gotomedoreng = () =>{
    const link = "/userchooseme/" + resumeId 
    navigate(link, { state: { massage: "resume_created" } })
  }


  return (

    <div class="templategalary">

      <Navbar />

      <div class="container">

        <div>
          <div class=" make_bg_grey mt-5 p-2 text-center h1">
            Choose a template
          </div>
          <div class="bg-warning text-white">
            <div class="d-flex align-items-center h4 cursor_pointer" onClick={gotomedoreng} >
              <div>
                <i class="fa fa-chevron-circle-left px-3" aria-hidden="true"></i>
              </div>
              <div>
                go back
              </div>
            </div>
          </div>

          <div class=" mt-5 p-2 text-center">
            <div class="row">

              <div class="col-6 p-2">
                <div>
                  <div>
                    <img src="/template1.jpg"></img>
                  </div>
                  <div class="text-white p-large d-flex justify-content-center">
                    <div class="input_box_text_templategallery px-4 p-2 cursor_pointer" onClick={() => chooseTemplate(1)}>
                      use
                    </div>
                  </div>
                </div>
              </div>


              <div class="col-6 p-2">
                <div>
                  <div>
                    <img src="/template2.jpg"></img>
                  </div>

                  <div class="text-white p-large d-flex justify-content-center">
                    <div class="input_box_text_templategallery px-4 p-2 cursor_pointer" onClick={() => chooseTemplate(2)}>
                      use
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-6 p-2">
                <div>
                  <div>
                    <img src="/template3.jpg"></img>
                  </div>
                  <div class="text-white p-large d-flex justify-content-center">
                    <div class="input_box_text_templategallery px-4 p-2 cursor_pointer" onClick={() => chooseTemplate(3)}>
                      use
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-6 p-2">
                <div>
                  <div>
                    <img src="/template4.jpg"></img>
                  </div>
                  <div class="text-white p-large d-flex justify-content-center">
                    <div class="input_box_text_templategallery px-4 p-2 cursor_pointer" onClick={() => chooseTemplate(4)}>
                      use
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>


        </div>
      </div>




    </div>

  )
}

export default Templategallery;