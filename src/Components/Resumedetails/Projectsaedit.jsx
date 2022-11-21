import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Navbar/Navbar'
import './Resumedetails.css'
import '../common.css'



const Projectsadd = (props) => {
  const [value, setValue] = useState(""); // for end year  
  const [check, setCheck] = useState(false); // for end year checkbox
  const [start, setStart] = useState("2000"); // start year
  const [showorhide, setShoworhide] = useState("") // for end year checkbox show or hide




  const [posw, setPosw] = useState("")
  const [companyw, setCompanyw] = useState("")
  const [workdw, setWorkdw] = useState("")
  const [makeformdata, setMakeformdata] = useState({ position: "", company: "", starttime: "", endtime: "", workd: "" })

  useEffect(() => {
    console.log(props.whatsedditing)
    setMakeformdata(props.whatsedditing)

    if (props.whatsedditing.endtime === "present") {
      setShoworhide("d-none");
      setCheck(true)
    } else {
      setShoworhide("");
      setCheck(false)
    }
  }, [props.whatsedditing]);

  const handleCheckboxChange = (event) => {
    setCheck(!check);
    var isChecked = event.target.checked;
    if (!check) {
      setMakeformdata((prev) => {
        return { position: prev.position, company: prev.company, starttime: prev.starttime, endtime: "present", workd: prev.workd }
      })
      setShoworhide("d-none");
    } else {
      setMakeformdata((prev) => {
        return { position: prev.position, company: prev.company, starttime: prev.starttime, endtime: value, workd: prev.workd }
      })
      setShoworhide("");
    }
  }



  const update = (event) => {
    let val = event.target.value
    let name = event.target.name
    setMakeformdata((prev) => {
      if (name === "position") {
        return { position: val, company: prev.company, starttime: prev.starttime, endtime: prev.endtime, workd: prev.workd }
      } else if (name === "company") {
        return { position: prev.position, company: val, starttime: prev.starttime, endtime: prev.endtime, workd: prev.workd }
      } else if (name === "starttime") {
        return { position: prev.position, company: prev.company, starttime: val, endtime: prev.endtime, workd: prev.workd }
      } else if (name === "endtime") {
        return { position: prev.position, company: prev.company, starttime: prev.starttime, endtime: val, workd: prev.workd }
      } else {
        return { position: prev.position, company: prev.company, starttime: prev.starttime, endtime: prev.endtime, workd: val }
      }
    })
    //console.log(makeformdata)
  }


  const saveThisExperience = () => {
    var flag = true;
    if (makeformdata.position === "") {
      setPosw("Please enter your position")
      flag = false;
    } else {
      setPosw("")
    }

    if (makeformdata.company === "") {
      setCompanyw("Please enter your company")
      flag = false;
    } else {
      setCompanyw("")
    }

    if (makeformdata.workd === "") {
      setWorkdw("Please enter your work description")
      flag = false;
    } else {
      setWorkdw("")
    }

    if (flag) {

      var exp = {};
      exp.xpid = props.whatsedditing.xpid;
      exp.position = makeformdata.position;
      exp.company = makeformdata.company
      exp.starttime = makeformdata.starttime
      exp.endtime = makeformdata.endtime
      exp.workd = makeformdata.workd

      axios.post(process.env.REACT_APP_SERVER_URL + '/saveexperiencedetails/' + props.resumeId, exp)
        .then((response) => {
          console.log(response.data)
          props.getAllexp()
          toast.success(" updated this professional experience", {
            position: "top-center", autoClose: 1000,
          })
          //window.location.reload()
          props.updateEditingornewtoadd(0);
        }, (error) => { })
    }




    //console.log(makeformdata)
  }


  return (
    <>
      <div class="mt-3">
        <div class=" ">
          <div class="h4"> Position </div>
        </div>
        <div class="input_box_text px-3 d-flex flex-row">
          <div class="px-3 py-2">
            <i class="fa fa-file-code-o fa-2x" aria-hidden="true"></i>
          </div>
          <input onChange={update} name="position" class="w-100  p-large" type="text" value={makeformdata.position} />
        </div>
        <div class="p-small text-danger py-2"> {posw} </div>
      </div>

      <div class="mt-3">
        <div class=" ">
          <div class="h4"> Company name </div>
        </div>
        <div class="input_box_text px-3 d-flex flex-row">
          <div class="px-3 py-2">
            <i class="fa fa-building-o fa-2x" aria-hidden="true"></i>
          </div>
          <input name="company" onChange={update} class="w-100  p-large" type="text" value={makeformdata.company} />
        </div>
        <div class="p-small text-danger py-2"> {companyw} </div>
      </div>


      <div class="mt-3 ">

        <div class="d-flex flex-row">

          <div class="">
            <div class="h4"> Start time</div>
            <input name="starttime" onChange={update} class=" input_box_text px-3 p-large" type="month" value={makeformdata.starttime} />
          </div>

          <div class="px-3">
            <div class="h4"> End time</div>
            <div class={showorhide}>
              <input name="endtime" onChange={update} class={" input_box_text px-3 p-large"} type="month" value={makeformdata.endtime} />
            </div>
            <div class="d-flex flex-row py-3">
              <input type="checkbox" name="endyearcheckbox" value="present" onChange={handleCheckboxChange} checked={check} />
              <div class="px-5">
                <label for="element" class="p-small">Present</label>
              </div>
            </div>
          </div>


        </div>
      </div>

      <div class="mt-3">
        <div class="">
          <div class="h4"> Work Description <span class="p-small cursor_pointer text-danger tt" data-bs-toggle="tooltip" data-bs-placement="left" title="max words 250" >(<i class="fa fa-info" aria-hidden="true"></i>)</span> </div>
        </div>
        <div class="input_box_text_area_project px-3 d-flex flex-row">
          {/*<textbox class="w-100  p-large" type="text" placeholder="eg.. 90" />*/}
          <textarea name="workd" onChange={update} class="p-small" value={makeformdata.workd} ></textarea>
        </div>
        <div class="p-small text-danger py-2"> {workdw} </div>
      </div>


      <div class="mt-2">

        <div class="top_header_button h5 p-3 w-100 cursor_pointer text-center" onClick={saveThisExperience}>
          Update
          <span class=" px-3 "><i class="fa fa-play" aria-hidden="true"></i> </span>
        </div>
      </div>

    </>
  )

}


export default Projectsadd;