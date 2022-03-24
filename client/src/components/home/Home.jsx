import {Box,Grid, makeStyles } from '@material-ui/core';
import Banner from './Banner';
import Posts from './Posts';

const useStyle = makeStyles(theme => ({
  container: {
      margin: '50px 100px',
      [theme.breakpoints.down('md')]: {
          margin: 0
      },
  },}));

const Home = () => {
  const classes = useStyle();
  return<>
  <Banner />

<Box className={classes.container}>
  <Grid item container lg={12} xs={12} sm={10}>
  <Posts />
  </Grid>
  </Box>
  
  </> ;
};

export default Home;
