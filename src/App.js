import React, { Component } from 'react';

import './App.css';

import Login from './pages/Login';

import Routies from './routes';

class App extends Component {

  render() {
    return (
        <div className="App">
          <Login />
        </div>
    );
  };
};

export default App;
