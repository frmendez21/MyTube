import React from 'react';


import Modal from './modal';
import AvatarButtonContainer from './containers/avatar_button_container';
import {Link} from 'react-router-dom';
class App extends React.Component {

    render() {
        return (
        <div>
            <Modal />
            <header className="app-head">
                <Link to="/"><img className="logo" src={window.logo}/></Link>
                <AvatarButtonContainer />
            </header>
        </div>
        );
    };
};

export default App;