import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const useStyles = makeStyles({
  component: {
    background: '#ffffff',
    color: 'black',
  },
  container: {
    justifyContent: 'center',
    '& > *': {
      padding: 20,
    },
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.component}>
      <Toolbar className={classes.container}>
        <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
          <p>MyWays</p>
        </Link>
        <p>Join Community</p>
        <p>Practicum Plus</p>
        <p>For Students</p>
        <p>For Employers</p>
        <Link
          to={'/login'}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <Button variant="outlined">login</Button>
        </Link>
        <Link
          to={'/register'}
          style={{ textDecoration: 'none'}}
        >
          <Button 
          style={{
            backgroundColor: "#3c5a5f",
        }}
          variant="contained">
            Register
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
