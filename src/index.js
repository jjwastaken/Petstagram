import React from "react";
import ReactDOM from 'react-dom';
import './index.css';

	
function Window() 
{	
	return <body class = "container">
		<div class = "shadow"> </div>
		
		<div class = "window"> 
			<h1 class = "header"> User Login </h1>	
				
			<form>
				<h2 class = "label"> EMAIL </h2>
				<input type="form"/>
			</form>

			<form>
				<h3 class ="label"> PASSWORD </h3>
				<input type="form"/>
			</form>
			
			<a class = "newAccount" href = "http://localhost:3001/"> Register an account </a>
				
			<input type="submit" value="Submit"/>
		</div>
		
		<img class = "logo" src = "https://i.imgur.com/JavpkLL.png" width="300"/>
		
	</body>;
}

class Signin extends React.Component
{
	renderWindow()
	{
		return Window();
	}
	
	render()
	{
		return (
			<div>
				{this.renderWindow()}
			</div>
		);
	}
}

// ========================================

ReactDOM.render(<Signin />, document.getElementById("root"));
