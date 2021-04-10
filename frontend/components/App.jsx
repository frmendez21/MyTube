import React from 'react';


import {Route, Switch} from 'react-router-dom';
import {AuthRoute} from '../utils/route_util';

import Modal from './modal';
import NotFound from './not_found';
import HeaderMenu from './header-menu';
import VideoIndexContainer from './containers/video_index_container';
import VideoShowContainer from './containers/video_show_container';
class App extends React.Component {

    render() {
        return (
        <div>
            <Modal />
            <HeaderMenu />
            <Switch>
                <Route exact path='/' component={VideoIndexContainer} />
                <AuthRoute exact path='/signup' component={HeaderMenu} />
                <AuthRoute exact path='/login' component={HeaderMenu} />
                <Route exact path='/videos/:id' component={VideoShowContainer} />
                <Route component={NotFound}/>
            </Switch>
            
        </div>
        );
    };
};

export default App;