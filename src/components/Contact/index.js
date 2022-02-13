import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let personalData = this.props.personalData;
    return (
      <section id="contact">
          <div>
            <div>
              <p>
              contact me for work oppurtunities/ suggestions for my code.
              </p>
            </div>
          </div>
          <div>
            <aside>
              <div>
                <h4> Contact info</h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}