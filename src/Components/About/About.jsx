import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from '../Navbar/Navbar'
import './About.css'
import '../common.css'


const About = () => {
    return (

        <div class="about_section">
            <Navbar />
            <div id="topsectiondetails" class="container mt-5">
                <div class="p-3 mt-3">
                    <div class="heading p-3 mt-3 add_border_on_heading">
                        <h1> ABOUT US </h1>
                    </div>

                    <div class="p-3 mt-3">
                        <div class="p-large">
                            We believe that landing a job and building the perfect resume should be simple, and that a poorly written resume should be the last reason for not getting the job that you want. We’re dedicated to make sure that doesn’t happen. We aggregated millions of resumes for thousands of jobs and job descriptions from thousands of small businesses and large, international companies like Amazon, Apple, Morgan Stanley, Goldman Sachs, and more. With this information we built a machine learning engine that analyzed these resumes and job descriptions in order to build a resume matching profile – determining what keywords to use, what relevant experience to use, and, in general, what works and what doesn’t when making a resume.
                            We don’t just rely on technology. We also have a team of certified resume writers, experts, hiring managers, and employers that assess resumes and job posts to make sure that our results are accurate and have the best chance for getting the job you want.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;