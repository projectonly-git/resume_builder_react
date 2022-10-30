import React, { useState, useEffect } from "react";
import Navbar from '../Navbar/Navbar'


import './templateone.css'
import '../common.css';

const Templateone = () => {

  const printDocument = () => {
    window.print();

  }

  return (

    <>

      <Navbar />

      <div class="padding mt-5">

      </div>

      <div class=" d-flex justify-content-center" >
        <div class=" ">
          <div class=" page px-4 py-2">
            <span class="p-0 h1"> APURBA MAITY  </span>
            <span class="p-large px-3"> Software Engineer  </span><br />
            <span class="p-small text-danger bold mt-3">ADRESS : </span><span class="p-small"> sankrail, howrah, 711313  </span><br />
            <span class="p-small text-danger bold">PHONE : </span><span class="p-small"> 6290879893 </span> ||
            <span class="p-small text-danger bold">   EMAIL : </span><span class="p-small"> maityapurba020@gmail.com  </span><br /><br />



            <span class="p-0 h3 text-danger underline1"> EDUCATION  </span><br />

            <div class=" make_bg_grey mt-2 p-2">
              <span class=" h4">Class 10 </span>
              <span class=" p-small px-3 "> 2016-2017 </span>  <span class=" p-large px-3 color_blue_2"> 84 % </span><br />
              <span class=" p-large color_blue_1"> sankrail A.C high school </span>
            </div>
            <div class=" make_bg_grey mt-2 p-2">
              <span class=" h4">B.Tech in CSE </span>
              <span class=" p-small px-3 "> 2019-current </span>  <span class=" p-large px-3 color_blue_2"> 84 % </span><br />
              <span class=" p-large color_blue_1"> Techno Main Salt Lake</span>
            </div>


            {/*-----------------------------------------------------------------------------------------------*/}
            <span class="p-0 h3 text-danger underline1">  make_bg_grey  </span><br />

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
            </div>



            <span class="p-0 h3 text-danger underline1"> EXPERIENCES  </span><br />

            <div class=" make_bg_grey mt-2 p-2">
              <span class=" h4">Full Stack Engineer</span>
              <span class=" p-large px-3 ">companyname</span>
              <span class=" p-small px-3">08/2022 - 10/2022</span><br />


              <span class="p-small px-3 "> <span class="px-2"><i class="fa fa-circle" aria-hidden="true"></i>   </span>
                project about part 1 </span><br />
              <span class="p-small px-3 "> <span class="px-2"><i class="fa fa-circle" aria-hidden="true"></i>   </span>
                project about part 2 </span><br />
              <span class="p-small px-3 "> <span class="px-2"><i class="fa fa-circle" aria-hidden="true"></i>   </span>
                project about part 3 </span><br />
            </div>


            <span class="p-0 h3 text-danger underline1"> SKILLS  </span><br />

            <div class="d-flex flex-row flex-wrap p-large">
              <div class="px-3  make_bg_grey m-2">c++</div>
              <div class="px-3  make_bg_grey m-2">c++</div>
              <div class="px-3  make_bg_grey m-2">c++</div>
              <div class="px-3  make_bg_grey m-2">c++</div>
              <div class="px-3  make_bg_grey m-2">Software Engineering</div>
              <div class="px-3  make_bg_grey m-2">Machine Learning</div>
            </div>

            <span class="p-0 h3 text-danger underline1"> ACHIVMENTS AND CERTIFICATION  </span><br />

            <div class=" make_bg_grey mt-2 p-2">
              <span class=" h6">Achived 1000 rank in codevita 2021 </span>
              <span class=" p-small px-3 make_it_link "> cirtificate </span>  <br></br>
            </div>
            <div class=" make_bg_grey mt-2 p-2">
              <span class=" h6">Achived 1000 rank in codevita 2021 </span>
              <span class=" p-small px-3 make_it_link "> cirtificate </span>  <br></br>
            </div>

          </div>
        </div>
      </div>


      <div class="container print_button">
        <div class="d-flex flex-row justify-content-center my-5 border-bottom-link">
          <div class="p-large cursor_pointer text-white px-3" onClick={printDocument}>
            <span class="px-2">Download And Land Your Dream Job </span>
          </div>
        </div>
      </div>


    </>

  )
}

export default Templateone;