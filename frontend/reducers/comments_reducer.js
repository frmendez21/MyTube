import {RECEIVE_COMMENT, RECEIVE_COMMENTS} from '../actions/comment_actions';

export default (state={}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_COMMENTS:
            return action.comments;
        case RECEIVE_COMMENT: 
            return nextState[action.comment.id] = action.comment
        default:
            return state;
    };
};