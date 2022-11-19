import React, { useState, useEffect } from "react";
import './Navbar.css';
import '../common.css'

import { useNavigate } from "react-router-dom";


const Loginprofile = () => {

    const navigate = useNavigate();

    const signout = () => {
        localStorage.removeItem('emailid');
        localStorage.removeItem('username');
        navigate("/");
    }

    if (localStorage.getItem("emailid") == null) {
        return (
            <>
                <div class=" py-1 px-3 h6 login_border cursor_pointer ">
                    <a href="/login" class="text-white ">Login</a>
                </div>
                <div class=" py-1 px-3 h6 login_border cursor_pointer mx-2">
                    <a href="/register" class="text-white " >Signup</a>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div class=" py-1 px-3 h6 login_border cursor_pointer ">
                    <a href="/profile" class="text-white ">My Resume</a>
                </div>
                <div class=" py-1 px-3 p-small  cursor_pointer text-white h6" onClick={signout}>
                    logout  <i class="fa fa-sign-out px-2" aria-hidden="true"></i>
                </div>
            </>
        )
    }
}

const Navbar = () => {


    const printDocument = () => {
        window.print();

    }
    return (


        <>
            <div id="navbar" class=" outerNavbar " >
                <div class=" innerNavbar" >
                    <div class=" container ">
                        <div class=" row py-2 ">

                            <div class=" col-lg-4 ">
                                <a class=" text-white" href="/"><h3 class="cursor_pointer"> Resume Maker </h3></a>
                            </div>

                            <div class=" col-lg-8 text-white">
                                <div class=" d-flex flex-row navbar_option ">
                                    <a href="/about" class="text-white">
                                        <div class=" py-1 px-3 p-small cursor_pointer">
                                            About
                                        </div>
                                    </a>
                                    <div class=" py-1 px-3 p-small cursor_pointer ">
                                        <a href="/#learn" class="text-white">Learn </a>
                                    </div>

                                    <Loginprofile />

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}




export default Navbar;