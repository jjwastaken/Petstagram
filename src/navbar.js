import React, { Component } from 'react';
import "./navBar.css";
import 'bootstrap/dist/css/bootstrap.css';
import Logo from "./logo.JPG";
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <nav class="navbar">
                <img class="logo" width="60" height="60" alt="" />
                <div class="logoHeader">Petstagram</div>
                <div class="menu-options">
                    <Link to='/profile' class="profileButton">My Profile</Link>
                    <div class="searchBar">
                        <form class="form-inline">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="searchButton" type="submit">

                            </button>
                        </form>
                    </div>
                </div>
                
                <div class="clearfix"></div>
            </nav>
        );
    }
}
export default NavBar;
