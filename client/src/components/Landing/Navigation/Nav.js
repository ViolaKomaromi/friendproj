// import axios from "../../../util/axios";

import React from "react";
import Login from "../../LandingTwo/Login";
import "../../Landing/Navigation/landingNav.css";

function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid ">
                    <a className="navbar-brand" href="#">
                        FriendJa Logo
                    </a>
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
                        <div className="navbar-nav ms-auto ">
                            {/* <a className="nav-link active" aria-current="page" href="#">
                                Home
                            </a>
                            <a className="nav-link" href="#">
                                Features
                            </a>
                            <a className="nav-link" href="#">
                                Pricing
                            </a>
                            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
                                Disabled
                            </a> */}

                            <Login />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
