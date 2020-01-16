import React, { Component } from 'react';
import fire from './config/Fire';
import ImageUpload from "./Components/ImageUpload"

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
                <h1>Welcome to Home</h1>
                <div>
                    <ImageUpload/>
                </div>
                <button onClick={this.logout}>Logout</button>
            </div>
        );

    }

}

export default Home;

