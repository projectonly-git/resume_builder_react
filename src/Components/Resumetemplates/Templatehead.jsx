import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

import Templateone from './Templateone'
import Templatetwo from './Templatetwo'
import Templatethree from './Templatethree'
import Templatefour from './Templatefour'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Templatehead = () => {
  const { resumeId, templateId, field } = useParams()
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
    echo_message()
  }, []);

  const echo_message = () => {
    try {

      if (location.state.message === "saved_resume") {
        toast.success("resume saved under my resume", {
          position: "top-center", autoCloseautoClose: 100,
        })
      }
    } catch (err) { }
  }



  if (templateId == 1) {
    return (
      <>
        <ToastContainer />
        <Templateone resumeId={resumeId} />
      </>

    )
  } else if (templateId == 2) {
    return (
      <>
        <ToastContainer />
        <Templatetwo resumeId={resumeId} />

      </>
    )
  } else if (templateId == 3) {
    return (
      <>
        <ToastContainer />
        <Templatethree resumeId={resumeId} />

      </>
    )
  } else {
    return (
      <>
        <ToastContainer />
        <Templatefour resumeId={resumeId} />

      </>
    )
  }




}

export default Templatehead;