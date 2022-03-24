const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Post = require('../schema/post-schema');

//@desc     Create post
exports.createPost = asyncHandler(async (req, res, next) => {
  const post = await Post.create(req.body);
  post.save();

  res.status(201).json({
    success: true,
    data: post,
  });
});

//@desc     Get all posts
exports.getAllPosts = asyncHandler(async (req, res, next) => {
  let posts = await Post.find({});
  res.status(200).json(posts);
});

//@desc     Get post
exports.getPost = asyncHandler(async (req, res, next) => {
  let post = await Post.findById(req.params.id);
  res.status(201).json(post);
});

//@desc     Update post
exports.updatePost = asyncHandler(async (req, res, next) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: post,
  });
});

//@desc     Delete post
exports.deletePost = asyncHandler(async (req, res, next) => {
  await Post.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    data: {},
  });
});
