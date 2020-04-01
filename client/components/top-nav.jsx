import React from 'react';

export default class TopNav extends React.Component {


  render() {
    return (
      <div className="fixed-top top-nav d-flex justify-content-between align-items-end">
        <a className="initials d-flex justify-content-center align-items-end" href="#">
          <h2>ST</h2>
        </a>
        <nav>
          <ul>
            <li><a href="#"></a>About</li>
            <li><a href="#"></a>Skills</li>
            <li><a href="#"></a>Tools</li>
            <li><a href="#"></a>Portfolio</li>
          </ul>
        </nav>
      </div>
    )
  }
}


{/* <div className="left-box"></div>
        <div className="right-box"></div>
        <nav className="navbar">
          <ul>
            <li className="nav-item">About Me</li>
            <li className="nav-item">Skills</li>
            <li className="nav-item">Tools</li>
            <li className="nav-item">Applications</li>
            <li className="nav-item">Contact</li>
          </ul>
        </nav> */}
