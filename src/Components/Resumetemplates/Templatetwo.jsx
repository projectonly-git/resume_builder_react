import React, { useState, useEffect } from "react";
import Navbar from '../Navbar/Navbar'



import '../common.css';
import './Templatetwo.css'

const Templatetwo = () => {

  const printDocument = () => {
    window.print();

  }

  return (

    <div class="templatetwo">

      <Navbar />

      <div class="padding mt-5">

      </div>

      <div class=" d-flex justify-content-center" >
        <div class=" ">
          <div class=" page px-2 py-1">

            <div class="personal_details p-2">
              <span class="p-0 h1"> APURBA MAITY  </span>
              <span class="p-large px-3"> Software Engineer  </span><br />
              <span class="p-small bold mt-3">ADRESS : </span><span class="p-small"> sankrail, howrah, 711313  </span><br />
              <span class="p-small bold">PHONE : </span><span class="p-small"> 6290879893 </span> ||
              <span class="p-small bold">   EMAIL : </span><span class="p-small"> maityapurba020@gmail.com  </span><br /><br />
            </div>


            <div class="px-2">
              <div class="p-0 h3 my-0 make_it_blue_font underline1 w-100"> EDUCATION  </div><br />

              <div class=" make_bg_grey">
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
              </div>


              <div class="p-0 h3 my-0 make_it_blue_font underline1 w-100"> EXPERIENCES  </div><br />

              <div class=" make_bg_grey">
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


              <div class="p-0 h3 my-0 make_it_blue_font underline1 w-100"> SKILLS  </div><br />


              <div class="d-flex flex-row flex-wrap p-large">
                <div class="px-3  make_bg_grey">c++</div>
                <div class="px-3  make_bg_grey">c++</div>
                <div class="px-3  make_bg_grey">c++</div>
                <div class="px-3  make_bg_grey">c++</div>
                <div class="px-3  make_bg_grey">Software Engineering</div>
                <div class="px-3  make_bg_grey">Machine Learning</div>
              </div>
              <div class="p-0 h3 my-0 make_it_blue_font underline1 w-100"> ACHIVMENTS AND CERTIFICATION   </div><br />


              <div class=" make_bg_grey">
                <span class=" h6">Achived 1000 rank in codevita 2021 </span>
                <span class=" p-small px-3 make_it_link "> cirtificate </span>  <br></br>
              </div>
              <div class=" make_bg_grey mt-1">
                <span class=" h6">Achived 1000 rank in codevita 2021 </span>
                <span class=" p-small px-3 make_it_link "> cirtificate </span>  <br></br>
              </div>
            </div>

          </div>
        </div>
      </div>


      <div class="w-50 container print_button">
        <div class="d-flex flex-row justify-content-center my-5 border-bottom-link">
          <div class="py-4 p-large cursor_pointer text-white px-3" onClick={printDocument}>
            <span class="px-2">Download</span>
          </div>
        </div>
      </div>


    </div>

  )
}

export default Templatetwo;