import React from "react";
import logo from "./profilephotoplaceholder.png";
import "../Profile/profile.css";
import { useState } from "react";
import axios from "../../util/axios";
import { useHistory } from "react-router-dom";

import Navbar from "../../components/MainNav/Navbar";

export default function Profile({ profile }) {

    


    return (
        <div className="profile-page">
            <Navbar />
            <div className="container">
                <h2 className="profile-page-title">Your Profile</h2>
                <div className="main-body">
                    <div className="card1 profile-setting-cards card-body ">
                        <div className="card">
                            <h5 className="main-body-title"></h5>
                            <div className="d-flex flex-column align-items-center text-center">
                                <img src={logo} alt="Admin" className="rounded-circle" width="150" />
                                <div className="row">
                                    <div className="col-sm-12">
                                        <a className="btn profile-settings-submit " target="__blank" href="/">
                                            Choose Image
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <form className="form-inline">
                                                <label className="my-1 mr-2" for="inlineFormCustomSelectPref">
                                                    😃
                                                </label>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card2 profile-setting-cards card-body">
                        <div className="card ">
                            <h3 className="main-body-title">About me</h3>
                             <p> I love to paint, read, travel and meet new people. </p>
                             <p>I live in Germany 6 months, would be awsome if i meet local people to improve my language skills and to have fun.  </p>
                        </div>
                    </div>

                    <div className="card3 card-body">
                        <div className="card profile-setting-cards">
                            <h3 className="main-body-title">My Details</h3>
                            <div className="profile-settings-forms">
                             <h4>Name</h4>
                             <p>Viola Komaromi</p>
                             <h4>City</h4>
                             <p>Düsseldorf</p>
                             <h4>Hobies</h4>
                             <p>Reading, jogging, </p>
                             <h4>Fun Fact about me</h4>
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, exercitationem?</p>
                             <h4>My favorite quote</h4>
                             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores similique consequuntur sequi amet eaque? Quas, iste. Itaque vero ipsa enim?</p>





                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


