import Profile from './components/Profile/Profile-settings';

//import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createContext } from 'react';
//import LandingPage from './components/Landing/LandingPage';
import Contact from './pages/contactForm/ContactForm';

export const AuthContext = createContext({});

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          {/* <Route exact path='/' component={LandingPage}></Route> */}
          <Route exact path='/profile' component={Profile}></Route>
          {/* <Contact /> */}
          {/* <Route component={PageNotFound} /> */}
        </Switch>
        {/* <LandingPage /> */}
      </div>
    </Router>
  );
}

export default App;
