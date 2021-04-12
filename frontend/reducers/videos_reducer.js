import {RECEIVE_VIDEO, RECEIVE_VIDEOS, RECEIVE_VIDEO_ERRORS} from '../actions/video_actions';

export default (state={}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
 
    switch (action.type) {
        case RECEIVE_VIDEOS:
            return action.videos;
        case RECEIVE_VIDEO: 
            nextState[action.video.id] = action.video;
            return nextState;
        case RECEIVE_VIDEO_ERRORS: 
            return [];
        default:
            return state;
    };
};