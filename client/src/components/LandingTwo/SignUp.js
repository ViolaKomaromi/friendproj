import React from "react";

import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// import axios from "axios";
import axios from '../../util/axios';
import FormWrapper from "../Wrapers/wraper";
import Login from "../LandingTwo/Login";

export default function SignUp() {
    const [fullname, setFullname] = useState("");

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthday, setBirthday] = useState("");
    const [location, setLocation] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [native, setNative] = useState(false);
  

    const history = useHistory();

    const handleSubmitForm = async (e) => {
        e.preventDefault();

        var userToRegister = {
            fullname: fullname,
            username: username,
            email: email,
            password: password,
            rePassword: rePassword,
            birthday: birthday,
            location: location,
            native: native
        };

        // axios.post("http://localhost:4001/user/register", JSON.stringify(userToRegister)).then(res => {
        //     console.log(res);
        // })

        // fetch("http://localhost:4001/user/register", {
        //     method: "POST",
        //     headers: { "content-type": "application/json" },
        //     body: JSON.stringify(userToRegister),
        // })
        //     .then((res) => {
        //         return res.json();
        //     })
        //     .then((err) => {
        //         console.log(err);
        //     });

        try {
            var res = await axios.post("/user/register", userToRegister);
            if (res.status == 200) {
                console.log("yaaay the user was added! 🟢");
                history.push("/register"); // ?
            }
        } catch (error) {
            console.log("Error happened", error);
        }
    };

    useEffect(() => {
        console.log(native)
    }, [native])

    return (
        <div className="container">
            {/* <div className="row g-2"> */}
            {/* 1st Pop Up */}
            <div className="col-12">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Sign up
                </button>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                {/* <h5 className="modal-title register" id="exampleModalLabel">Register</h5> */}
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <FormWrapper>
                                    <form
                                        onSubmit={(e) => {
                                            handleSubmitForm(e);
                                        }}
                                    >
                                        <h3 className="mb-4">Your next friend is waiting</h3>
                                        <div className="d-grid gap-4">
                                            <div className="form-group">
                                                <label>Full name</label>
                                                <input
                                                    type="text"
                                                    value={fullname}
                                                    onChange={(e) => setFullname(e.target.value)}
                                                    className="form-control"
                                                    placeholder="Full Name"
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
                                                <label>Birthday</label>
                                                <input
                                                    type="date"
                                                    value={birthday}
                                                    onChange={(e) => setBirthday(e.target.value)}
                                                    className="form-control"
                                                    placeholder="Birthday"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Location</label>
                                                <input
                                                    type="location"
                                                    value={location}
                                                    onChange={(e) => setLocation(e.target.value)}
                                                    className="form-control"
                                                    placeholder="City"
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
                                            <div className="d-flex flex-column justify-content-around">
                                                <label htmlFor=""> I'm a/an: </label>

                                                <div className="d-flex justify-content-around">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked={native} onClick={() => setNative(true)} />
                                                        <label className="form-check-label" for="flexRadioDefault1">
                                                            Native
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault"  id="flexRadioDefault2" defaultChecked={!native} onClick={() => setNative(false)} />
                                                        <label className="form-check-label" for="flexRadioDefault2">
                                                            Expat
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-block mt-5 mb-3 ">
                                            Sign Up
                                        </button>
                                    </form>
                                </FormWrapper>

                                <div className="row g-3 align-items-center"></div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
}
