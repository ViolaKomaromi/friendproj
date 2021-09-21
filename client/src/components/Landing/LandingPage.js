import React from "react";
import Nav from "./Navigation/Nav";
import SignUp from "../LandingTwo/SignUp";
import Login from "../LandingTwo/Login";
import "../Landing/landingPage.css";
import Carousel from "./Carousel/Carousel";
import landingImage from "../images/landing-background.png";

function LandingPage() {
    return (
        <>
            <Nav />
            <main>
                <div class="overlay"></div>
                <div className="landingWrapper">
                    <header>
                        <h2>
                            Find a <br /> <span style={{ fontSize: "9rem" }}>German</span> <br /> Friend
                        </h2>

                        <h3>based on you</h3>
                        <div className="underline"></div>
                    </header>
                    <section>
                        <div className="sign-login-btns">
                            <SignUp />
                            <Login />
                        </div>
                    </section>
                </div>
            </main>
            <div>
                <Carousel />
            </div>
        </>
    );
}

export default LandingPage;
