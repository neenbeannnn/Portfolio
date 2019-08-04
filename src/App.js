import React, { Component } from 'react';
import './App.scss';
import Overlay from './Components/Overlay';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Work from './Components/Work';
import Contact from './Components/Contact';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      menuClick: false
    }
  }

  scrollToSkills = () => {
    this.refs.skillslide.scrollIntoView();
  }

  scrollToProjects = () => {
    this.refs.projectslide.scrollIntoView();
  }
  
  scrollToWork = () => {
    this.refs.workslide.scrollIntoView();
  }

  scrollToContact = () => {
    this.refs.contactslide.scrollIntoView();
  }

  handleMenuClick = () => {
    this.refs.homeslide.scrollIntoView();
    this.setState({menuClick: !this.state.menuClick});
  }

  handleMenuProjectClick = () => {
    this.setState({menuClick: false});
    const timer = setTimeout(() => {
      this.refs.projectslide.scrollIntoView();
    }, 1000);
    return () => clearTimeout(timer);
  }

  handleMenuSkillClick = () => {
    this.setState({menuClick: false});
    const timer = setTimeout(() => {
      this.refs.skillslide.scrollIntoView();
    }, 1000);
    return () => clearTimeout(timer);
  }  

  handleMenuWorkClick = () => {
    this.setState({menuClick: false});
    const timer = setTimeout(() => {
      this.refs.workslide.scrollIntoView();
    }, 1000);
    return () => clearTimeout(timer);
  }

  handleMenuConnectClick = () => {
    this.setState({menuClick: false});
    const timer = setTimeout(() => {
      this.refs.contactslide.scrollIntoView();
    }, 1000);
    return () => clearTimeout(timer);
  }

  render(){

    return (
        <div className='wrapper'>
          
          <Overlay 
            menuClick={this.state.menuClick}
            handleMenuProjectClick={this.handleMenuProjectClick}
            handleMenuSkillClick={this.handleMenuSkillClick}
            handleMenuWorkClick={this.handleMenuWorkClick}
            handleMenuConnectClick={this.handleMenuConnectClick}
          />

          <div className='home-slide' ref={'homeslide'}>
            <Home
              menuClick={this.state.menuClick}
              handleMenuClick={this.handleMenuClick}
              scrollToNext={this.scrollToProjects}
            />
          </div>

          <div className='project-slide' ref={'projectslide'}>
            <Projects
              scrollToNext={this.scrollToSkills}
            />
          </div>

          <div className='skill-slide' ref={'skillslide'}>
            <Skills
              scrollToNext={this.scrollToWork}
            />
          </div>

          <div className='work-slide' ref={'workslide'}>
            <Work
              scrollToNext={this.scrollToContact}
            />
          </div>

          <div className='contact-slide' ref={'contactslide'}>
            <Contact/>
          </div>

        </div>
    );
  }
}

export default App;
