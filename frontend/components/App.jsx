import React from 'react';


import {Route, Switch} from 'react-router-dom';
import {AuthRoute} from '../utils/route_util';

import Modal from './modal';
import NotFound from './not_found';
import HeaderMenu from './header-menu';
import VideoIndexContainer from './containers/video_index_container';
import VideoShowContainer from './containers/video_show_container';
import UploadVideoFormContainer from './containers/upload_video_form_container';

class App extends React.Component {
    render() {
        return (
        <div>
            <Modal />
            <HeaderMenu />
            <Switch>
                <Route exact path='/' component={VideoIndexContainer} />
                <Route exact path='/videos/:id' component={VideoShowContainer} />
                <AuthRoute exact path='/upload' component= {UploadVideoFormContainer} />
                <Route component={NotFound}/>
            </Switch>
            
        </div>
        );
    };
};

export default App;