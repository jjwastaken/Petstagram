import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Main from './main.js';
import Signin from './signin.js';
import Signup from './signup.js';
import Profile from './Profile.js';

// import the Firebase library.
const admin = require('firebase-admin');

// import the password.
const databasePassword = require('./firebase-password.json');

// tell the library to connect to the database for us 
// using the given password.
admin.initializeApp({
    credential: admin.credential.cert(databasePassword)
});

// this is our database object.
const db = admin.firestore();

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
            			<Route path="/profile" component={Profile}/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

ReactDOM.render( <Home />, document.getElementById('root'));
