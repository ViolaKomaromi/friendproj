import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/Profile/Profile';
import FriendsList from './components/Profile/FriendsList';
import MailBox from './components/Profile/MailBox';

function App() {
  return (
    <>
      <Profile />
      <MailBox />
      <FriendsList />
    </>
  );
}

export default App;
