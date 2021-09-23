import { Avatar, Container, Divider, ImageList, ImageListItem, ImageListItemBar, Link, makeStyles, Typography } from '@material-ui/core'
import { AvatarGroup } from '@material-ui/lab';



const useStyles = makeStyles((theme) => ({
    container:{
        paddingTop: theme.spacing(10),
    },
    title: {
        fontSize: 16,
        fontWeight: 500,
        color: " #555",
    },
    link: {
        marginRight: theme.spacing(2),
        color: " #555",
        fontSize: 16,
    }
}));

const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
        <Typography className={classes.title} gutterBotton>Online Friends</Typography>
        <AvatarGroup max={6} style={{marginBottom: "30px"}}>
            <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/3777952/pexels-photo-3777952.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=126" />
            <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            <Avatar alt="Agnes Walker" src="http://material-ui.com/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="http://material-ui.com/static/images/avatar/5.jpg" />
            <Avatar alt="Cindy Baker" src="http://material-ui.com/static/images/avatar/6.jpg" />
            <Avatar alt="Agnes Walker" src="http://material-ui.com/static/images/avatar/7.jpg" />
            <Avatar alt="Trevor Henderson" src="http://material-ui.com/static/images/avatar/8.jpg" />
            <Avatar alt="Trevor Henderson" src="http://material-ui.com/static/images/avatar/9.jpg" />
            <Avatar alt="Trevor Henderson" src="http://material-ui.com/static/images/avatar/10.jpg" />
            <Avatar alt="Trevor Henderson" src="http://material-ui.com/static/images/avatar/11.jpg" />
            <Avatar alt="Trevor Henderson" src="http://material-ui.com/static/images/avatar/12.jpg" />
            <Avatar alt="Trevor Henderson" src="http://material-ui.com/static/images/avatar/13.jpg" />
            <Avatar alt="Trevor Henderson" src="http://material-ui.com/static/images/avatar/14.jpg" />
            <Avatar alt="Trevor Henderson" src="http://material-ui.com/static/images/avatar/15.jpg" />
            <Avatar alt="Trevor Henderson" src="http://material-ui.com/static/images/avatar/16.jpg" />
            <Avatar alt="Trevor Henderson" src="http://material-ui.com/static/images/avatar/17.jpg" />
        </AvatarGroup>
        <Typography className={classes.title} gutterBotton>Friends List</Typography>
        <ImageList rowHeight={100}  className={classes.imagelist} cols={3}>
        {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
    <Typography className={classes.title} gutterBotton style= {{paddingTop: "30px",}}>Categories</Typography>
    <Link href="#"className={classes.link} variant="body2">Sports</Link>
    <Link href="#"className={classes.link} variant="body2">Movies</Link>
    <Link href="#"className={classes.link} variant="body2">Food</Link>
    <Divider flexItem style={{ marginBootom: 10}} />
    <Link href="#"className={classes.link} variant="body2">Movies</Link>
    <Link href="#"className={classes.link} variant="body2">Trust Friend</Link>
   
    </Container>
  );
};



const itemData = [
  {
    img: 'https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    img: 'https://images.pexels.com/photos/8993561/pexels-photo-8993561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.pexels.com/photos/7907687/pexels-photo-7907687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.pexels.com/photos/9386471/pexels-photo-9386471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.pexels.com/photos/5641957/pexels-photo-5641957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    img: 'https://images.pexels.com/photos/2568413/pexels-photo-2568413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.pexels.com/photos/3207442/pexels-photo-3207442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.pexels.com/photos/9602116/pexels-photo-9602116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.pexels.com/photos/3777952/pexels-photo-3777952.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=126',
    title: 'Bike',
    author: '@southside_customs',
  },
];


export default Rightbar;