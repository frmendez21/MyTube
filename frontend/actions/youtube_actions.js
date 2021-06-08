import * as youtubeApiUtil from '../utils/youtube_api_util';

export const RECEIVE_POPULAR_VIDEOS = "RECEIVE_POPULAR_VIDEOS";
export const RECEIVE_YOUTUBE_VIDEO = "RECEIVE_YOUTUBE_VIDEO";

const receivePopularVideos = videos => ({
    type: RECEIVE_POPULAR_VIDEOS, 
    videos
});

const receiveYoutubeVideo = video => ({
    type: RECEIVE_YOUTUBE_VIDEO, 
    video
});

export const fetchPopularVideos = () =>  dispatch => (
    youtubeApiUtil.fetchPopularVideos()
        .then(res => dispatch(receivePopularVideos(res)))
);

export const fetchYoutubeVideo = videoId => dispatch => (
    youtubeApiUtil.fetchVideo(videoId)
        .then(res => dispatch(receiveYoutubeVideo(res)))
);