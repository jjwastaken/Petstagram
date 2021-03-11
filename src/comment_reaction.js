import React, { Component } from 'react';
import "./comment_reaction.css";
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';

class Comment_Reaction extends React.Component {

    /*constructor(props) {
        super(props);
        this.state = {
            post: null,
            comment: '',
        }
    }

    // retrieve post information
    retrievePost() {
        fetch(`http://localhost:3001/posts/${postID}`)
            .then(res => res.json())
            .then(res => this.setState({post: res}))
    }

    // also patch post information to add thumbs up, heart, laugh, comments

    handleLike(e) {
        this.patchPost(likes, this.state.post.likes + 1)
        fetch('http://localhost:3001/posts', {
            method: 'PATCH',
            headers: {
				'Content-Type': 'application/json'
			},
			body: {likes: this.state.post.likes}
        })
    }

    handleHeart(e) {
        this.setState({hearts: this.state.post.hearts + 1});
    }

    handleLaughs(e) {
        this.setState({laughs: this.state.post.laughs + 1});
    }
    
    handleCommentChange(e) {
        this.setState({comment: e.target.value});
    }*/

    render() {
        return (
            <div class='metacontainer'>
            	<img class="picture" width="60" height="60" alt="" />
            	<div class="name">Crazy Daisy</div>
            	<div class="sample">Hi my name is Daisy and I am seven months old! 
                I am worlds naughtiest pupper and I have severe separation anxiety. 
                My favorite snack is my moms shoes!</div>
                <div class='container'>
                    <button id='thumbsup'></button>
                    <button id='heart'></button>
                    <button id='laugh'></button>
                    <textarea class="comment" placeholder= 'Type here...'>
                    </textarea>
                    <button id='send'></button>
                </div>
            </div>
        );
    }
}
export default Comment_Reaction;
