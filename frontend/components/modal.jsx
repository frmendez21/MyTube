import React from 'react';
import {closeModal} from '../actions/modal_actions';
import {connect} from 'react-redux';
import LoginFormContainer from './containers/login_form_container';
import SignupFormContainer from './containers/signup_form_container';

class Modal extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const {modal, closeModal} = this.props
        if(!modal) {
            return null;
        }
        let component;
        switch (modal) {
            case 'login':
                component = <LoginFormContainer />;
                break;
            case 'signup':
                component = <SignupFormContainer />;
                break;
            default:
                return null;
        }
        return (
            <div className="modal-background" onClick={closeModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    {component}
                </div>
            </div>
        );
    };
};

const MSTP = state => ({
    modal: state.ui.modal
});

const MDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(MSTP, MDTP)(Modal);