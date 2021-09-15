import Profile from './pages/Profile/Profile-settings';

//import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createContext } from 'react';
import LandingPage from './pages/Landing/LandingPage';



export const AuthContext = createContext({});

function App() {
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
}

export default App;
