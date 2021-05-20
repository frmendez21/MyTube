import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import videosReducer from './videos_reducer';
import commentsReducer from './comments_reducer';
import likesReducer from './likes_reducer';

export default combineReducers({
    users: usersReducer, 
    videos: videosReducer,
    comments: commentsReducer,
    likes: likesReducer
});