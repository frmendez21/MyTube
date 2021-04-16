import * as commentApiUtil from '../utils/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS, 
    comments
});

const recieveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

export const fetchComments = videoId => dispatch => (
    commentApiUtil.fetchComments(videoId)
        .then(comments => dispatch(receiveComments(comments)))
);

export const createComment = comment => dispatch => (
    commentApiUtil.createComment(comment)
        .then(comment => dispatch(recieveComment(comment)))
);