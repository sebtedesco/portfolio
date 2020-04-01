import React from 'react';
import TopNav from './top-nav';
import LeftNav from './left-nav';
import RightNav from './right-nav';
import AboutMe from './about';

export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render(){
    return(
      <>
        <TopNav />
        <LeftNav />
        <RightNav />
        <div className="outermost-body-container">
          <AboutMe />
        </div>
      </>
    )
  }
}
