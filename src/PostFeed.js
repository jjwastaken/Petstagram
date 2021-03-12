import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Comment_Reaction from './comment_reaction.js';
import Post from './post.js';

class PostFeed extends React.Component 
{
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    }
  }

  retrieveUsers() {
    fetch("http://localhost:3001/posts")
      .then(response => response.json())
      .then(response => this.setState({posts: response}))
  }

  componentDidMount() {
    this.retrieveUsers();
  }

  render() {
        return (
            <div className="landing-page">
              <div>
                <Post />
              </div>
              <div>
                {this.state.posts.map(post => (<Comment_Reaction post={post} noComments={false}></Comment_Reaction>))}
                {/*<Comment_Reaction post={{text: 'hello'}} username="crazydaisy"/>
                <Comment_Reaction post={{text: 'good evening'}} username="crazydaisy"/>*/}
              </div>
            </div>
        );
    }
}

export default PostFeed; 