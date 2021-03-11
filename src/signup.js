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
			password: '',
			password2: '',
			warning: true,
			success: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleChangePass = this.handleChangePass.bind(this);
		this.handleChangePass2 = this.handleChangePass2.bind(this);
	}

	handleChange(e) {
		this.setState({username: e.target.value})
	}

	handleChangePass(e) {
		this.setState({password: e.target.value})
	}

	handleChangePass2(e) {
		this.setState({password2: e.target.value})
	}

	// maybe move this to a separate file
	addNewUser() {
		const data = {
			username: this.state.username,
			password: this.state.password,
			posts: [],
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

	checkPassword() {
  
            if (this.state.password != '' && this.state.password != ''){
            	this.state.warning = false;
				if (this.state.password == this.state.password2) {
					this.addNewUser();
					this.state.username = '';
					this.state.success = true;
				}
				//console.log(this.state.password, this.state.password2);
				this.state.password = '';
				this.state.password2 = '';
            } 
	}

	render()
	{
		const vis_style = this.state.warning ? 'hidden' : 'visible';
		const message = this.state.success ? 'Account created! Go to the sign in page to login.' : 'Passwords do not match. Please try again!'
		return (
			<body class = "signup-container"> 
				
				<div class = "signup-window"> 
					<h1 class = "signup-header"> New Account </h1>	
						
					<form>
						<h2 class = "signup-label"> USERNAME </h2>
						<input type="text" value={this.state.username} onChange={this.handleChange}/>
					</form>
			
					<form>
						<h3 class ="signup-label"> PASSWORD </h3>
						<input type="text" value={this.state.password} onChange={this.handleChangePass}/>
					</form>
				
					<form>
						<h3 class ="signup-label"> VERIFY PASSWORD </h3>
						<input id='ending' type="text" value={this.state.password2} onChange={this.handleChangePass2}/>
					</form>
					
					<Link type="submit_i" onClick={() => this.checkPassword()} style={{color: '#282b30'}}> Submit </Link>
					<Link type="submit_j" to = {"/signin"} style={{color: '#282b30'}}> Go back </Link>
                    

				</div>
				<h5 id="warning" style={{visibility: vis_style}}> {message} </h5>
				<img class = "signup-logo" src = {logo} width="75"/>
				
			</body>
		);
	}
}

export default Signup;