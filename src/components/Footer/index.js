import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    let personalData = this.props.personalData;
    return (
      <footer>
      <div>
        <div>
          <ul>
            {
              personalData.socialLinks && personalData.socialLinks.map((item)=>{
                return(
                  <li>
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
          
        </div>
        <div><a><i/></a></div>
      </div>
    </footer>
    );
  }
}