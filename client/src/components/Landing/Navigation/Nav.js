/* eslint-disable no-unused-vars */
// import axios from "../../../util/axios";

import React from "react";
import "../../Landing/Navigation/landingNav.css";
import { BrowserRouter, Route, Link, useHistory } from "react-router-dom";

function Nav(props) {
    const history = useHistory();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid ">
                    <button className="navbar-brand" href="#">
                        FriendJa Logo
                    </button>
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
                            <button className="nav-link" href="#">
                                About
                            </button>
                            <button onClick={() => history.push('/contact/message')}>Contact</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
