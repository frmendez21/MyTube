import React from 'react';
import {Route} from 'react-router-dom';

import AvatarButtonContainer from './containers/avatar_button_container';
import ModalContainer from './containers/modal_container';


export default () => (
    <div>
       
        <header>
            <h1>MyTube</h1>
            <Route path="/" component={AvatarButtonContainer}/>
        </header>
         <ModalContainer />
    </div>
)

