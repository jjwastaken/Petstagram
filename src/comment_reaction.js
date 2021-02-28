import React, { Component } from 'react';
import "./comment_reaction.css";
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';

class Comment_Reaction extends React.Component {
    render() {
        return (
            <div class='metacontainer'>
            	<img class="picture" width="60" height="60" alt="" />
            	<div class="name">CrazyDaisy</div>
            	<div class="sample">Hi my name is Daisy and I am seven months old! I am
            	worlds naughtiest pupper and I have severe separation anxiety. 
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
