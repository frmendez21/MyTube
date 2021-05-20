import { RECEIVE_SEARCH } from '../actions/video_actions';

export default(state={}, action) => {
    Object.freeze(state);
    // let nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_SEARCH: 
            return action.results
        default: 
            return state;
    };
};