import React from "react";
import logo from "../../image/tyrolean.png";
import "../Profile/profile.css";
import { useState } from "react";
import axios from "../../util/axios";
import { useHistory } from "react-router-dom";

import Navbar from "../../components/MainNav/Navbar";

export default function Profile({ profile }) {




    // return (
    //     <div className="profile-page1">
    //         <Navbar />
    //         <div className="container">
    //             <h2 className="profile-page-title">Your Profile</h2>
    //             <div className="main-body1">
    //                 <div className="card1 profile-setting-cards card-body ">
    //                     <div className="card1">
    //                         <h5 className="main-body-title1"></h5>
    //                         <div className="d-flex flex-column align-items-center text-center">
    //                             <img src={logo} alt="Admin" className="rounded-circle" width="200" />
    //                             <div className="row" >
    //                                 <div className="col-sm-12">
    //                                     <a className="btn profile-settings-submit " target="__blank" >
    //                                         Choose Image
    //                                     </a>
    //                                 </div>
    //                             </div>
    //                             <div className="mt-3">
    //                                 <div className="row1">
    //                                     <div className="col-sm-12">
    //                                         <form className="form-inline">
    //                                             <label className="my-1 mr-2" for="inlineFormCustomSelectPref">
    //                                                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil delectus dolorum perspiciatis quisquam cupiditate assumenda, nisi quos ducimus doloremque dignissimos.
    //                                             </label>

    //                                         </form>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>

    //                 <div className="card profile-setting-cards card-body">
    //                     <div className="card1">
    //                         <h3 className="main-body-title1">About me</h3>
    //                          <p> I love to paint, read, travel and meet new people. </p>
    //                          <p>I live in Germany 6 months, would be awsome if i meet local people to improve my language skills and to have fun.  </p>
    //                     </div>
    //                 </div>

    //                 <div className="card1 card-body">
    //                     <div className="card profile-setting-cards">
    //                         <h3 className="main-body-title">My Details</h3>
    //                         <div className="profile-settings-forms1">
    //                          <h4>Name</h4>
    //                          <p>Viola Komaromi</p>
    //                          <h4>City</h4>
    //                          <p>Düsseldorf</p>
    //                          <h4>Hobies</h4>
    //                          <p>Reading, jogging, </p>
    //                          <h4>Fun Fact about me</h4>
    //                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, exercitationem?</p>
    //                          <h4>My favorite quote</h4>
    //                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores similique consequuntur sequi amet eaque? Quas, iste. Itaque vero ipsa enim?</p>





    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );

    return (
        <>
            <Navbar />
            <div className="page-content page-container" id="page-content">
                <h2 className="profile-page-title">Your Profile</h2>
                <div className="padding">

                    <div className="row container d-flex justify-content-center">
                        <div className="col-xl-12 col-md-8">
                            <div className="card user-card-full">
                                <div className="row m-l-0 m-r-0">
                                    <div className="col-sm-4 bg-c-lite-green user-profile">
                                        <div className="card-block text-center text-white">
                                            <div className="m-b-25"> <img src={logo} className="img-radius" alt="User-Profile-Image" /> </div>
                                            <h6 className="f-w-600">William Timlin</h6>
                                            <p>Web Designer</p> <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="card-block">
                                            <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Email</p>
                                                    <h6 className="text-muted f-w-400">rntng@gmail.com</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Hobbies</p>
                                                    <h6 className="text-muted f-w-400">Draving, Swiming, Knitting 😄  </h6>
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
                                                    <h6 className="text-muted f-w-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, assumenda.</h6>
                                                </div>
                                            </div>
                                            <ul className="social-link list-unstyled m-t-40 m-b-10">
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


