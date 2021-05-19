import * as commentApiUtil from '../utils/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS, 
    comments
});

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

const removeComment = comment => ({
    type: REMOVE_COMMENT, 
    comment
});

export const fetchComments = videoId => dispatch => (
    commentApiUtil.fetchComments(videoId)
        .then(comments => dispatch(receiveComments(comments)))
);

export const createComment = comment => dispatch => (
    commentApiUtil.createComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
);

export const deleteComment = comment => dispatch => (
    commentApiUtil.deleteComment(comment)
        .then(comment => dispatch(removeComment(comment)))
);

export const updateComment = comment => dispatch => (
    commentApiUtil.updateComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
);