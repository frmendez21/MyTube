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
        this.invalidLength = this.invalidLength.bind(this);
    };

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(() => {
                // window.location.reload();
                this.props.closeModal();
            })
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
        return e => this.setState({[key]: e.currentTarget.value})    
    };

    demoLogin() {
        const user = { 
            username: 'demo-user', 
            email: 'demo@myTube.com',
            password: 'demo123'
        }
        this.props.processForm(user)
            .then(() => {
                // window.location.reload();
                this.props.closeModal();
            })
    }

    showUserNameInput(e) {
        e.preventDefault();
        let $email = $(".email-input");
        let $username = $(".username-input");
        $email.addClass('hidden');
        $username.removeClass('hidden');
        $username.find("input").focus();
    };

    showPasswordInput(e) {
        e.preventDefault();
        let $username = $(".username-input");
        let $password = $(".password-input");
        $username.addClass('hidden');
        $password.removeClass('hidden');
        $password.find("input").focus();
        $password.on('keydown', e => {
            if(e.which === 13) {
                e.preventDefault();
                $('.submit-btn').trigger('click')
            };
        });
    };

    showEmailInput() {
        let $email = $(".email-input");
        let $input = $email.find("input")
        let $password = $(".password-input");
        $password.addClass('hidden')
        $input.css("border-color", "red")
        $email.removeClass('hidden');
    }

    switchForms() {
        this.props.clearErrors()
        this.props.signup();
    }

    invalidLength(e) {
        e.preventDefault();
    }

    componentDidMount() {
        let form = document.querySelector('.login-form');
        let $username = $(".username-input");
        let $password = $(".password-input");
        let $email = $(".email-input");
        $username.addClass('hidden');
        $password.addClass('hidden');
        $email.find("input").focus();
        form.addEventListener("keydown", e => {
            if (e.which === 13) {
                e.preventDefault();
                $(".next-btn").trigger('click')
            };
        })
    };

    render() {
        const {username, email, password} = this.state;
        const {formHeader, formType} = this.props;
        const link = <div className="switch-form-btn" onClick={this.switchForms}>Create account</div>;
        const errors = this.props.errors.length > 0 ? this.props.errors[0] : "";
        return (
            <div>
                <form className="login-form">
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
                        <button className="next-btn" onClick={email.length === 0 ? this.invalidLength : this.showUserNameInput}>Next</button>
                    </div>
                    <div className="username-input">
                        <input type="text" value={username} onChange={this.update('username')} placeholder='Username'/>
                        <br/><br/>
                        <div className="demo-login-btn" onClick={this.demoLogin}>Demo Login</div>
                        <br/>
                        {link}
                        <button className="next-btn" onClick={username.length === 0 ? this.invalidLength : this.showPasswordInput}>Next</button>
                    </div>
                    <div className="password-input" >
                        <input type="password" value={password} onChange={this.update('password')} placeholder="Enter your password"/>
                        <br/><br/>
                        <div className="demo-login-btn" onClick={this.demoLogin}>Demo Login</div>
                        <br/>
                        {link}
                        <button className="submit-btn" onClick={this.handleSubmit}>Next</button>
                    </div>
                </form>
            </div>
        )
    };
};

export default LoginForm;