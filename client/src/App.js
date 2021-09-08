<<<<<<< HEAD

<<<<<<< HEAD

import "./App.css";

=======
=======
>>>>>>> master
import Profile from './components/Profile/Profile-settings';
>>>>>>> c4a344fdf4ee5528ec34edae81acec7167a9a270

//import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { createContext } from "react";
import LandingPage from "./components/Landing/LandingPage";
// import Home from "./pages/home/Home";
// import ContactForm from './pages/contactForm/ContactForm';
// import Navi from "./components/Navbar/Navi";
// import About from "./pages/about/About";
// import Profile from "./components/Profile/Profile";
=======
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createContext } from 'react';
import LandingPage from './components/Landing/LandingPage';
>>>>>>> master

export const AuthContext = createContext({});

function App() {
<<<<<<< HEAD
    
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
=======
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={LandingPage}></Route>
          <Route exact path='/profile' component={Profile}></Route>
        </Switch>
        {/* <LandingPage /> */}
      </div>
    </Router>
  );
<<<<<<< HEAD

>>>>>>> c4a344fdf4ee5528ec34edae81acec7167a9a270
=======
>>>>>>> master
}

export default App;
