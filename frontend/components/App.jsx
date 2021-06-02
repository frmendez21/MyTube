import React from 'react';


import {Route, Switch} from 'react-router-dom';
import {AuthRoute} from '../utils/route_util';

import Modal from './modal';
import NotFound from './not_found';
import HeaderMenu from './header-menu';
import VideoIndexContainer from './containers/video_index_container';
import VideoShowContainer from './containers/video_show_container';
import UploadVideoFormContainer from './containers/upload_video_form_container';
import UserShowContainer from './containers/user_show_container';
import SearchResultsContainer from './containers/search_results_container';

class App extends React.Component {
    render() {
        return (
        <div className="main-container">
            <Modal />
            <Route path = '/' component={HeaderMenu} />
            <Switch>
                <Route exact path='/' component={VideoIndexContainer} />
                <Route exact path='/videos/:id' component={VideoShowContainer} />
                <Route exact path='/search/results' component={SearchResultsContainer}/>
                <AuthRoute exact path ='/users/:id' component={UserShowContainer} />
                <AuthRoute exact path='/upload' component= {UploadVideoFormContainer} />
                <AuthRoute exact path='/users/videos/edit/:id' component={Modal} />
                <AuthRoute exact path='/users/videos/delete/:id' component={Modal} />
                <Route component={NotFound}/>
            </Switch>
            
        </div>
        );
    };
};

export default App;