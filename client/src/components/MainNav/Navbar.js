import React from "react";
import ContactPage from "../../components/ContactButton/ContactPage";
import logo from "../../image/FJ_friendja.png";
import Profile from "../../pages/Profile/Profile-settings";
import "./Navbar.css";
import Logout from "../LandingTwo/Logout";

export default function Navbar() {

   const logout = () => {
        localStorage.clear();
        localStorage.removeItem('Token');
        window.location.href = "/";
    }

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light ">
                <div className="container-fluid ">
                    <a className="nav-link active" aria-current="page" href="/">
                        <img className="navbar-img" src={logo} alt="" />
                    </a>

                    <div id="navbarNavAltMarkup">
                        {/* <div className="collapse navbar-collapse " id="navbarNavAltMarkup"> */}
                        <div className="navbar-nav ms-auto">
                            {/* <div className="nav-btns"></div> */}
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a
                                        // className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdownMenuLink"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <img
                                            className="nav-profile"
                                            src="https://images.unsplash.com/photo-1520295187453-cd239786490c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlciUyMHByb2ZpbGV8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                            alt="profile pic"
                                        />
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                            <a className="dropdown-item" href="/profile">
                                                Profile
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/contact">
                                                Contact
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/friendlist">
                                                Friend List
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/inbox">
                                                Inbox
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/random">
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" onClick={logout} href="/">
                                               Logout
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
