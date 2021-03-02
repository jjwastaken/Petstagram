import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Comment_Reaction from './comment_reaction.js';
import Post from './post.js';

class PostFeed extends React.Component {
    render() {
        return (
            <div className="landing-page">
              <div>
                <Post />
              </div>
              <div>
                <Comment_Reaction />
                <Comment_Reaction />
              </div>
            </div>
        );
    }
}

export default PostFeed; 