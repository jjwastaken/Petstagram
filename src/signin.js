import React from "react";
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import logo from './logo.JPG'; 
import './signin.css';

class Signin extends React.Component
{
	/*constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			user: '',
			pw: '',
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleChangeP = this.handleChangeP.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({username: e.target.value})
	}
	
	handleChangeP(e) {
		this.setState({password: e.target.value})
	}

	saveSelf() {
		const data = {
			username: this.state.username,
			password: this.state.password,
		}

		// this.state.username = username that the user input
		// retrieve the user object corresponding the this username from the database
			// fetch(

			//) -> return the user object corresponding to the username
		// compare user object password with this.state.password
		// 

		// only call this if passwords match
		fetch("http://localhost:3001/self", {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then(res => console.log(res))
	}
	
	retrieveUser() {
        const username = this.state.username;
        //console.log(username);
        fetch(`http://localhost:3001/profiles/${username}`)
			//.then(response => console.log(response.json()))
            .then(response => response.json())
            .then(response => this.setState({ 
				user: response.username, 
				pw: response.password
			}, () => {
				//console.log(this.state.user)
				//console.log(this.state.pw)
			}));
    }
	
	checkOnClick()
	{
		if (this.state.user == this.state.username) 
		{
			if (this.state.pw == this.state.password)
			{
				this.handleSubmit()
				return "/main"
			}
		}
		return "/"
	}
	
	handleSubmit()
	{
		return this.saveSelf();
	}

	render()
	{
		var page = this.checkOnClick();
		return (
				<body class = "signin-container">
					<div class = "signin-shadow"> </div>
					
					<div class = "signin-window"> 
						<h1 class = "signin-header"> User Login </h1>	
							
						<form>
							<h2 class = "signin-label"> EMAIL </h2>
							<input type="form_i" value={this.state.username} onChange={this.handleChange}/>
						</form>
				
						<form>
							<h3 class ="signin-label"> PASSWORD </h3>
							<input type="form_i" value={this.state.password} onChange={this.handleChangeP}/>
						</form>
						
						<Link className="signin-newAccount" to={"/signup"} > Register an account </Link>
						
						<Link type="submit_i" to = {page} onClick={() => this.retrieveUser()} style={{color: '#282b30'}}> Submit </Link>
						
					</div>
					
					<img class = "signin-logo" src = {logo} width="75"/>
					
				</body>
		);
	}*/

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			user: '',
			pw: '',
			click: false,
			tempu : '',
			tempp :'',
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleChangeP = this.handleChangeP.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({username: e.target.value})
	}
	
	handleChangeP(e) {
		this.setState({password: e.target.value})
	}

	saveSelf() {
		const data = {
			username: this.state.username,
			password: this.state.password,
		}

		// this.state.username = username that the user input
		// retrieve the user object corresponding the this username from the database
			// fetch(

			//) -> return the user object corresponding to the username
		// compare user object password with this.state.password
		// 

		// only call this if passwords match
		fetch("http://localhost:3001/self", {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then(res => console.log(res))
	}
	
	retrieveUser() {
        const username = this.state.username;
        //console.log(username);
        fetch(`http://localhost:3001/profiles/${username}`)
			//.then(response => console.log(response.json()))
            .then(response => response.json())
            .then(response => 
			this.setState({ 
				user: response.username, 
				pw: response.password
			}, () => { 
				console.log(this.state.user)
				console.log(this.state.pw)
			}));
    }
	
	checkOnClick()
	{
		if ((this.state.user == this.state.username) && this.state.user != "") 
		{
			if (this.state.pw == this.state.password)
			{
				this.handleSubmit()
				return "/main";
			}
		}
		return "/";
	}
	
	handleSubmit()
	{
		return this.saveSelf();
	}
	
	click()
	{
		if(!this.state.click)
		{
			
			this.setState({ 
				tempu: this.state.user,
				tempp: this.state.pw
			}, () => { 
			});
			
			if (this.state.tempu == "")
			{
				console.log(this.state.user)
			}
		}
		else
		{
			return 
		}
	}

	render()
	{
		var page = this.checkOnClick();
		return (
				<body class = "signin-container">
					<div class = "signin-shadow"> </div>
					
					<div class = "signin-window"> 
						<h1 class = "signin-header"> User Login </h1>	
							
						<form>
							<h2 class = "signin-label"> EMAIL </h2>
							<input type="form_i" value={this.state.username} onChange={this.handleChange}/>
						</form>

						<form>
							<h3 class ="signin-label"> PASSWORD </h3>
							<input type="form_i" value={this.state.password} onChange={this.handleChangeP}/>
						</form>
						
						<Link className="signin-newAccount" to={"/signup"} > Register an account </Link>

						<Link type="submit_i" to = {page} onClick={() => this.click(), this.retrieveUser()} style={{color: '#282b30'}}> Submit </Link>

					</div>
					
					<img class = "signin-logo" src = {logo} width="75"/>
					
				</body>
		);
	}
}

export default Signin;
