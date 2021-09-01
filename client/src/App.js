<<<<<<< HEAD
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

=======
import Profile from './components/Profile/Profile-settings';
>>>>>>> origin/profile

//import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createContext, useState } from 'react';
import LandingPage from './components/Landing/LandingPage';

export const AuthContext = createContext({});

function App() {
<<<<<<< HEAD
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
>>>>>>> origin/profile
}

export default App;
