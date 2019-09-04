import React, { Component } from 'react';
import "./Header.css";


export default class Header extends Component {
  render() {
    return (
      <nav className="Nav">
        <div className="Nav-menus">
          <div className="Nav-brand">
            <a className="Nav-brand-logo" href="/">
              Instagram
            </a>
          </div>
        </div>
      </nav>
    );
  }
}