//import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createContext, useState } from "react";
import LandingPage from "./components/Landing/LandingPage";
import ContactForm from './pages/contactform/ContactForm';
export const AuthContext = createContext({});

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path='/' component={LandingPage}></Route>
                    <Route exact path='/contact' component={ContactForm }></Route>
                
                </Switch>
                {/* <LandingPage /> */}
            </div>
        </Router>
    );

}

export default App;
