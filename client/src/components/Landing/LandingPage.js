import React from "react";
import Nav from "./Navigation/Nav";
import "../Landing/landingPage.css";

function LandingPage() {
    return (
        <>
            <Nav />
            <main>
                <h2>
                    Find a <span style={{ color: "red" }}>German</span> Friend
                </h2>
            </main>
        </>
    );
}

export default LandingPage;
