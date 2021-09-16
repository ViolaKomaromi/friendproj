import React from "react";
import Nav from "../../components/Header/LandingNav";
import SignUp from "../LandingTwo/SignUp";
import Login from "../LandingTwo/Login";
import "../Landing/landingPage.css";
import Carousel from "../../components/Carousel/Carousel";

function LandingPage() {
    return (
        <>
            <Nav />
            <main>
                <header>
                    <h2>
                        Find a <br /> <span style={{ fontSize: "9rem" }}>German</span> <br /> Friend
                    </h2>
                </header>
                <section>
                    <h3>based on you</h3>
                    <div className="sign-login-btns">
                        <SignUp />
                        <Login />
                    </div>
                </section>
            </main>
            <div>
                <Carousel />
            </div>
        </>
    );
}

export default LandingPage;
