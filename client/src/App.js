
import Profile from './pages/Profile/Profile-settings';
import LandingPage from './pages/Landing/LandingPage';
import './pages/404-page/404.css';
//import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { createContext, useState } from "react";

import MatchPage from './pages/FriendMatch/MatchPage';



import PageNotFound from './pages/404-page/404-page';

export const AuthContext = createContext({});

function App() {
    const [loggedIn, setLoggedIn] = useState(window.localStorage.getItem("loggedIn"));
    const [token, setToken] = useState(window.localStorage.getItem("token"));

    const handleLogin = (booleanState, token) => {
        if (booleanState) {
            setLoggedIn(true);

            window.localStorage.setItem("token", token);
            window.localStorage.setItem("loggedIn", "loggedIn");
            setToken(token);
        } else {
            setLoggedIn(false);
            window.localStorage.removeItem("loggedIn");
            window.localStorage.removeItem("token");
            setToken(null);
        }
    };

    return (
        <AuthContext.Provider value={{ handleLogin, loggedIn, token }}>
            <Router>
                <div className="App">
                    <Switch >
                        <Route exact path='/' render={(props) => (
                            loggedIn == null
                                ? <LandingPage {...props} />
                                : <Redirect to='/random' />
                        )} />
                      
                        <Route exact path="/" component={LandingPage}></Route>

                        <Route exact path="/profile" component={Profile}></Route>
                        <Route exact path="/random" component={MatchPage}></Route>
                    </Switch>
                    
                </div>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
