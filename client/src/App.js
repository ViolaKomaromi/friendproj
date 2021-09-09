import Profile from "./components/Profile/Profile-settings";

//import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext } from "react";
import LandingPage from "./components/Landing/LandingPage";
import Match from "./components/Match/Match";

export const AuthContext = createContext({});

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={LandingPage}></Route>
                    <Route exact path="/profile" component={Profile}></Route>
                    <Route exact path="/random" component={Match}></Route>
                </Switch>
                {/* <LandingPage /> */}
            </div>
        </Router>
    );
}

export default App;
