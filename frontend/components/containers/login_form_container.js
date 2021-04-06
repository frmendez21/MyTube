import {connect} from 'react-redux';
import SessionForm from '../session_form';
import {login} from '../../actions/session_actions';


const MSTP = state => ({
    errors: state.errors.session, 
    formHeader: 'Sign in to continue to MyTube',
    formType: 'signin'
});

const MDTP = dispatch => ({
    processForm: user => dispatch(login(user))
});

export default connect(MSTP, MDTP)(SessionForm);