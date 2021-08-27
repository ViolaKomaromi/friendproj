import "./App.css";
import "./components/Landing/LandingPage";

import Landing from "./components/Landing/LandingPage";
//import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createContext, useState } from "react";
import LandingPage from "./components/Landing/LandingPage";

export const AuthContext = createContext({});

function App() {
    return (
        <div className="App">
           
            <LandingPage />
        </div>
    );
}

export default App;
