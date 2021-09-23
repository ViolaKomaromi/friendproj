// import axios from "../../../util/axios";

import React from "react";
import AboutPage from "../AboutButton/AboutPage";
import ContactPage from "../ContactButton/ContactPage";
import "./landingNav.css";
import logo from "../../image/FJ_friendja.png";

function Nav() {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light ">
                <div className="container-fluid ">
                    {/* <a className="navbar-brand" href="#">
                        FriendJa Logo
                    </a> */}
                    <img className="navbar-img" src={logo} alt="" />
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
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
