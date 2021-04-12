import React from 'react';
import AvatarButtonContainer from './containers/avatar_button_container';
import {Link} from 'react-router-dom';
const HeaderMenu = () => (
     <header className="app-head">
        <Link to="/"><img className="logo" src={window.logo}/></Link>
        <Link to="/upload">create</Link>
        <AvatarButtonContainer />
    </header>
);

export default HeaderMenu;