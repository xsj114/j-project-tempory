import React, { Component } from 'react';
import Logo from '../../assets/images/logo.png';
import axios from '../../utils/baseHttp';
import './index.css';

class App extends Component {
    render() {
        return (
            <div>
                <p>Good Luck</p>
                <img src={Logo} />
            </div>
        );
    };
};

export default App;
