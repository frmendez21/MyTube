import React from 'react';
import {Link} from 'react-router-dom';

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
        this.showUserNameInput = this.showUserNameInput.bind(this);
        this.showPasswordInput = this.showPasswordInput.bind(this);
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
        this.showEmailInput();
    };

    update(key) {
        return e => this.setState({[key]: e.currentTarget.value});
    };

    demoLogin() {
        const user = { 
            username: 'demo-user', 
            email: 'demo@myTube.com',
            password: 'demo123'
        }
        this.props.processForm(user)
            .then(this.props.closeModal)
    }

    showUserNameInput(e) {
        e.preventDefault();
        let $email = $(".email-input");
        let $username = $(".username-input");
        $email.hide();
        $username.show();
    };

    showPasswordInput(e) {
        e.preventDefault();
        let $username = $(".username-input");
        let $password = $(".password-input");
        $username.hide();
        $password.show();
    }
    showEmailInput() {
        let $email = $(".email-input");
        let $input = $email.find("input")
        let $password = $(".password-input");
        $password.hide();
        $input.css("border-color", "red")
        $email.show();
    }

    switchForms() {
        this.props.clearErrors()
        this.props.signup();
    }
    render() {
        const {username, email, password} = this.state;
        const {formHeader, formType, signup, login} = this.props;
        const link = <div className="switch-form-btn" onClick={this.switchForms}>Create account</div>;
        const errors = this.props.errors.length > 0 ? this.props.errors[0] : "";
        return (
            <div>
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <h3 className={'form-header'}>
                          <Link to="/"><img className="form-logo" src={window.logo} onClick={() => this.props.closeModal()}/></Link>
                        <strong id="form-type">{formType}</strong>
                        <br/>
                        <p>{formHeader}</p>
                    </h3>
                    <div className="email-input">
                        <input type="text" value={email} onChange={this.update('email')} placeholder='Email'/>
                        <p id="login-errors">{errors}</p>
                        <br/>
                        <div className="demo-login-btn" onClick={this.demoLogin}>Demo Login</div>
                        <br/>
                        {link}
                        <button className="next-btn"onClick={this.showUserNameInput}>Next</button>
                    </div>
                    <div className="username-input hidden">
                        <input type="text" value={username} onChange={this.update('username')} placeholder='Username'/>
                        <br/><br/>
                        <div className="demo-login-btn" onClick={this.demoLogin}>Demo Login</div>
                        <br/>
                        {link}
                        <button className="next-btn" onClick={this.showPasswordInput}>Next</button>
                    </div>
                    <div className="password-input hidden" >
                        <input type="password" value={password} onChange={this.update('password')} placeholder="Enter your password"/>
                        <br/><br/>
                        <div className="demo-login-btn" onClick={this.demoLogin}>Demo Login</div>
                        <br/>
                        {link}
                        <button  className="next-btn" type="submit">Next</button>
                    </div>
                </form>
            
            </div>
        )
    };
};

export default LoginForm;