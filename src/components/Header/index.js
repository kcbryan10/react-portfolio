import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let personalData = this.props.personalData;
    return (
      <React.Fragment>
      
      <header>
         <nav>
            <ul>
               <li><a href="#home">Home</a></li>
               <li><a href="#about">About</a></li>
             <li><a href="#resume">Resume</a></li>
               <li><a href="#portfolio">Works</a></li>
               <li><a href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div>
            <div>
               <h1>My name is {personalData.name}.</h1>
               <h3 style={{color:'black', fontFamily:'sans-serif '}}>I am a {personalData.role}.{personalData.roleDescription}
               </h3>
               <hr/>
            </div>
         </div>

         <p>
            <a href="#about"><i></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}