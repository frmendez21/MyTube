import {connect} from 'react-redux';
import SessionForm from '../session_form';
import {login} from '../../actions/session_actions';
import {closeModal, openModal} from '../../actions/modal_actions';

const MSTP = state => ({
    errors: state.errors.session, 
    formHeader: 'Sign in to continue to MyTube',
    formType: 'login'
});

const MDTP = dispatch => ({
    processForm: user => dispatch(login(user)), 
    closeModal: () => dispatch(closeModal()), 
    signup: () => dispatch(openModal('signup'))
});

export default connect(MSTP, MDTP)(SessionForm);