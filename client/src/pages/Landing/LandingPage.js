import React from "react";
import Nav from "../../components/Header/LandingNav";
import SignUp from "../LandingTwo/SignUp";
import Login from "../LandingTwo/Login";
import "./landingPage.css";
import Carousel from "../../components/Carousel/Carousel";
// import landingImage from "../../image/landing-background.png";

function LandingPage() {
    return (
        <>
            <Nav />
            <main>
                <header>
                    <h2>
                        Find a <br />{" "}
                        <span className="word w1" style={{ fontSize: "8rem" }}>
                            German
                        </span>
                        <span className="word w2" style={{ fontSize: "8rem" }}>
                            Expat
                        </span>
                        <br /> Friend
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
            </main>
            <div>
                <Carousel />
            </div>
        </>
    );
}

export default LandingPage;
