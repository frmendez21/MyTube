import React from 'react';
import {Route, Link} from 'react-router-dom';

import LoginFormContainer from './containers/login_form_container';
import SignupFormContainer from './containers/signup_form_container';
import {AuthRoute} from '../utils/route_util'

class App extends React.Component {

    render() {
        return (
        <div>
            <header>
                <h1>MyTube</h1>
            </header>
            <AuthRoute exact path="/login" component={LoginFormContainer}/>
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </div>
        );
    };
};

export default App;