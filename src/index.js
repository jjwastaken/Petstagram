import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar.js';
import Profile from './Profile.js';
import './main.css';

class Main extends React.Component {
  render() {
    const status = 'Next player: X';
    /*userProfile = 
    <Profile 
      profpic="smthn.img"
      desc="smthn"
      >
    </Profile>*/
    /* pass profile as a property of navbar? like profile={userProfile}*/
    return (
      <div>
        <NavBar />
        <div>Welcome to Petstagram!</div>
        <Profile
          desc="am cat"
        />
      </div>
    );
  }
}

ReactDOM.render(
  
  <Main />,
  document.getElementById('root')
);
