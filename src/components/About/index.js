import React, { Component } from 'react';
export default class About extends Component {
    render() {
        let personalData = this.props.personalData;
        return (
            <section>
                <div>
                    <div>

                        <h2>About Me</h2>
                        <p>
                            {personalData.aboutme}
                        </p>
                        <div>

                            <div>

                                <h2>Person Information</h2>
                                <p>
                                    <span>Name: {personalData.name}</span>
                                    <br></br>
                                    <span>
                                        Address: {personalData.address}
                                    </span>
                                    <br></br>
                                    <span>Github Link: <a href="https://github.com/kcbryan10">{personalData.website}</a></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}