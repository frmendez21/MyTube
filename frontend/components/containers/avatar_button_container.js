import {connect} from 'react-redux';
import AvatarButton from '../avatar_button';
import {logout} from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions'
import React from 'react';

const MSTP = state => ({
    currentUser: state.entities.users[state.session.id]
});

const MDTP = dispatch => ({
    logout: (<button onClick={() => dispatch(logout())}>Logout</button>),
    signUp: (
        <button onClick={() => dispatch(openModal('signup'))}>Signup</button>
    ),
    signIn: (
        <button onClick={() => dispatch(openModal('login'))}>Signin</button>
    )
});

export default connect(MSTP, MDTP)(AvatarButton);