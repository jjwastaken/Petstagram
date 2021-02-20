import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar.js';
import './main.css';

class Main extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div>Welcome to Petstagram!</div>
      </div>
    );
  }
}

ReactDOM.render(
  
  <Main />,
  document.getElementById('root')
);
