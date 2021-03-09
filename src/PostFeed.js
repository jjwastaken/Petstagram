import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Comment_Reaction from './comment_reaction.js';
import Post from './post.js';

class PostFeed extends React.Component {

  // when you click on a person's username/pic, should link you
  // to their profile
  // but how do you link your own user ....
  // when you sign in you should store your own self somewhere
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