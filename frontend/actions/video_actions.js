import * as videoApiUtil from '../utils/video_api_util';

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";

const receiveVideos = videos => ({
    type: RECEIVE_VIDEOS, 
    videos
});

const receiveVideo = videoId => ({
    type: RECEIVE_VIDEO, 
    videoId
});

export const fetchVideos = () => dispatch => (
    videoApiUtil.fetchVideos()
        .then(videos => dispatch(receiveVideos(videos)))
);

export const fetchVideo = video => dispatch => (
    videoApiUtil.fetchVideo(video)
        .then(video => dispatch(receiveVideo(video.id)))
);

export const uploadVideo = video => dispatch => (
    videoApiUtil.uploadVideo(video) 
        .then(video => dispatch(receiveVideo(video)))
);
