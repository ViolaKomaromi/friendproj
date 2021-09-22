
import React from "react";
import ContactPage from "../../components/ContactButton/ContactPage";
import logo from "../../image/FJ_friendja.png";
import Profile from "../../pages/Profile/Profile-settings";



export default function Navbar() {



    return (
        <div>


            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <img src={logo} alt="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                           
                           
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    ⬇️
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    
                                    
                                    <li><a className="dropdown-item" href="/profile">Profile</a></li>
                                    <li><a className="dropdown-item" href="/contact">Contact</a></li>
                                    <li><a className="dropdown-item" href="/friend-list">Friend List</a></li>
                                    <li><a className="dropdown-item" href="/inbox">Inbox</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>




        </div>
    )
}




