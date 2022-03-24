import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Post from './Post';
import { getAllPosts } from '../../service/api';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let data = await getAllPosts();
      setPosts(data);
    };
    fetchData();
  }, []);
  return posts.map((post) => (
    <Grid item lg={4} sm={4} xs={12}>
      {/* <Link to={'/details'} style={{ textDecoration:'none', color:'inherit'}}> */}
      <Link
        to={`/detailed/${post._id}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <Post post={post} />
      </Link>
    </Grid>
  ));
};

export default Posts;
