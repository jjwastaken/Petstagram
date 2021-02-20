import React, { Component } from 'react';
import "./comment_reaction.css";
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';

class Comment_Reaction extends React.Component {
    render() {
        return (
            <div class='metacontainer'>
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
