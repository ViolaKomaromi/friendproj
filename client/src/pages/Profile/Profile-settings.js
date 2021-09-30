import React from "react";
import logo from "../../image/tyrolean.png";
import "../Profile/profile.css";
import { useState } from "react";
import axios from "../../util/axios";
import { useHistory } from "react-router-dom";

import Navbar from "../../components/MainNav/Navbar";

export default function Profile({ profile }) {






    return (
        <>
            <Navbar />
            <div className="page-content page-container" id="page-content">
                <h2 className="profile-page-title">Your Profile</h2>
                <div className="padding1">

                    <div className="row container3 d-flex justify-content-center">
                        <div className="col-xl-12 col-md-8">
                            <div className="cardC user-card-full1">
                                <div className="row m-l-0 m-r-0">
                                    <div className="col-sm-4 bg-c-lite-green2 user-profile">
                                        <div className="card-block text-center text-white">
                                            <div className="m-b-25"> <img src={logo} className="img-radius2" alt="User-Profile-Image" /> </div>
                                            <h6 className="f-w-600">William Timlin</h6>
                                            <p>Web Designer</p> <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="card-block2">
                                            <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Email</p>
                                                    <h6 className="text-muted f-w-400">LiamT@gmail.com</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Hobbies</p>
                                                    {/* <h6 className="text-muted f-w-400"> Swimming, Knitting, Playing Guitar, Baking </h6> */}
                                                    <select class="form-select" aria-label="Default select example">
                                                        <option selected>Going to the Gym</option>
                                                        <option value="1">Cooking</option>
                                                        <option value="2">Netflix</option>
                                                        <option value="3">Collecting Stamp</option>
                                                        <option value="3">Hicking</option>
                                                    </select>
                                                   
                                                </div>
                                                
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Interests</p>
                                                    <h6 className="text-muted f-w-400"> Going out with friends. Meeting new people and learning new languages. </h6>
                                                </div>
                                            </div>
                                            <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">🌞</h6>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">City</p>
                                                    <h6 className="text-muted f-w-400">Hamburg</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">About me</p>
                                                    <h6 className="text-muted f-w-400">Nicht alles, was zählt, ist zählbar, und nicht alles, was zählbar ist, zählt.</h6>

                                                </div>
                                            </div>
                                            <ul className="social-link2 list-unstyled m-t-40 m-b-10">
                                                <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i className="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                                <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i className="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                                <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i className="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};


