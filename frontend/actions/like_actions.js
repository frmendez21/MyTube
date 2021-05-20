import * as likeApiUtil from '../utils/like_api_util';

export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const RECEIVE_DISLIKE = "RECEIVE_DISLIKE";
export const REMOVE_LIKE = "REMOVE_LIKE"
const receiveLikes = likes => ({
    type: RECEIVE_LIKES, 
    likes
});

const receiveLike = like => ({
    type: RECEIVE_LIKE, 
    like
});

const receiveDislike = dislike => ({
    type: RECEIVE_DISLIKE, 
    dislike
});

const removeLike = like => ({
    type: REMOVE_LIKE, 
    like
});

export const fetchLikes = videoId => dispatch => (
    likeApiUtil.fetchLikes(videoId)
        .then(likes => dispatch(receiveLikes(likes)))
);

export const createLike = like => dispatch => (
    likeApiUtil.createLike(like)
        .then(like => dispatch(receiveLike(like)))
);

export const disLike = like => dispatch => (
    likeApiUtil.updateLike(like)
        .then(dislike => dispatch(receiveDislike(dislike)))
);

export const reLike = dislike => dispatch => (
    likeApiUtil.updateLike(dislike)
        .then(like => dispatch(receiveLike(like)))
);

export const deleteLike = like => dispatch => (
    likeApiUtil.deleteLike(like)
        .then(like => dispatch(removeLike(like)))
);