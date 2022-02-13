import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let personalData = this.props.personalData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              contact me for work oppurtunities/ suggestions for my code.
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linked in :
                  {personalData.linkedinId}
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}