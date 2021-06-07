import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import videosReducer from './videos_reducer';
import commentsReducer from './comments_reducer';
import likesReducer from './likes_reducer';
import searchReducer from './search_reducer';
import youtubeReducer from './youtube_reducer';
export default combineReducers({
    users: usersReducer, 
    videos: videosReducer,
    comments: commentsReducer,
    likes: likesReducer, 
    search: searchReducer, 
    youtubeVideos: youtubeReducer
});