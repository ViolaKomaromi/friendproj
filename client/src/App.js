// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import { createContext } from "react";
// // import LandingPage from "./components/Landing/LandingPage";
// // import Home from "./pages/home/Home";
import Profile from "./components/Profile/Profile";
import UserNavbar from "./components/UserNavbar/UserNavbar";
import Inbox from "./components/Inbox/Inbox"
import Notifications from "./components/Profile/Notifications";

// export const AuthContext = createContext({});





import { Grid, makeStyles } from '@material-ui/core'
import Add from './components/Add/Add';
import Feeds from './components/Feeds/Feeds';
import Leftbar from './components/Leftbar/Leftbar';
import Rightbar from './components/Rightbar/Rightbar';

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
}))

const App = () => {
  const classes = useStyles();
  return (
    <>
    <Router>
    <div>
      <UserNavbar/>
    <Grid container>
      <Grid item sm = {2} xs={2} >
       <Leftbar />
      </Grid>
      <Grid item sm = {7} xs={10} >
        <Feeds />       
      </Grid>
      <Grid item sm = {3} className={classes.right}>
        <Rightbar />
      </Grid>
    </Grid>
    <Add />
    </div>
     <Switch>
     {/* <Route exact path='/'>
     <Home />
     </Route> */}
     
      {/* <Route exact path='/'>
        <LandingPage />
      </Route> */}
      {/* <Route exact path='/about'>
        <About />
      </Route> */}
      <Route exact path='/inbox'>
        <Inbox />
      </Route>
      <Route exact path='/profile'>
        <Profile />
      </Route>
      <Route exact path='/notifications'>
        <Notifications />
      </Route>
      {/* <Route exact path='/contactlist'>
        <ContactList/>
      </Route> */}
      {/* <Route exact path='/contact' component={ContactForm}></Route> */}
  </Switch>
  </Router>
  </>
  );
}

export default App;

