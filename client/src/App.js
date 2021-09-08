

import "./App.css";


//import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { createContext } from "react";
import LandingPage from "./components/Landing/LandingPage";
// import Home from "./pages/home/Home";
// import ContactForm from './pages/contactForm/ContactForm';
// import Navi from "./components/Navbar/Navi";
// import About from "./pages/about/About";
// import Profile from "./components/Profile/Profile";

export const AuthContext = createContext({});

function App() {
    
    return (
        <Router>
            <div className="App">
            {/* <Navi /> */}
            {/* <Profile */}
                <Switch>
                   {/* <Route exact path='/'>
                   <Home />
                   </Route> */}
                   
                    <Route exact path='/'>
                      <LandingPage />
                    </Route>
                    {/* <Route exact path='/about'>
                      <About />
                    </Route> */}
                    {/* <Route exact path='/contact' component={ContactForm}></Route> */}
                </Switch>
                {/* <LandingPage /> */}
            </div>
        </Router>
    );
}

export default App;
