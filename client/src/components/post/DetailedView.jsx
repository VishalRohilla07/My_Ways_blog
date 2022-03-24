import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getPost, deletePost, updatePost } from '../../service/api';
import Comments from './comments/Comments';

const useStyle = makeStyles((theme) => ({
  container: {
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
      margin: 0,
    },
  },
  image: {
    width: '100%',
    height: '50vh',
    objectFit: 'cover',
  },
  icons: {
    float: 'right',
  },
  icon: {
    margin: 5,
    marginTop: 20,
    padding: 5,
    fontSize: 40,
    border: '1px solid #878787',
    borderRadius: 10,
  },
  heading: {
    fontSize: 38,
    fontWeight: 600,
    textAlign: 'center',
    margin: '50px 0 10px 0',
  },
  subheading: {
    color: '#878787',
    display: 'flex',
    margin: '20px 0',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

const DetailedView = () => {
  const classes = useStyle();
  const url =
    'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
  const navigate = useNavigate();
  const params = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPost(params.id);

      console.log(data);
      setPost(data);
    };
    fetchData();
  }, []);

  const deleteBlog = async () => {
    await deletePost(post._id);
    navigate('/');
  };

  return (
    <>
      <Box className={classes.subheading}>
        <Typography>
          <span style={{ fontSize: 40, fontWeight: 600 }}>MyWays Blogs</span>
        </Typography>

        <Typography style={{ marginLeft: 'auto' }}>
          <Link to={`/`}>
            <Button
              variant="contained"
              color="primary"
            >
              Go Back
            </Button>
          </Link>
        </Typography>
      </Box>

      <Box className={classes.container}>
        <Typography className={classes.heading}>{post.title}</Typography>
        <img src={url} alt="post" className={classes.image} />
        <Box className={classes.icons}>
          {
            
            <>
            <Link to={`/update/${post._id}`}>
            <Edit className={classes.icon} color="primary" />
          </Link>
          <Delete
            onClick={() => deleteBlog()}
            className={classes.icon}
            color="error"
          />
            </>
          }
        </Box>

        <Box className={classes.subheading}>
          <Typography>
            <span style={{ fontWeight: 600 }}>MyWays</span>
          </Typography>
          <Typography>
            <span style={{ fontWeight: 600, marginLeft: 10 }}>
              {new Date(post.createdAt).toDateString()}
            </span>
          </Typography>
          <Typography>
            <span style={{ fontWeight: 600, marginLeft: 10 }}>2 min read</span>
          </Typography>

          <Typography style={{ marginLeft: 'auto' }}>
          <Link to ={`/details`}>
          <button className="btn btn-primary"> CREATE </button>
          </Link>
          </Typography>
        </Box>

        <Typography>{post.description}</Typography>
        <Comments post={post} />
      </Box>
    </>
  );
};

export default DetailedView;
