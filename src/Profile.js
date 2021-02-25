import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./profile.css";


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

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profpic: props.profpic,
            desc: props.desc,
            numFollowers: 2,
            numFollowing: 0,
        }
    }
    render() {
        /*return (
            <div class="profile-page">
                <p>hello</p>
                <div class="profile-page-wrapper">
                    <div class="profile-pic">
                        <img src="https://www.svgrepo.com/show/30963/cookie.svg" alt="user profile pic"></img>
                    </div>
                    <div class="profile-description">
                        <ProfileDescription>{this.state.desc}</ProfileDescription>
                    </div>
                </div>
            </div>
        );*/
        return (
            <div className="container">
                <div className="user-profile">
                    <div className="user-profile__wrapper">
                        <div className="user-profile__background" />
                        <div className="user-profile__image" />
                        
                        <div className="user-profile__name">
                            <p id="username">@cat</p>
                            <p id="description">{this.state.desc}</p>
                        </div>
                        
                        
                    </div>
                    <div className="user-profile__follow">
                        <p>
                            {this.state.numFollowing} <p>Following</p>
                        </p>
                        <div className="user-profile__add">
                            <button id="follow-button">Follow</button>
                        </div>
                        <p>
                            {this.state.numFollowers} <p>Followers</p>
                        </p>
                    </div>
                </div>
                <div className="user-posts">
                </div>
            </div>
        );
    }
}

/*
Planning out how profiles are created/managed (if we have a creation feature)
upon sign up, put in a bunch of fields
add a Profile component to backend and somehow mark the profile as the user's?
when profile button at the top is clicked, send to that user's profile
*/
export default Profile;