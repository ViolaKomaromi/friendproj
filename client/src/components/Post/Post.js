import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles,Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    card:{
        marginBottom: theme.spacing(5),
    },
    media: {
        height: 250,
        [theme.breakpoints.down("sm")]: {
            height: 150,

        }
    },
    
}));

const Post = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card} >
       <CardActionArea>
           <CardMedia  className={classes.media} image="https://images.pexels.com/photos/7149181/pexels-photo-7149181.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" title="My Post"/>
           <CardContent>
            <Typography gutterBottom variant="h5" >My First Post</Typography>
            <Typography variant="body2" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam excepturi voluptate sit assumenda earum numquam exercitationem sapiente error, illum, ipsa dolor, consequuntur voluptatum deserunt iusto impedit eius. Iusto, repudiandae!Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam excepturi voluptate sit assumenda earum numquam exercitationem sapiente error, illum, ipsa dolor, consequuntur voluptatum deserunt iusto impedit eius. Iusto, repudiandae!</Typography>
           </CardContent>
       </CardActionArea>
       <CardActions>
           <Button size = "small" color="primary" >Share</Button>
           <Button size = "small" color="primary" >Learn</Button>
       </CardActions>
    </Card>
  );
}

export default Post;