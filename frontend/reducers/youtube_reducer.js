import {RECEIVE_POPULAR_VIDEOS, RECEIVE_YOUTUBE_VIDEO} from '../actions/youtube_actions';

export default (state={}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_POPULAR_VIDEOS:
            return action.videos.items;
        case RECEIVE_YOUTUBE_VIDEO: 
             nextState[action.video.items[0].id] = action.video.items[0];
            return nextState;
        default:
           return state;
    };
};