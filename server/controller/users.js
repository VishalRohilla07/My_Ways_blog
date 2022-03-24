const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../schema/user');

//@desc     Get all users
exports.getUsers = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advanceResults);
});

//@desc     Get single user
exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).json({
    success: true,
    data: user,
  });
});


//@desc     Create user
exports.createUser = asyncHandler(async (req, res, next) => {
    const user = await User.create(req.body);
  
    res.status(201).json({
      success: true,
      data: user,
    });
  });


//@desc     Update user
exports.updateUser = asyncHandler(async (req, res, next) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
  
    res.status(200).json({
      success: true,
      data: user,
    });
  });

//@desc     Delete user
exports.deleteUser = asyncHandler(async (req, res, next) => {
    await User.findByIdAndDelete(req.params.id);
  
    res.status(200).json({
      success: true,
      data: {},
    });
  });