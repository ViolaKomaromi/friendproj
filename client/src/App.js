import Profile from './components/Profile/Profile-settings';
import './components/Footer/Footer.css';
import './components/404-page/404.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
import { createContext, useState } from 'react';
import LandingPage from './components/Landing/LandingPage';
import Match from './components/Match/Match';
import PageNotFound from './components/404-page/404-page';
import Footer from './components/Footer/Footer';

export const AuthContext = createContext({});

function App() {
  const [loggedIn, setLoggedIn] = useState(
    window.localStorage.getItem('loggedIn')
  );
  const [token, setToken] = useState(window.localStorage.getItem('token'));

  const handleLogin = (booleanState, token) => {
    if (booleanState) {
      setLoggedIn(true);

      window.localStorage.setItem('token', token);
      window.localStorage.setItem('loggedIn', 'loggedIn');
      setToken(token);
    } else {
      // logout
      setLoggedIn(false);
      window.localStorage.removeItem('loggedIn');
      window.localStorage.removeItem('token');
      setToken(null);
    }
  };

  return (
    <AuthContext.Provider value={{ handleLogin, loggedIn, token }}>
      <Router>
        <div className='App'>
          <Switch>
            <Route
              exact
              path='/'
              render={(props) =>
                loggedIn === false ? (
                  <LandingPage {...props} />
                ) : (
                  <Redirect to='/random' />
                )
              }
            />

            {/* <Route exact path="/" component={LandingPage}></Route> */}
            {/* route after the login/register... takes you to the Match Page */}
            <Route exact path='/profile' component={Profile}></Route>
            <Route exact path='/random' component={Match}></Route>

            <Route component={PageNotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

const GuardedRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      auth === true ? <Component {...props} /> : <Redirect to='/' />
    }
  />
);
export default App;
