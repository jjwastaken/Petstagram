import React from "react";
import ReactDOM from 'react-dom';
import logo from './logo.JPG'; 
import './signup.css';
import { Link } from 'react-router-dom';

class Signup extends React.Component
{
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleChangePass = this.handleChangePass.bind(this);
	}

	handleChange(e) {
		this.setState({username: e.target.value})
	}

	handleChangePass(e) {
		this.setState({password: e.target.value})
	}

	// maybe move this to a separate file
	addNewUser() {
		const data = {
			username: this.state.username,
			password: this.state.password,
			followers: [],
			following: [],
		}
		fetch("http://localhost:3001/profiles", {
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
			<body class = "signup-container"> 
				<div class = "signup-shadow"> </div>
				
				<div class = "signup-window"> 
					<h1 class = "signup-header"> New Account </h1>	
						
					<form>
						<h2 class = "signup-label"> EMAIL </h2>
						<input type="form_i" value={this.state.username} onChange={this.handleChange}/>
					</form>
			
					<form>
						<h3 class ="signup-label"> PASSWORD </h3>
						<input type="form_i" value={this.state.password} onChange={this.handleChangePass}/>
					</form>
				
					<form>
						<h3 class ="signup-label"> VERIFY PASSWORD </h3>
						<input type="form_i"/>
					</form>
					
					<Link type="submit_i" to = {"/signin"} onClick={() => this.addNewUser()} style={{color: '#282b30'}}> Submit </Link>

				</div>
				<img class = "signup-logo" src = {logo} width="75"/>
				
			</body>
		);
	}
}

export default Signup;