import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './profile.css';
import PostFeed from './PostFeed.js'

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //username: this.props.match.params.username,
            //user: {username: ''},
            //self: {username: ''},
            user: this.props.location.user,
            self: this.props.location.self,
        }
    }
    // retrieve self and user here
    /*retrieveSelf() {
        fetch("http://localhost:3001/self")
			.then(response => response.json())
			.then(response => this.setState({ self: response }))
            //.then(response => console.log(this.state.self));
    };

    retrieveUser() {
        const username = this.props.match.params.username;
        console.log(username);
        fetch(`http://localhost:3001/profiles/${username}`)
            .then(response => response.json())
            .then(response => this.setState({ user: response }))
            //.then(data => console.log(data));
    };

    componentDidMount() {
        //this.retrieveSelf();
        this.retrieveUser();
        //this.setState({user: {username: 'meowmeow'}});
        console.log(this.state.user);
        //console.log(this.state.self);
    };*/

    addFollower() {
        if (this.state.user.username === this.state.self.username) {
            return;
        }
        fetch('http://localhost:3001/profiles', {
            method: 'PUT',
            body: { user: this.state.user, self: this.state.self }
        })
        // call express patch function or whatever
    }

    getFollowers() {

    }

    getFollowing() {
        
    }

    render() {
        return (
            <div class="profile-page">
                <div class="user-info">
                    <div className="profile-picture" />
                    <h2>{this.state.user.username}</h2>
                    <div className="follow-info">
                        <h3>Following</h3>
                        <button className="follow-button" onClick={() => this.addFollower()}>+</button>
                        <h3>Followers</h3>
                    </div>
                    <div className="profile-posts">
                        <h3>Posts</h3>
                    </div>
                </div>
                <PostFeed></PostFeed>
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