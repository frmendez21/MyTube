import React from 'react';
import AvatarWrapperContainer from './containers/avatar_wrapper_container';
import SearchBarContainer from './containers/search_bar_container';
// import LeftNavContainer from './containers/left_nav_container';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const HeaderMenu = ({loggedIn}) => {
    const createLink = loggedIn ? <Link to="/upload"><i className="fas fa-video"></i></Link> : null;

    return (
        <div className="app-head-container">
            <div className="app-head">
                <Link to="/"><img className="logo" src={window.logo}/></Link>
                {/* <LeftNavContainer /> */}
                <SearchBarContainer />
                <div className="header-right-nav">
                    <i className="fas fa-bell"></i>
                    {createLink}
                    <AvatarWrapperContainer />
                </div>
            </div>
        </div>
    );
};

const MSTP = state => (
  {loggedIn: Boolean(state.session.id)}
);

export default connect(MSTP, null)(HeaderMenu);