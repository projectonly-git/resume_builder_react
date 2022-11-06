import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Templateone from './Templateone'
import Templatetwo from './Templatetwo'
import Templatethree from './Templatethree'
import Templatefour from './Templatefour'



const Templatehead = () => {
  const { templateId, resumeId } = useParams()

  if(templateId == 1){
    return (
      <Templateone resumeId={resumeId} />
    )
  }else if(templateId == 2){
    return (
      <Templatetwo resumeId={resumeId} />
    )
  }else if(templateId == 3 ){
    return (
      <Templatethree resumeId={resumeId} />
    )
  }else{
    return (
      <Templatefour resumeId={resumeId} />
    )
  }




}

export default Templatehead;