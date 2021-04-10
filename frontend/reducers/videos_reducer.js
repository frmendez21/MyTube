import {RECEIVE_VIDEO, RECEIVE_VIDEOS} from '../actions/video_actions';

export default (state={}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
 
    switch (action.type) {
        case RECEIVE_VIDEOS:
            return action.videos;
        case RECEIVE_VIDEO: 
            nextState[action.video.id] = action.video;
            return nextState;
        default:
            return state;
    };
};