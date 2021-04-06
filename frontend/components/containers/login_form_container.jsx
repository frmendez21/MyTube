import {connect} from 'react-redux';
import React from 'react';
import SessionForm from '../session_form';
import {login} from '../../actions/session_actions';
import {openModal, closeModal} from '../../actions/modal_actions'

const MSTP = state => ({
    errors: state.errors.session, 
    formHeader: 'Sign in to continue to MyTube',
    formType: 'signin'
});

const MDTP = dispatch => ({
    processForm: user => dispatch(login(user)), 
    otherForm: (
        <button onClick={() => dispatch(openModal('signup'))}>Signup</button>
    ), 
    closeModal: () => dispatch(closeModal())
});

export default connect(MSTP, MDTP)(SessionForm);