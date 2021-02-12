import React, { Component } from 'react';
import "./navBar.css";
import 'bootstrap/dist/css/bootstrap.css';
import Logo from "./logo.JPG";
import ReactDOM from 'react-dom';

class NavBar extends React.Component {
    render() {
        return (
            <nav class="navbar">
                <img class="logo" width="60" height="60" alt="" />
                <div class="logoHeader">Petstagram</div>
                <div class="searchBar">
                    <form class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                <div class="clearfix"></div>
            </nav>
        );
    }
}
export default NavBar;
