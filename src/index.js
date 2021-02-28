import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar.js';
import Profile from './Profile.js';
import Comment_Reaction from './comment_reaction.js';
import Post from './post.js';
import './main.css';

class Main extends React.Component {
  render() {
    return (
      <div class="bodybackground">
        <NavBar />
        <div>
          <Post />
        </div>
        <div>
          <Comment_Reaction />
          <Comment_Reaction />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  
  <Main />,
  document.getElementById('root')
);
