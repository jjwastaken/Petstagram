import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar.js';
import Comment_Reaction from './comment_reaction.js';
import Profile from './Profile.js';
import Post from './post.js';
import './main.css';
import PostFeed from './PostFeed.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class Main extends React.Component 
{
	render() 
	{
		return (
			<BrowserRouter>
				<div class="bodybackground">
					<NavBar />
					<Switch>
					<Route exact path='/main'>
						<PostFeed />
					</Route>
					<Route exact path='/profile'>
						<Profile />
					</Route>
				</Switch>
				</div>
				
			</BrowserRouter>
			
		);
	}
}

export default Main;