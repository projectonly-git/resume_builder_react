import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


import Navbar from '../Navbar/Navbar'


import './Userchooseme2.css'
import '../common.css';

const Userchooseme2 = () => {
    const navigate = useNavigate();

    const gotomedicalsoftware = () => {
        navigate('/enterresumedetails/1');
    }


    return (

        <>

            <Navbar />

            <div class="chooseouter container mt-3">
                <div class="doctor mt-2 p-3">
                    <div class="row">
                        <div class="col-6">
                        <div class="col-12 med d-flex justify-content-center">
                                <div class="d-flex align-items-center">
                                    MEDICAL
                                </div>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="col-12 sof d-flex justify-content-center">
                                <div class="d-flex align-items-center">
                                    SOFTWARE
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>



        </>

    )
}

export default Userchooseme2;