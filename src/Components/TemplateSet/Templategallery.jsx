import React, { useState, useEffect } from "react";
import Navbar from '../Navbar/Navbar'
import { useNavigate } from "react-router-dom";



import '../common.css';
import './Templategallery.css'

const Templategallery = () => {

  const navigate = useNavigate();

  const chooseTemplate = (templateId) => {
    console.log(templateId)
    const link = "/enterpersonaldetails/" + templateId
    navigate(link)
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
                    <div class="input_box_text_templategallery p-2 cursor_pointer" onClick={() => chooseTemplate(1)}>
                      Choose It
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
                    <div class="input_box_text_templategallery p-2 cursor_pointer" onClick={() => chooseTemplate(2)}>
                      Choose It
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
                    <div class="input_box_text_templategallery p-2 cursor_pointer" onClick={() => chooseTemplate(3)}>
                      Choose It
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
                    <div class="input_box_text_templategallery p-2 cursor_pointer" onClick={() => chooseTemplate(4)}>
                      Choose It
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