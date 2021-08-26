import React from "react";
import axiosApiInstance from '../../util/axios';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import FormWrapper from "../../components/Wrapers/wraper";
import Login from "../Landing/Login";

function LandingPage() {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const history = useHistory();
    const handleSubmitForm = async (e) => {
        e.preventDefault();
        var userToRegister = {
            firstname: firstname,
            lastname: lastname,
            username: username,
            email: email,
            password: password,
        };
        try {
            var res = await axios.post("/register", userToRegister);
            if (res.status == 200) {
                console.log("yaaay the user was added!");
                history.push("/sign-in");
            }
        } catch (error) {
            console.log("Error happened", error);
        }
    };


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
                                    <FormWrapper>

                                        <form
                                            onSubmit={(e) => {
                                                handleSubmitForm(e);
                                            }}
                                        >
                                            <h3>Sign Up</h3>
                                            <div className="form-group">
                                                <label>First name</label>
                                                <input
                                                    type="text"
                                                    value={firstname}
                                                    onChange={(e) => setFirstname(e.target.value)}
                                                    className="form-control"
                                                    placeholder="First name"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Last name</label>
                                                <input
                                                    type="text"
                                                    value={lastname}
                                                    onChange={(e) => setLastname(e.target.value)}
                                                    className="form-control"
                                                    placeholder="Last name"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Username</label>
                                                <input
                                                    type="text"
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                    className="form-control"
                                                    placeholder="Username"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Email address</label>
                                                <input
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="form-control"
                                                    placeholder="Enter email"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input
                                                    type="password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    className="form-control"
                                                    placeholder="Enter password"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Re-Password</label>
                                                <input
                                                    type="password"
                                                    value={rePassword}
                                                    onChange={(e) => setRePassword(e.target.value)}
                                                    className="form-control"
                                                    placeholder="Enter password"
                                                />
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-block">
                                                Sign Up
                                            </button>
                                            <p className="forgot-password text-right">
                                                Already registered <a href="#">sign in?</a>
                                            </p>
                                        </form>
                                    </FormWrapper>

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

                <Login></Login>

            </div>
        </div>
    );

}

export default LandingPage;

