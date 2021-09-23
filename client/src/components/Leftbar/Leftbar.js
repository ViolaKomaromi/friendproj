import { Container, makeStyles,Typography } from '@material-ui/core'
import { Contacts, EmojiEmotions, ExitToApp, FilterList, Home, Info, Person, Settings } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    container:{
        backgroundColor: "#f9896a",
        position: "sticky",
        top: 0,
        color: "white",
        height: '100vh',
        paddingTop: theme.spacing(10),
        [theme.breakpoints.up("sm")]: {
            backgroundColor: "white",
            color: "#555",
            border: "1px solid #ece7e7"
        },
    },
    item: {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(3),
            cursor: "pointer",
        },
    },
    icon: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.down("sm")]: {
            fontSize: "18px",
        }
    },
    text: {
        fontWeight: 500,
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
}));

const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item} >
          <Home className={classes.icon}/>
          <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
          <Person className={classes.icon}/>
          <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.item}>
          <Info className={classes.icon}/>
          <Typography className={classes.text}>About</Typography>
      </div>
      <div className={classes.item}>
          <Contacts className={classes.icon}/>
          <Typography className={classes.text}>Contact</Typography>
      </div>
      <div className={classes.item}>
          <FilterList className={classes.icon}/>
          <Typography className={classes.text}>FilterList</Typography>
      </div>
      <div className={classes.item}>
          <EmojiEmotions className={classes.icon}/>
          <Typography className={classes.text}>Jokes</Typography>
      </div>
      <div className={classes.item}>
          <Settings className={classes.icon}/>
          <Typography className={classes.text}>Profile Settings</Typography>
      </div>
      <div className={classes.item}>
          <ExitToApp className={classes.icon}/>
          <Typography className={classes.text}>Logout</Typography>
      </div>
    </Container>
  );
}

export default Leftbar;