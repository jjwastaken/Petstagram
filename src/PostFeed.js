import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Comment_Reaction from './comment_reaction.js';
import Post from './post.js';

class PostFeed extends React.Component {

  // when you click on a person's username/pic, should link you
  // to their profile
    render() {
        return (
            <div className="landing-page">
              <div>
                <Post />
              </div>
              <div>
                <Comment_Reaction post={{text: 'hello'}} username="crazydaisy"/>
                <Comment_Reaction post={{text: 'good evening'}} username="crazydaisy"/>
              </div>
            </div>
        );
    }
}

export default PostFeed; 