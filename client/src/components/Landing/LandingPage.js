import React from "react";
import Nav from "./Navigation/Nav";
import SignUp from "../LandingTwo/SignUp";
import "../Landing/landingPage.css";

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
                <section className="signUp">
                    <h3>based on you</h3>
                    <SignUp />
                </section>
            </main>
        </>
    );
}

export default LandingPage;
