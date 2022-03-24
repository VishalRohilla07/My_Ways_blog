const express = require('express');
const {
    createPost,
    getAllPosts,
    getPost,
    updatePost,
    deletePost
  } = require('../controller/post-controller');
const { newComment, getComments, deleteComment }= require('../controller/comment-controller.js');
const router = express.Router();

router.post('/create',createPost);
router.get('/posts',getAllPosts);
router.get('/post/:id',getPost);
router.post('/update/:id',updatePost);
router.delete('/delete/:id',deletePost);

router.post('/comment/new', newComment);
router.get('/comments/:id', getComments);
router.delete('/comment/delete/:id', deleteComment);

module.exports = router;