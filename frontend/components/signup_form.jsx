import React from 'react';
import { Link} from 'react-router-dom';

class SignupForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFail = this.handleFail.bind(this);
        this.switchForms = this.switchForms.bind(this);
    };

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(this.props.closeModal)
            .fail(() => this.handleFail())
    };

     handleFail() {
        this.setState({
            username: "",
            email: "",
            password: ""
        });
        
    };

    update(key) {
        return e => this.setState({[key]: e.currentTarget.value});
    };

    switchForms() {
        this.props.clearErrors()
        this.props.login();
    }

    render() {
        const {username, email, password} = this.state;
        const {formHeader, formType, login} = this.props;
        const link = <div className="signup-switch-form-btn" onClick={this.switchForms}>Sign in</div>
        const errors = this.props.errors.length > 0 ? this.props.errors[0] : "";
        return (
            <div>
                <form className="session-form" onSubmit={this.handleSubmit}>
                    <h3 className="form-header">
                        <Link to="/"><img className="form-logo" src={window.logo} onClick={() => this.props.closeModal()}/></Link>
                        <strong id="form-type">{formType}</strong>
                         <br/>
                        <p>{formHeader}</p>
                    </h3>
                    <div className="signup-email-input">
                        <input type="text" value={email} onChange={this.update('email')} placeholder='Email'/>
                    </div>
                     <div className="signup-username-input">
                        <input type="text" value={username} onChange={this.update('username')} placeholder='Username'/>
                     </div>
                      <div className="signup-password-input">
                        <input type="password" value={password} onChange={this.update('password')} placeholder="Password"/>
                        <p id="login-errors">{errors}</p>
                      </div>
                       {link}
                    <button className="signup-next-btn" type="submit">Next</button>
                </form>
               
            </div>
        )
    };
};

export default SignupForm;