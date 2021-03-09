import React from "react";
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import logo from './logo.JPG'; 
import './signin.css';

class Signin extends React.Component
{
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({username: e.target.value})
	}

	saveSelf() {
		const data = {
			username: this.state.username,
			password: this.state.password
		}
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

	render()
	{
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
							<input type="form_i"/>
						</form>
						
						<Link className="signin-newAccount" to={"/signup"} > Register an account </Link>
						
						<Link type="submit_i" to = {"/main"} onClick={() => this.saveSelf()} style={{color: '#282b30'}}> Submit </Link>

					</div>
					
					<img class = "signin-logo" src = {logo} width="75"/>
					
				</body>
		);
	}
}

export default Signin;
