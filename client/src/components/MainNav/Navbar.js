import React from "react";
import ContactPage from "../../components/ContactButton/ContactPage";
import logo from "../../image/FJ_friendja.png";
import Profile from "../../pages/Profile/Profile-settings";
import "./Navbar.css";
import Logout from "../LandingTwo/Logout";

export default function Navbar() {
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
                                            <a className="dropdown-item" href="/friend-list">
                                                Friend List
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/inbox">
                                                Inbox
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

{
    /* <div>
<nav className="navbar fixed-top navbar-light  navbar-expand-lg  ">
    <div className="container-fluid">
        <img src={logo} alt="" />
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                        Home
                    </a>
                </li>

                <li className="nav-item dropdown">
                    <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        ⬇️
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
                            <a className="dropdown-item" href="/friend-list">
                                Friend List
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="/inbox">
                                Inbox
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>
</div> */
}
