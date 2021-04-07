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
    };

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(this.props.closeModal)
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
    
    render() {
        const {username, email, password} = this.state;
        const {formHeader, formType, signup, login} = this.props;
        const link = <Link to="/signup" onClick={signup}>Create account</Link>;

        return (
            <div>
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <h3>{formHeader}</h3>
                    <div className="email-input">
                        <input type="text" value={email} onChange={this.update('email')} placeholder='Email'/>
                        <button onClick={this.showUserNameInput}>Next</button>
                    </div>
                    <div className="username-input hidden">
                        <input type="text" value={username} onChange={this.update('username')} placeholder='Username'/>
                        <button onClick={this.showPasswordInput}>Next</button>
                    </div>
                    <div className="password-input hidden" >
                        <input type="password" value={password} onChange={this.update('password')} placeholder="Enter your password"/>
                        <button type="submit">Next</button>
                    </div>
                </form>
                <br/>
                <p>Or</p>
                <br/>
                <button onClick={this.demoLogin}>Demo Login</button>
                {link}
            </div>
        )
    };
};

export default LoginForm;