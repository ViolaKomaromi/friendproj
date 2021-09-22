import React from "react";
import Nav from "../../components/Header/LandingNav";
import SignUp from "../LandingTwo/SignUp";
import Login from "../LandingTwo/Login";
import "./landingPage.css";
import Carousel from "../../components/Carousel/Carousel";
import landingImage from "../../image/landing-background.png";

function LandingPage() {
    return (
        <>
            <Nav />
            <main>
                <div className="overlay"></div>
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
