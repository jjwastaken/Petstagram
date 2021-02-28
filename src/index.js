import React, { Component } from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import NavBar from './navbar.js';
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
=======
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Main from './main.js';
import Signin from './signin.js';
import Signup from './signup.js';



class Home extends React.Component
{	
	render()
	{		
		return (		
			<BrowserRouter>
				<div>
					<Switch>	
						<Route exact path="/" component={Signin}/>	
						<Route path="/signin" component={Signin}/>
						<Route path="/signup" component={Signup}/>
						<Route path="/main" component = {Main}/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

ReactDOM.render( <Home />, document.getElementById('root'));
>>>>>>> origin/ConnectionUpdate
