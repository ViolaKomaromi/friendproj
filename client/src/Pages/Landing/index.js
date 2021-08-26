import React from "react";
import axiosApiInstance from '../../util/axios';


function LandingPage() {

    

    return (
        <div className="container">
            <div className="row g-2">
                {/* 1st Pop Up */}
                <div className="col-6">

                    <button type="button" className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Register
                    </button>
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title register" id="exampleModalLabel">Register</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                                    <div className="col-sm-10">
                                        <input type="text" readonly className="form-control-plaintext" id="staticEmail" value="email@example.com" />
                                    </div>
                                    <div className="mb-3 row">
                                        <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                        <div className="col-sm-10">
                                            <input type="password" className="form-control" id="inputPassword" />
                                        </div>
                                        <div className="col-auto">
                                            <label for="inputPassword6" className="col-form-label">Password</label>
                                        </div>
                                        <div className="col-auto">
                                            <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                                        </div>
                                        <div className="col-auto">
                                            <span id="passwordHelpInline" className="form-text">
                                                Must be 8-20 characters long.
                                            </span>
                                        </div>
                                    </div>


                                    <div className="row g-3 align-items-center">

                                    </div>



                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2nd Pop Up */}
               
                    <div classNameName="col-6">

                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                            Sign in
                        </button>

                        <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="sign-in" id="exampleModalLabel2">Sign In</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">Close</button>
                                    </div>
                                    <div className="modal-body">

                                        <div className="row g-3 align-items-center">
                                            <div className="col-auto">
                                                <label for="inputPassword6" className="col-form-label">Password</label>
                                            </div>
                                            <div className="col-auto">
                                                <input type="password" id="inputPassword6" className="form-control" />
                                            </div>
                                            <div className="col-auto">
                                                <span id="passwordHelpInline" className="form-text">
                                                    Must be 8-20 characters long.
                                                </span>
                                            </div>
                                        </div>



                                    </div>

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                

            </div>
        </div>
    );

}

export default LandingPage;

