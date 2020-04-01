import React from 'react';

export default function AboutMe() {
  return (
    <>
      <div className="row h-100 w-100 p-5 m-0 d-flex align-items-center">
        <div className="col-4">
          <figure>
            <img src="images/headshot-no-background.png" alt="Headshot" className="w-75"/>
          </figure>
      </div>
      <div className="col-8 p-5">
        <h2 className="pb-4">About Me</h2>
        <p>
          Hello! My name is Sebastian Tedesco and I'm a software engineer based in Orange County, CA. I quickly discovered my passion for web development as a student at the University of Colorado at Boulder and so I obtained a Certificate in Design Technologies through the College of Engineering and Applied Science.
        </p>
        <p>
          Upon graduation, I enrolled in an accelerated Web Development program where I was emmersed in HTML5, CSS3, Bootstrap, JavaScript (ES5/ES6+), React, and Node.js. I'm also proficient using version control systems (Git/GitHub), planning resources (Figma, MeisterTask and Trello) as well as database technologies, such as PostgreSQL.
        </p>
      </div>
    </div>
    </>
  )
}
