import React from 'react';


import Modal from './modal';
import AvatarButtonContainer from './containers/avatar_button_container';

class App extends React.Component {

    render() {
        return (
        <div>
            <Modal />
            <header>
                <img src="../" alt=""/>
                <h1>MyTube</h1>
            </header>
            <AvatarButtonContainer />
        </div>
        );
    };
};

export default App;