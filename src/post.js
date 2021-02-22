import React, { Component } from 'react';
import "./post.css";
import 'bootstrap/dist/css/bootstrap.css';
import Logo from "./logo.JPG";
import ReactDOM from 'react-dom';

class Post extends React.Component {
    render() {
        return (
            <div class='post'>
            	<img class="picture" width="60" height="60" alt="" />
            	<div class="name">CrazyDaisy</div>
            	<div class='text'>
                    <textarea class="comment" placeholder= 'Make a post!'>
                	</textarea>
                    <button id='submit'>Post</button>
                </div>
            </div>
        );
    }
}
export default Post;
