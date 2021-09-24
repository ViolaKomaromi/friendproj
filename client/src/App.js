//import Profile from './pages/Profile/Profile-settings';
import LandingPage from './pages/Landing/LandingPage';
import './pages/404-page/404.css';
//import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { createContext, useState } from 'react';

import MatchPage from './pages/FriendMatch/MatchPage';

import PageNotFound from './pages/404-page/404-page';

import Profile from './components/Profile/Profile';
import UserNavbar from './components/UserNavbar/UserNavbar';
import Inbox from './components/Inbox/Inbox';
import Notifications from './components/Profile/Notifications';

import { Grid, makeStyles } from '@material-ui/core';
import Add from './components/Add/Add';
import Feeds from './components/Feeds/Feeds';
import Leftbar from './components/Leftbar/Leftbar';
import Rightbar from './components/Rightbar/Rightbar';

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

function App() {
  const classes = useStyles();
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
      setLoggedIn(false);
      window.localStorage.removeItem('loggedIn');
      window.localStorage.removeItem('token');
      setToken(null);
    }
  };

  return (
    <AuthContext.Provider value={{ handleLogin, loggedIn, token }}>
      <Router>
        <div>
          <UserNavbar />
          <Grid container>
            <Grid item sm={2} xs={2}>
              <Leftbar />
            </Grid>
            <Grid item sm={7} xs={10}>
              <Feeds />
            </Grid>
            <Grid item sm={3} className={classes.right}>
              <Rightbar />
            </Grid>
          </Grid>
          <Add />
        </div>
        <div className='App'>
          <Switch>
            <Route
              exact
              path='/'
              render={(props) =>
                loggedIn == null ? (
                  <LandingPage {...props} />
                ) : (
                  <Redirect to='/random' />
                )
              }
            />

            <Route exact path='/profile' component={Profile}></Route>
            <Route exact path='/random' component={MatchPage}></Route>
            <Route exact path='/inbox'>
              <Inbox />
            </Route>
            <Route exact path='/profile'>
              <Profile />
            </Route>
            <Route exact path='/notifications'>
              <Notifications />
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
