import React from 'react';
import onClickOutside from 'react-onclickoutside';
class AvatarButton extends React.Component{
    constructor(props) {
        super(props)
        this.state = { 
            signIn: <div></div>, 
            signUp: <div></div>,
            logout: <div></div>
        }
        this.renderSignedOutMenu = this.renderSignedOutMenu.bind(this);
        this.renderSignedInMenu = this.renderSignedInMenu.bind(this);
    };

    renderSignedOutMenu() {
        this.setState({
             signIn: this.props.signIn, 
             signUp: this.props.signUp
        });
    };

    renderSignedInMenu() {
        this.setState({
            logout: this.props.logout
        })
    }
    
    handleClickOutside() {
        this.setState({
            signIn: <div></div>, 
            signUp: <div></div>,
            logout: <div></div>
        })
    }

    render() {
        const {currentUser} = this.props
        const {signIn, signUp, logout} = this.state
        if (!currentUser) {
        return (
            <div>
                <button className="anon-avatar-btn" onClick={this.renderSignedOutMenu}>A</button>
                {Object.values(this.state)}
            </div>
        )
        } else {
            return (
                <div>
                    <button className="avatar-btn" onClick={this.renderSignedInMenu}>{currentUser.username[0]}</button>
                    {logout}
                </div>
            )
        }
    }
    
}

export default onClickOutside(AvatarButton);