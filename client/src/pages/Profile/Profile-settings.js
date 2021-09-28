import React from "react";
import logo from "../../image/tyrolean.png";
import "../Profile/profile.css";
import { useState } from "react";
import axios from "../../util/axios";
import { useHistory } from "react-router-dom";

import Navbar from "../../components/MainNav/Navbar";

export default function Profile({ profile }) {

    


    return (
        <div className="profile-page2">
            <Navbar />
            <div className="container2">
                <h2 className="profile-page-title2">Your Profile</h2>
                <div className="main-body2">
                    <div className="card1 profile-setting-cards2 card-body2 ">
                        <div className="card2">
                            <h5 className="main-body-title2"></h5>
                            <div className="d-flex flex-column align-items-center text-center">
                                <img src={logo} alt="Admin" className="rounded-circle" width="200" />
                                <div className="row2">
                                    <div className="col-sm-12">
                                        <a className="btn profile-settings-submit2 " target="__blank" >
                                            Choose Image
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <div className="row2">
                                        <div className="col-sm-12">
                                            <form className="form-inline2">
                                                <label className="my-1 mr-2" for="inlineFormCustomSelectPref">
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil delectus dolorum perspiciatis quisquam cupiditate assumenda, nisi quos ducimus doloremque dignissimos.
                                                </label>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card2 profile-setting-cards2 card-body2">
                        <div className="card2 ">
                            <h3 className="main-body-title2">About me</h3>
                             <p> I love to paint, read, travel and meet new people. </p>
                             <p>I live in Germany 6 months, would be awsome if i meet local people to improve my language skills and to have fun.  </p>
                        </div>
                    </div>

                    <div className="card3 card-body2">
                        <div className="card2 profile-setting-cards2">
                            <h3 className="main-body-title2">My Details</h3>
                            <div className="profile-settings-forms2">
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


