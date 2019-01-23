import React, {Component} from 'react';
import './App.css';
import {RedocStandalone} from "redoc";

class App extends Component {
    render() {
        return (
            <div className="App">
                <RedocStandalone
                    specUrl="/openapi.yaml"
                    onLoaded={error => {
                        if (!error) {
                            console.log('Yay!');
                        }
                    }}
                />
            </div>
        );
    }
}

export default App;
