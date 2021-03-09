import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './profile.css';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            self: props.self,
        }
    }

    /*addFollower() {
        if (this.state.user.username === this.state.self.username) {
            return;
        }
        fetch('/profiles/:user/:self')
        // call express patch function or whatever
    }*/

    render() {
        return (
            <div class="profile-page">
                <div class="user-info">
                    <div className="profile-picture" />
                    <h2>{this.state.user.username}</h2>
                    <h4>bio</h4>
                    <div className="follow-info">
                        <h3>Following</h3>
                        <button className="follow-button" onClick={() => this.addFollower()}>+</button>
                        <h3>Followers</h3>
                    </div>
                    <div className="profile-posts">
                        <h3>Posts</h3>
                    </div>
                </div>
            </div>
        );
    }
}

/*function ProfilePic(props) {
    return (
        <img>{props}</img>
    );
}*/

/*function ProfileDescription(props) {
    return (
        <div>
            <p>{props.children}</p>
        </div>
    );
}*/



/*
Planning out how profiles are created/managed (if we have a creation feature)
upon sign up, put in a bunch of fields
add a Profile component to backend and somehow mark the profile as the user's?
when profile button at the top is clicked, send to that user's profile
*/
export default Profile;