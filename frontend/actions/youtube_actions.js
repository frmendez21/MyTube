import * as youtubeApiUtil from '../utils/youtube_api_util';

export const RECEIVE_POPULAR_VIDEOS = "RECEIVE_POPULAR_VIDEOS";

const receivePopularVideos = videos => ({
    type: RECEIVE_POPULAR_VIDEOS, 
    videos
});

export const fetchPopularVideos = () =>  dispatch => (
    youtubeApiUtil.fetchPopularVideos()
        .then(res => dispatch(receivePopularVideos(res)))
);
