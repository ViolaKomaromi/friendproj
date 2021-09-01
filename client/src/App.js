<<<<<<< HEAD
// import logo from './logo.svg';
import ContactForm from './pages/contactform/ContactForm';
// import './App.css';

function App() {
  return (
    <div className="App">
     <ContactForm />
    </div>
  );
=======
import "./App.css";
import "./components/Landing/LandingPage";


//import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createContext, useState } from "react";
import LandingPage from "./components/Landing/LandingPage";

export const AuthContext = createContext({});

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path='/' component={LandingPage}></Route>

                </Switch>
                {/* <LandingPage /> */}
            </div>
        </Router>
    );
>>>>>>> master
}

export default App;
