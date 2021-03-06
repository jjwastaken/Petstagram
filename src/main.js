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
	constructor(props) {
		super(props);
		this.state = {
			apiResponse: "",
		};
	}

	callAPI() {
		// request a username, then get the corresponding user object
		const username = 'albertbabycat';
		fetch("http://localhost:3001/profiles/" + username)
			.then(res => res.json())
			.then(res => this.setState({ apiResponse: res }));
	}

	componentWillMount() {
		this.callAPI();
	}

	// pass in a user object to the Profile component
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
						<Profile username={this.state.apiResponse.username} />
					</Route>
				</Switch>
				</div>
				
			</BrowserRouter>
			
		);
	}
}

export default Main;