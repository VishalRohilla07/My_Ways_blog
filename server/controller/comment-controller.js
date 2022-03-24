const asyncHandler = require('../middleware/async');
const Comment = require('../schema/comment');


exports.newComment = asyncHandler( async (request, response) => {
    try {
        const comment = await new Comment(request.body);
        comment.save();

        response.status(200).json('Comment saved successfully');
    } catch (error) {
        response.status(500).json(error);
    }
});


exports.getComments = asyncHandler(async (request, response) => {
    try {
        const comments = await Comment.find({ postId: request.params.id });
        
        response.status(200).json(comments);
    } catch (error) {
        response.status(500).json(error)
    }
});

exports.deleteComment =asyncHandler(async (request, response) => {
    try {
        console.log(request.params.id);
        const comment = await Comment.findById(request.params.id);
        console.log(comment);
        await comment.delete()

        response.status(200).json('comment deleted successfully');
    } catch (error) {
        response.status(500).json(error)
    }
});