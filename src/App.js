import React, { Component } from 'react';

import './assets/css/main.css';
class App extends Component {
    render () {
        return (
            <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                <div className="px-3 py-2 bg-green-200">
                    <h1 className="text-3xl font-bold">Hello Allergy</h1>
                </div>
            </div>
        );
    }
}

export default App;