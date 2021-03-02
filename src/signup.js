import React from "react";
import ReactDOM from 'react-dom';
import logo from './logo.JPG'; 
import './signup.css';
import { Link } from 'react-router-dom';

class Signup extends React.Component
{
	render()
	{
		return (
			<body class = "signup-container"> 
				<div class = "signup-shadow"> </div>
				
				<div class = "signup-window"> 
					<h1 class = "signup-header"> New Account </h1>	
						
					<form>
						<h2 class = "signup-label"> EMAIL </h2>
						<input type="form_i"/>
					</form>
			
					<form>
						<h3 class ="signup-label"> PASSWORD </h3>
						<input type="form_i"/>
					</form>
				
					<form>
						<h3 class ="signup-label"> VERIFY PASSWORD </h3>
						<input type="form_i"/>
					</form>
					
					<Link type = "submit_i" to = {"/signin"}  style={{color: '#282b30'}}> Submit </Link>

				</div>
				<img class = "signup-logo" src = {logo} width="75"/>
				
			</body>
		);
	}
}

export default Signup;