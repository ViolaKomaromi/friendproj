/* eslint-disable no-unused-vars */
// import axios from "../../../util/axios";

import React from "react";
<<<<<<< HEAD
import "../../Landing/Navigation/landingNav.css";
import { BrowserRouter, Route, Link, useHistory } from "react-router-dom";
=======
import AboutPage from "../About/AboutPage";
import ContactPage from "../Contact/ContactPage";
import "../Navigation/";
import logo from "../../images/FJ_friendja.png";
>>>>>>> Match-frontend-merge-clone

function Nav(props) {
    const history = useHistory();
    return (
        <div>
            <nav className="navbar fixed-top navbar-light  navbar-expand-lg ">
                <div className="container-fluid ">
<<<<<<< HEAD
                    <button className="navbar-brand" href="#">
                        FriendJa Logo
                    </button>
=======
                    {/* <a className="navbar-brand" href="#">
                        FriendJa Logo
                    </a> */}
                    <img src={logo} alt="" />
>>>>>>> Match-frontend-merge-clone
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
<<<<<<< HEAD
                        <div className="navbar-nav ms-auto ">
                            <button className="nav-link" href="#">
                                About
                            </button>
                            <button onClick={() => history.push('/contact/message')}>Contact</button>
=======
                        <div className="navbar-nav ms-auto">
                            {/* <a className="nav-link" href="#">
                                About
                            </a>
                            <a className="nav-link" href="#">
                                Contact
                            </a> */}
                            <div className="nav-btns">
                                <AboutPage />
                                <ContactPage />
                            </div>
>>>>>>> Match-frontend-merge-clone
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
