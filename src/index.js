import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar.js';
import Profile from './Profile.js';
import PostFeed from './PostFeed.js';
import Comment_Reaction from './comment_reaction.js';
import Post from './post.js';
import './main.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
      <div class="bodybackground">
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <PostFeed />
          </Route>
          <Route exact path='/profile' component={Profile}>
          </Route>
        </Switch>
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById('root')
);
