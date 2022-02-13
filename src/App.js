import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import ContactUs from './components/Contact';
import Footer from './components/Footer';
import personalData from './personalData';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header personalData={personalData}/>
        <About personalData={personalData}/>
        <Resume personalData={personalData}/>
        <Portfolio personalData={personalData}/>
        <ContactUs personalData={personalData}/>
        <Footer personalData={personalData}/>
      </div>
    );
  }
}

export default App;