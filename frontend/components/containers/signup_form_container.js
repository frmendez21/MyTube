import {connect} from 'react-redux';
import SignupForm from '../signup_form';
import {signup} from '../../actions/session_actions';
import {closeModal, openModal} from '../../actions/modal_actions';

const MSTP = state => ({
    errors: state.errors.session, 
    formHeader: 'to continue to MyTube',
    formType: 'Create your Account'
});

const MDTP = dispatch => ({
    processForm: user => dispatch(signup(user)), 
    closeModal: () => dispatch(closeModal()), 
    login: () => dispatch(openModal('login'))
});

export default connect(MSTP, MDTP)(SignupForm);