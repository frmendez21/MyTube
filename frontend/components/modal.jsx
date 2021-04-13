import React from 'react';
import {closeModal} from '../actions/modal_actions';
import {connect} from 'react-redux';
import LoginFormContainer from './containers/login_form_container';
import SignupFormContainer from './containers/signup_form_container';
import EditVideoFormContainer from './containers/edit_video_form_container';

class Modal extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const {modal} = this.props
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
            case 'edit': 
                component = <EditVideoFormContainer />;
                break;
            default:
                return null;
        }
        if (modal === 'edit') {
            return (
                <div className="edit-modal-background">
                    <div className="modal-child" onClick={e => e.stopPropagation()}>
                        {component}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="modal-background">
                    <div className="modal-child" onClick={e => e.stopPropagation()}>
                        {component}
                    </div>
                </div>
            );

        }
    };
};

const MSTP = state => ({
    modal: state.ui.modal
});

const MDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(MSTP, MDTP)(Modal);