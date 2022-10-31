import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";





// import components from './components'
import Navbar from './Components/Navbar/Navbar'
import Templateone from './Components/Resumetemplates/Templateone'
import Templatetwo from './Components/Resumetemplates/Templatetwo'
import Templatethree from './Components/Resumetemplates/Templatethree'
import Templatefour from './Components/Resumetemplates/Templatefour'
import Templategallery from './Components/TemplateSet/Templategallery'

import Home from './Components/Homescreen/Home'
import Userchooseme2 from './Components/Userchooseme/Userchooseme2'
import Personal from './Components/Resumedetails/Personal'
import Education from './Components/Resumedetails/Education'
import Projects from './Components/Resumedetails/Projects'
import Skills from './Components/Resumedetails/Skills'
import Achivments from './Components/Resumedetails/Achivments'


import Login from './Components/Loginregister/Login'
import Register from './Components/Loginregister/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>

      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>

      <Routes>
        <Route path="/userchooseme" element={<Userchooseme2 />} />
      </Routes>

      <Routes>
        <Route path="/choosetemplates" element={<Templategallery />} />
      </Routes>

      <Routes>
        <Route path="/enterpersonaldetails/:resumeId/:templateId" element={<Personal />} />
      </Routes>

      <Routes>
        <Route path="/entereducationaldetails/:resumeId/:templateId" element={<Education />} />
      </Routes>

      <Routes>
        <Route path="/enterprojectdetails/:resumeId/:templateId" element={<Projects />} />
      </Routes>

      <Routes>
        <Route path="/enterskills/:resumeId/:templateId" element={<Skills />} />
      </Routes>

      <Routes>
        <Route path="/enterachivments/:resumeId/:templateId" element={<Achivments />} />
      </Routes>



      <Routes>
        <Route path="/showresults/:resumeId/:templateId" element={<Templatethree />} />
      </Routes>










    </BrowserRouter>
  );
}

export default App;
