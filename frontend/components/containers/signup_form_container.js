import {connect} from 'react-redux';
import SessionForm from '../session_form';
import {signup} from '../../actions/session_actions';
import {closeModal, openModal} from '../../actions/modal_actions';

const MSTP = state => ({
    errors: state.errors.session, 
    formHeader: 'Create account to continue to MyTube',
    formType: 'signup'
});

const MDTP = dispatch => ({
    processForm: user => dispatch(signup(user)), 
    closeModal: () => dispatch(closeModal()), 
    login: () => dispatch(openModal('login'))
});

export default connect(MSTP, MDTP)(SessionForm);