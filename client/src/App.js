import "./App.css";
import "./components/Landing";
import LandingPage from "./Pages/Landing/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createContext, useState } from "react";

export const AuthContext = createContext({});

function App() {
    return (
        <div className="App">
            <h1>HIIIIIIII 😆</h1>
            <LandingPage />
        </div>
    );
}

export default App;
