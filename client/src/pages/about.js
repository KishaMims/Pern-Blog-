import React from "react";
import image from './cocktails.jpeg';

function About() {
  return (
    <div className="HomeTitle">
        <h1 className="HomeTitle">🍷🍹When it comes to a drink? I'm gonna have it🍷🍹</h1>
        <img alt="cockatials" src={image} height={400} width={600}/><br></br>
            <br></br>
            <h3 className="HomeTitle">Making cocktails has been an at home hobby for me.. so I decided to share some of my favorite recipes here! </h3>
    </div>
  )
}

export default About;