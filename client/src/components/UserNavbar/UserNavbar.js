import React, { useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
// import MoreIcon from '@material-ui/icons/MoreVert';
import { useHistory, Link } from 'react-router-dom';
import { createTheme} from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import { alpha, AppBar, Avatar, InputBase, Toolbar, Typography, } from '@material-ui/core'
import { Cancel, Search } from '@material-ui/icons';


// import Profile from "../Profile/Profile"

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#f9896a',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffa000',
      main: '#f9896a',
      dark: '#ff9800',
      contrastText: '#000',
    },
  },
});

const useStyles = makeStyles(() => ({
  grow: {
    flexGrow: 1,
  },
  // AppBar:{
  //   marginTop: "100px"
  //   // backgroundColor: theme.palette.secondary.main,
  // },
  menuButton: {
    marginRight: theme.spacing(5),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
 
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  appBar:{},
  //spacing out toolbar items
  toolbar:{
      display: 'flex',
      justifyContent: 'space-between',
  },
  //making the logo dissappear in breakpoints
  logoLg:{
      display: "none",
      [theme.breakpoints.up("sm")]: {
          display: "block",
      },
  },
  logoSm:{
      display: "block",
      [theme.breakpoints.up("sm")]: {
          display: "none",
      },
  },
  search:{
      display: "flex",
      alignItems: "center",
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      borderRadius: theme.shape.borderRadius,
      width: "50%",
      [theme.breakpoints.down("sm")]: {
          display: (props) => (props.open ? "flex" : "none"),
          width: "70%",
      },
  },
  input:{
      color: "white",
      marginLeft: theme.spacing(1),
  },
  cancel:{
      [theme.breakpoints.up("sm")]: {
          display: "none",
      },
  },
  searchButton:{
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
          display: "none",
      }, 
  },
  icons: {
     
     alignItems: "center",
     display: (props) => (props.open ? "none" : "flex"),
  },
  badge: {
      marginRight: theme.spacing(2),
  },
}));

export default function UserNavbar() {
  const history = useHistory ();
  // {/* setting the state of the search icon dissappear using break points =>  line 32 */}
  const [open, setOpen] = useState (false) 
  // const classes = useStyles({ open });
// Logout 
  // const onLogout = () => {
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("userId");
  //   window.location.replace("/");
  // };





  const classes = useStyles({ open });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  // const handleMobileMenuOpen = (event) => {
  //   setMobileMoreAnchorEl(event.currentTarget);
  // };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Container>
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem  onClick = {() => {
              history.push("/profile")
            }}>Profile</MenuItem>
      <MenuItem  onClick = {() => {
              history.push("/contactlist")
            }}>Friends List</MenuItem>
    
      {/* <MenuItem  onClick={onLogout} >Logout</MenuItem> */}
    </Menu>
    </Container>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Container>
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick = {() => {
              history.push("/inbox")
            }} >
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary" >
            <MailIcon  />
          </Badge>
        </IconButton>
        {/* <p>Messages</p> */}
        <Link className=" active" to="/inbox" >Messages</Link>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Link className=" active" to="/notifications" >Notifications</Link>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Link className="nav-link active" to="/profile" >Profile</Link>
        <Link className="nav-link active" to="/logout" >Logout</Link>
      </MenuItem>
    </Menu>
    </Container>
  );

  return (
    <Container>
      <Grid>
    <div className={classes.grow}>
      <AppBar className={classes.AppBar} position="fixed" style={{ background: 'linear-gradient(to right bottom, #f9896a, #f97a5d)'}}>
        <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
              Friends Ja
            </Typography>
            <Typography variant="h6" className={classes.logoSm}>
              FRIENDS
            </Typography>
            <div className={classes.search}>
                <Search />
                <InputBase  placeholder="Search" className={classes.input}/>
                <Cancel  className={classes.cancel} 
                onClick={() => setOpen(false)} />
            </div>
           <div className={classes.icons}>
               {/* making the search icon dissappear using break points =>  line 32*/}
            <Search  className={classes.searchButton} 
            onClick={() => setOpen(true)}/>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={10} color="secondary">
                <MailIcon onClick = {() => {
              history.push("/inbox")
            }} />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon onClick = {() => {
              history.push("/notifications")
            }}/>
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
               <Avatar alt="Avatar" src="https://3.bp.blogspot.com/-hInDMDTqCtk/WtgJ-WuI05I/AAAAAAAAF9A/rhJ-tAQCeBc3jQqqdAjVSqTwh6M9KCaAACEwYBhgL/s1600/Fawk%2BMask%2BProfile%2BPicture.png" />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            
          </div>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
    </Grid>
    </Container>
  );
}
