import { alpha, AppBar, Avatar, Badge, InputBase, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { Cancel, Mail, Notifications, Search } from '@material-ui/icons';
import React, { useState} from "react";
import { useHistory, Link } from 'react-router-dom';


import { createTheme} from '@material-ui/core/styles';

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

const Navbar = () => {
  const history = useHistory ();
    // {/* setting the state of the search icon dissappear using break points =>  line 32 */}
    const [open, setOpen] = useState (false) 
  const classes = useStyles({ open });
  return (
    <AppBar position="sticky" style={{ background: 'linear-gradient(to right bottom, #f9896a, #f97a5d)'}}>
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
            <Badge badgeContent={6}  color="secondary" className={classes.badge} >
            <Mail/>
            </Badge> 
            <Badge badgeContent={12}  color="secondary" className={classes.badge} >
            <Notifications oonClick = {() => {
              history.push("/notifications")
            }}/>
            </Badge>
            <Link className=" active" to="/notifications" >Notifications</Link> 
            <Avatar alt="Avatar" src="https://3.bp.blogspot.com/-hInDMDTqCtk/WtgJ-WuI05I/AAAAAAAAF9A/rhJ-tAQCeBc3jQqqdAjVSqTwh6M9KCaAACEwYBhgL/s1600/Fawk%2BMask%2BProfile%2BPicture.png" />
           </div>
        </Toolbar>
    </AppBar>
  );
}

export default Navbar;