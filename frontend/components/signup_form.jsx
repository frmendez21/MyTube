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

    render() {
        const {username, email, password} = this.state;
        const {formHeader, login} = this.props;
        const link = <Link to="/login" onClick={login}>Sign in</Link>

        return (
            <div>
                <form className="session-form" onSubmit={this.handleSubmit}>
                    <h3>{formHeader}</h3>
                    <input type="text" value={email} onChange={this.update('email')} placeholder='Email'/>
                    <input type="text" value={username} onChange={this.update('username')} placeholder='Username'/>
                    <input type="password" value={password} onChange={this.update('password')} placeholder="Password"/>
                    <button type="submit">Next</button>
                </form>
                {link}
            </div>
        )
    };
};

export default SignupForm;