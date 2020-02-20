import React from 'react';

export default class Header extends React.Component {


  render() {
    return (
      <div className="header">
        <div className="left-box"></div>
        <div className="right-box"></div>
        <nav className="navbar">
          <ul>
            <li className="nav-item">About Me</li>
            <li className="nav-item">Skills</li>
            <li className="nav-item">Tools</li>
            <li className="nav-item">Applications</li>
            <li className="nav-item">Contact</li>
          </ul>
        </nav>
      </div>
    )
  }
}
