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
			self: null,
		};
	}

	/*callAPI() {
		fetch("http://localhost:3001/self")
			.then(response => response.json())
			.then(response => this.setState({ self: response }))
	}

	componentDidMount() {
		this.callAPI();
	}*/

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
					{/*<Route path='/profile/:username' component={Profile}>*/}
					<Route path='/profile/:username' component={Profile}>
						{/*<Profile user={this.state.self} self={this.state.self}/>*/}
					</Route>
				</Switch>
				</div>
				
			</BrowserRouter>
			
		);
	}
}

export default Main;