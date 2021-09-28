import React from "react";
import logo from "./profilephotoplaceholder.png";
import "../Profile/profile.css";
//import axios from '../../util/axios';
//import { AuthContext } from '../../App';
import Navbar from "../../components/MainNav/Navbar";

export const Profile = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="main-body">
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5>Profile Picture</h5>
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src={logo} alt="Admin" className="rounded-circle" width="150" />
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <a className="btn btn-success " target="__blank" href="/">
                                                    Choose Image
                                                </a>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <form className="form-inline">
                                                        <label className="my-1 mr-2" for="inlineFormCustomSelectPref">
                                                            Gender
                                                        </label>
                                                        <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                                            <option selected>Choose...</option>
                                                            <option value="1">Male</option>
                                                            <option value="2">Female</option>
                                                            <option value="3">Other</option>
                                                        </select>
                                                    </form>
                                                    {/* <div className="mt-3">
                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <form className="form-inline">
                                                                <label className="my-1 mr-2" for="inlineFormCustomSelectPref">
                                                                    Age
                                                                </label>
                                                                <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                                                    <option selected>Choose...</option>
                                                                    <option value="1">25</option>
                                                                    <option value="2">26</option>
                                                                    <option value="3">27</option>
                                                                </select>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div> */}
                                                    {/* <div className="mt-3">
                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <form className="form-inline">
                                                                <label className="my-1 mr-2" for="inlineFormCustomSelectPref">
                                                                    City
                                                                </label>
                                                                <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                                                    <option selected>Choose...</option>
                                                                    <option value="1">Hamburg</option>
                                                                    <option value="2">Duesseldorf</option>
                                                                    <option value="3">Munich</option>
                                                                </select>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <form className="form-inline">
                                            <label className="my-1 mr-2" for="inlineFormCustomSelectPref">
                                                My Hobbies
                                            </label>
                                            <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                                <option selected>Choose...</option>
                                                <option value="1">Painting</option>
                                                <option value="2">Surfing</option>
                                                <option value="3">Dancing</option>
                                                <option value="4">Jogging</option>
                                                <option value="5">Dog walking</option>
                                                <option value="6">Cooking</option>
                                                <option value="7">Gym</option>
                                                <option value="8">Traveling</option>
                                                <option value="9">Skiing</option>
                                            </select>
                                        </form>
                                        <form className="form-inline">
                                            <label className="my-1 mr-2" for="inlineFormCustomSelectPref">
                                                I like drinking
                                            </label>
                                            <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                                <option selected>Choose...</option>
                                                <option value="1">Coctails</option>
                                                <option value="2">Non Alcoholic Drinks</option>
                                                <option value="3">Soft Drinks</option>
                                                <option value="4">Smoothies</option>
                                                <option value="5">Coffee Addict</option>
                                            </select>
                                            <form className="form-inline">
                                                <label className="my-1 mr-2" for="inlineFormCustomSelectPref">
                                                    I like eating
                                                </label>
                                                <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                                    <option selected>Choose...</option>
                                                    <option value="1">Italian</option>
                                                    <option value="2">Indian </option>
                                                    <option value="3">Mexican </option>
                                                    <option value="4">Asian</option>
                                                    <option value="5">German</option>
                                                </select>
                                            </form>
                                            <form className="form-inline">
                                                <label className="my-1 mr-2" for="inlineFormCustomSelectPref">
                                                    I like to
                                                </label>
                                                <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                                    <option selected>Choose...</option>
                                                    <option value="1">Watch movies</option>
                                                    <option value="2">Go ice skating</option>
                                                    <option value="3">Play video games</option>
                                                </select>
                                            </form>
                                        </form>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <form>
                                        <label for="inputName">Full Name</label>
                                        <div className="row">
                                            <div className="col">
                                                <input type="text" className="form-control" placeholder="John" />
                                            </div>

                                            <div className="col">
                                                <input type="text" className="form-control" placeholder="Doe" />
                                            </div>
                                        </div>
                                    </form>
                                    <form>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label for="inputEmail4">Email</label>
                                                <input type="email" className="form-control" id="inputEmail4" placeholder="jdoe@gmail.com" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="inputAddress">Address</label>
                                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label for="inputCity">City</label>
                                                <input type="text" className="form-control" id="inputCity" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label for="inputPassword4">Password</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="inputPassword4"
                                                    placeholder="Please enter a valid password"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group"></div>
                                        <button type="submit" className="btn btn-success">
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
