import { Container, makeStyles } from "@material-ui/core";
import Post from "../Post/Post";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Feeds = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Post title="Choose the perfect design" img="https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
      <Post title="Simply Recipes Less Stress. More Joy" img="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
      <Post title="What To Do In London" img="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
      <Post title="Recipes That Will Make You Crave More" img="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
      <Post title="Shortcut Travel Guide to Manhattan" img="https://images.pexels.com/photos/3777952/pexels-photo-3777952.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
      <Post title="Killer Actions to Boost Your Self-Confidence" img="https://images.pexels.com/photos/7833646/pexels-photo-7833646.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
    </Container>
  );
};



export default Feeds;