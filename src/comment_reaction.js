import React, { Component } from 'react';
import "./comment_reaction.css";
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';

class Comment_Reaction extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            post: this.props.post,
            comment: '',
        }
        this.handleCommentChange = this.handleCommentChange.bind(this);
    }

    // retrieve post information
    /*retrievePost() {
        const postID = this.props.post.text;
        fetch(`http://localhost:3001/posts/${postID}`)
            .then(res => res.json())
            .then(res => this.setState({post: res}))
    }

    componentDidMount() {
        this.retrievePost();
    }*/

    handleCommentChange(e) {
        this.setState({comment: e.target.value});
    }

    addNewComment() {
        fetch('http://localhost:3001/posts', {
            method: 'PATCH',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({postID: this.state.post.text, comment: this.state.comment})
        })
    }

    // also patch post information to add thumbs up, heart, laugh, comments

    /*handleLike(e) {
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
    }*/
    
    

    render() {
        function Comment(props) {
            return (
              <div className="Comment">
                  <img className="picture"/>
                  <div className="name">
                    {props.username}
                    </div>
                <form className="comment" type="comment">
                  {props.text}
                </form>
              </div>
            );
          }
        return (
            <div class='metacontainer'>
            	<img class="picture" width="60" height="60" alt="" />
            	<div class="name">{this.props.post.username}</div>
            	<div class="sample">{this.props.post.text}</div>
                <div class='container'>
                    <button id='thumbsup'></button>
                    <button id='heart'></button>
                    <button id='laugh'></button>
                    <form>
                        <Comment placeholder= 'Type here...' value={this.state.comment} onChange={this.handleCommentChange}/>
                    </form>
                    <button id='send' onClick={() => this.addNewComment()}></button>
                </div>
            </div>
        );
    }
}
export default Comment_Reaction;
