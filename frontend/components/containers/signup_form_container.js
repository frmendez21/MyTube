import {connect} from 'react-redux';
import React from 'react';
import SessionForm from '../session_form';
import {signup} from '../../actions/session_actions';


const MSTP = state => ({
    errors: state.errors.session, 
    formHeader: 'Create account to continue to MyTube',
    formType: 'signup'
});

const MDTP = dispatch => ({
    processForm: user => dispatch(signup(user))
});

export default connect(MSTP, MDTP)(SessionForm);