import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {fetchVideo} from './actions/video_actions';
import {updateComment} from './actions/comment_actions'
document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
        } else {
            store = configureStore();
    };

    ReactDOM.render(<Root store={store}/>, root);
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.updateComment = updateComment;
    window.fetchVideo = fetchVideo;
});