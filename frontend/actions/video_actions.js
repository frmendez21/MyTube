import * as videoApiUtil from '../utils/video_api_util';

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const RECEIVE_VIDEO_ERRORS = "RECEIVE_VIDEO_ERRORS";
export const DELETE_VIDEO = "DELETE_VIDEO"
const receiveVideos = videos => ({
    type: RECEIVE_VIDEOS, 
    videos
});

const receiveVideo = video => ({
    type: RECEIVE_VIDEO, 
    video
});

const receiveVideoErrors = err => ({
    type: RECEIVE_VIDEO_ERRORS, 
    err
});

const removeVideo = videoId => ({
    type: DELETE_VIDEO,
    videoId
});

export const fetchVideos = data => dispatch => (
    videoApiUtil.fetchVideos(data)
        .then(videos => dispatch(receiveVideos(videos)))
);

export const fetchVideo = videoId => dispatch => (
    videoApiUtil.fetchVideo(videoId)
        .then(video => dispatch(receiveVideo(video)))
        .fail(err => dispatch(receiveVideoErrors(err)))
);

export const uploadVideo = video => dispatch => (
    videoApiUtil.uploadVideo(video) 
        .then(video => dispatch(receiveVideo(video)))
        .fail(err => dispatch(receiveVideoErrors(err)))
);

export const editVideo = video => dispatch => (
    videoApiUtil.editVideo(video) 
        .then(video => dispatch(receiveVideo(video)))
        .fail(err => dispatch(receiveVideoErrors(err)))
);

export const deleteVideo = videoId => dispatch => (
    videoApiUtil.deleteVideo(videoId)
        .then(videoId => dispatch(removeVideo(videoId)))
);