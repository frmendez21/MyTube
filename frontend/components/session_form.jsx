import React from 'react';
import {withRouter} from 'react-router-dom';

class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    };

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(this.props.closeModal);
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
            .then(this.props.closeModal);
    }
    
    render() {
        const {username, email, password} = this.state;
        const {formHeader, formType} = this.props;
        
        return (
            <div>
                <form className="session-form" onSubmit={this.handleSubmit}>
                    <h3>{formHeader}</h3>
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    <input type="text" value={email} onChange={this.update('email')} placeholder='Email'/>
                    <input type="text" value={username} onChange={this.update('username')} placeholder='Username'/>
                    <input type="password" value={password} onChange={this.update('password')} placeholder="Password"/>
                    <button type="submit">Next</button>
                </form>
                <br/>
                <p>Or</p>
                <br/>
                <button onClick={this.demoLogin}>Demo Login</button>
            </div>
        )
    };
};

export default withRouter(SessionForm);