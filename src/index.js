import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar.js';
import Comment_Reaction from './comment_reaction.js';
import './main.css';

class Main extends React.Component {
  render() {
    const status = 'Next player: X';
    return (
      <div>
        <NavBar />
        <div>Welcome to Petstagram!</div>
        <Comment_Reaction />
      </div>
    );
  }
}

ReactDOM.render(
  
  <Main />,
  document.getElementById('root')
);
