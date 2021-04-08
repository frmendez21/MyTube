import React from 'react';


import Modal from './modal';
import {Route, Switch} from 'react-router-dom';
import NotFound from './not_found';
import HeaderMenu from './header-menu';
import {AuthRoute} from '../utils/route_util';
class App extends React.Component {

    render() {
        return (
        <div>
            <Modal />
            <Switch>
                <Route exact path='/' component={HeaderMenu} />
                <AuthRoute exact path='/signup' component={HeaderMenu} />
                <AuthRoute exact path='/login' component={HeaderMenu} />
                <Route component={NotFound}/>
            </Switch>
        </div>
        );
    };
};

export default App;