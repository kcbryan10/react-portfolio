import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let personalData = this.props.personalData;
    return (
      <section >
      <div>
        <div>
          <h1>Examples of my work</h1>
          <div>
          {
            personalData.portfolio && personalData.portfolio.map((item)=>{
              return(
                <div>
                  <div>
                      <div>
                        <div>
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                        <img src={`${item.imgurl}`}/>
                      </div>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}