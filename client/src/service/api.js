import axios from 'axios';

const URL = 'http://localhost:5000';


export const uploadFile = async (post) => {
  console.log(post);
  try {
      return await axios.post(`${URL}/file/upload`, post);
  } catch (error) {
      console.log('Error while calling uploadFile API ', error);
  }
};

export const createPost = async (post) => {
  try {
    return await axios.post(`${URL}/create`, post);
  } catch (error) {
    console.log('Error while creating post api', error);
  }
};

export const getAllPosts = async () => {
  try {
    let response =  await axios.get(`${URL}/posts`);
    return response.data;
  } catch (error) {
    console.log('Error while getting all post api', error);
  }
};
export const getPost = async (id) => {
  try {
    let response =  await axios.get(`${URL}/post/${id}`);
    return response.data;
  } catch (error) {
    console.log('Error while getting post api', error);
  }
};

export const updatePost = async (id,post) => {
  try {
    return await axios.post(`${URL}/update/${id}`, post);
  } catch (error) {
    console.log('Error while updating post api', error);
  }
};

export const deletePost = async (id) => {
  try {
    return await axios.delete(`${URL}/delete/${id}`);
  } catch (error) {
    console.log('Error while deleting post api', error);
  }
};

export const newComment = async (comment) => {
  try {
      return await axios.post(`${URL}/comment/new/`, comment);
  } catch(error) {
      console.log('Error while calling newComment API ', error)
  } 
}

export const getComments = async (id) => {
  try {
      let response = await axios.get(`${URL}/comments/${id}`);
      return response.data;
  } catch(error) {
      console.log('Error while calling getComments API ', error)
  } 
}

export const deleteComment = async (id) => {
  try {
      return await axios.delete(`${URL}/comment/delete/${id}`);
  } catch(error) {
      console.log('Error while calling deleteComments API ', error)
  } 
}

export const register = async (user) => {
  try {
    console.log(user)
    return await axios.post(`${URL}/register`,user);
  } catch (error) {
    console.log('Error while creating post api', error);
  }
};
export const login = async (user) => {
  try {
    return await axios.get(`${URL}/login`,user);
  } catch (error) {
    console.log('Error while creating post api', error);
  }
};