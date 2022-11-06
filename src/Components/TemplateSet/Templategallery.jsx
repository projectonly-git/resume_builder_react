import React, { useState, useEffect } from "react";
import Navbar from '../Navbar/Navbar'
import { useNavigate } from "react-router-dom";

import axios from "axios";



import '../common.css';
import './Templategallery.css'

const Templategallery = () => {

  const [rid, setRid] = useState()

  const navigate = useNavigate();
  var resumeId = 100;

  async function chooseTemplate(templateId){
    console.log(templateId)
    // create the resume with a 6 digit random id and get the resumeId
    await axios.get(process.env.REACT_APP_SERVER_URL + '/createresume', { params: { emailid: localStorage.getItem('emailid'), templateid: templateId } })
      .then((response) => {
        setRid(response.data)
        const link = "/enterpersonaldetails/" + response.data + "/" + templateId
        navigate(link)
      }, (error) => { })



    //console.log(rid)

  }


  return (

    <div class="templategalary">

      <Navbar />

      <div class="container">
        <div>
          <div class=" make_bg_grey mt-5 p-2 text-center h1">
            CHOOSE YOUR TEMPLATE
          </div>

          <div class=" mt-5 p-2 text-center">
            <div class="row">

              <div class="col-3 p-2">
                <div>
                  <div>
                    <img src="template1.jpg"></img>
                  </div>
                  <div class="text-white p-large d-flex justify-content-center">
                    <div class="input_box_text_templategallery px-4 p-2 cursor_pointer" onClick={() => chooseTemplate(1)}>
                      use
                    </div>
                  </div>
                </div>
              </div>


              <div class="col-3 p-2">
                <div>
                  <div>
                    <img src="template2.jpg"></img>
                  </div>

                  <div class="text-white p-large d-flex justify-content-center">
                    <div class="input_box_text_templategallery px-4 p-2 cursor_pointer" onClick={() => chooseTemplate(2)}>
                      use
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-3 p-2">
                <div>
                  <div>
                    <img src="template3.jpg"></img>
                  </div>
                  <div class="text-white p-large d-flex justify-content-center">
                    <div class="input_box_text_templategallery px-4 p-2 cursor_pointer" onClick={() => chooseTemplate(3)}>
                      use
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-3 p-2">
                <div>
                  <div>
                    <img src="template4.jpg"></img>
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