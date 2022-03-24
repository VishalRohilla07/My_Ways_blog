import { useState } from 'react';
import { createPost } from '../../service/api';
import {useNavigate} from 'react-router-dom'
import {
  Box,
  Button,
  InputBase,
  TextareaAutosize,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container:{
    display: 'flex',
    flexDirection: 'revert',
    width: '100%'
  },
  heading: {
    padding: '0 120px',
    marginBottom: '20px',
    background: '#D3D3D3',
    width: '80%',
    content: 'center',
    fontSize: 30,
  },
  heading2: {
    padding: '0 120px',
    marginBottom: '20px',
    background: '#D3D3D3',
    width: '80%',
    height: '500px',
    content: 'center',
    fontSize: 30,
  },
});
const initialValues = {
  title: '',
  description: '',
  picture: ' ',
  createdDate: new Date(),
};

const DetailView = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  const [post, setPost] = useState(initialValues);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const savePost = async () => {
    await createPost(post);
    navigate('/');
  };

  return (
    <>
      <div className={classes.container} >
        <Button onClick={() => savePost()} variant="contained" color="primary">
        Published
      </Button></div>
      <Box>
        <InputBase
        className={classes.heading}
          onChange={(e) => handleChange(e)}
          name="title"
          placeholder="Your Title Here"
          
        />
        <Box>
          <Typography className={classes.heading}> Image Link</Typography>
        </Box>
        <Box>
          <TextareaAutosize
            onChange={(e) => handleChange(e)}
            name="description"
            rowsMin={5}
            placeholder="Add Content Here.."
            className={classes.heading2}
          />
        </Box>
      </Box>
    </>
  );
};

export default DetailView;
