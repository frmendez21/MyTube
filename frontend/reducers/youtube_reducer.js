import {RECEIVE_POPULAR_VIDEOS} from '../actions/youtube_actions';

export default (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_POPULAR_VIDEOS:
            return action.videos.items;
        default:
           return state;
    };
};