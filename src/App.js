import React, {Component, Fragment } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col} from 'react-bootstrap';
import 'boxicons';
import './App.scss';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      readMoreSpin1: false,
      readMoreSpin2: false,
      readMoreSpin3: false,
      readMoreSpin4: false,
      readMoreSpin5: false,
      menuClick: false
    }
  }

  handleMenuClick = () => {
    this.refs.slide1.scrollIntoView();
    this.setState({menuClick: !this.state.menuClick});
  }

  handleMenuProjectClick = () => {
    this.setState({menuClick: false});
    const timer = setTimeout(() => {
      this.refs.slide2.scrollIntoView();
    }, 1000);
    return () => clearTimeout(timer);
  }

  handleMenuWorkClick = () => {
    this.setState({menuClick: false});
    const timer = setTimeout(() => {
      this.refs.slide3.scrollIntoView();
    }, 1000);
    return () => clearTimeout(timer);
  }

  handleMenuConnectClick = () => {
    this.setState({menuClick: false});
    const timer = setTimeout(() => {
      this.refs.slide4.scrollIntoView();
    }, 1000);
    return () => clearTimeout(timer);
  }

  render(){
    return (
      <Fragment>
        <div className='wrapper'>
          <div className={'overlay-menu ' + (this.state.menuClick ? ' open' : '')}>
            <h3 className={'overlay-name text-center' + (this.state.menuClick ? ' open' : '')}>Nina M. Huang</h3>
            <hr className={(this.state.menuClick ? ' open' : '')}/>
            <h2 className={'overlay-projects text-center my-3 w-100' + (this.state.menuClick ? ' open' : '')} onClick={this.handleMenuProjectClick}>projects.</h2> 
            <h2 className={'overlay-work text-center my-3 w-100' + (this.state.menuClick ? ' open' : '')} onClick={this.handleMenuWorkClick}>work.</h2>
            <h2 className={'overlay-contact text-center my-3 w-100' + (this.state.menuClick ? ' open' : '')} onClick={this.handleMenuConnectClick}>let's connect.</h2>     
          </div>
          <div className='slide-one' ref={'slide1'}>
            <div className='menu-bar w-100 pl-3 pt-3'>
              <span className={'menu-container' + (this.state.menuClick ? ' clicked' : '')} onClick={this.handleMenuClick}>
                <box-icon name={this.state.menuClick ? 'x' : 'menu'} color={'#F7FFFE'} size={'50px'}></box-icon>
              </span>
            </div>
            <div className='text-container'>
              <box-icon id='sun' type='solid' name='sun' color={'#F7FFFE'} size={'50px'}></box-icon>
              <h3>
                Hello, I am Nina M. Huang<span className='dot-one'>.</span><span className='dot-two'>.</span><span className='dot-three'>.</span>
              </h3>
              <h2>
                I am a computer engineering student <span className='ampersand'>&</span> front-end developer.
              </h2>
            </div>
            <div className='arrow-container w-100' onClick={() => this.refs.slide2.scrollIntoView()}>
              <box-icon name='chevrons-down' animation='chevrons-down-fade-down' color={'#F7FFFE'} size={'50px'}></box-icon>
            </div>
          </div>

          <div className='slide-two' ref={'slide2'}>
            <div className='stripe'>
              <h1 className='title m-0'>
                Projects.
              </h1>
            </div>
            <div className='slide-two-body'>
              <div className='project-container'>  
                <div className='featured-project'>
                  <h3 className='project-title'>
                    BirdWatchers iOS app
                  </h3>
                  <hr/>
                  <h2 className='project-info'>
                    Coming into this hackathon, my partner and I wanted to incorporate our interests in coding 
                    and environmentalism into one cohesive app. We drew inspiration from the various 
                    species of birds found near the UCSB lagoon and we wanted to learn more about 
                    the unique chaparral ecosystem. Thus this app was hatched from our interest of educating 
                    not only others, but also ourselves.
                  </h2>
                  <div className={'read-more-container w-100' + (this.state.readMoreSpin1 ? ' spin' : ' ')} onClick={() => this.setState({readMoreSpin1: true})} onAnimationEnd={() => this.setState({readMoreSpin1: false})}>
                    <box-icon className='read-more' name='plus-circle' type='solid' size={'50px'} color={'#F7FFFE'}></box-icon>
                  </div>
                </div>
                <Row>
                  <Col xs={6} className='project-one'>
                    <h3 className='project-title'>
                      LocoNote
                    </h3>
                    <hr/>
                    <h2 className='project-info text-center'>
                      Pin an emoji and short message in your current location 
                      to be viewed by other users of the iOS app
                    </h2>
                    <div className={'read-more-container w-100' + (this.state.readMoreSpin2 ? ' spin' : ' ')} onClick={() => this.setState({readMoreSpin2: true})} onAnimationEnd={() => this.setState({readMoreSpin2: false})}>
                      <box-icon className='read-more' name='plus-circle' type='solid' size={'50px'} color={'#F7FFFE'}></box-icon>
                    </div>
                  </Col>
                  <Col xs={6} className='project-two'>
                    <h3 className='project-title'>
                      Card Game
                    </h3>
                    <hr/>
                    <h2 className='project-info text-center'>
                      A simple 2-player card game that implements LinkedLists to remove matching cards
                    </h2>
                    <div className={'read-more-container w-100' + (this.state.readMoreSpin3 ? ' spin' : ' ')} onClick={() => this.setState({readMoreSpin3: true})} onAnimationEnd={() => this.setState({readMoreSpin3: false})}>
                      <box-icon className='read-more' name='plus-circle' type='solid' size={'50px'} color={'#F7FFFE'}></box-icon>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} className='project-three'>
                    <h3 className='project-title'>
                      Bee World
                    </h3>
                    <hr/>
                    <h2 className='project-info text-center'>
                      Control a bee, collect honey from flowers, shoot honey at wasps, 
                      and collect upgrades!
                    </h2>
                    <div className={'read-more-container w-100' + (this.state.readMoreSpin4 ? ' spin' : ' ')} onClick={() => this.setState({readMoreSpin4: true})} onAnimationEnd={() => this.setState({readMoreSpin4: false})}>
                      <box-icon className='read-more' name='plus-circle' type='solid' size={'50px'} color={'#F7FFFE'}></box-icon>
                    </div>
                  </Col>
                  <Col xs={6} className='project-four'>
                    <h3 className='project-title'>
                      wikiWhat
                    </h3>
                    <hr/>
                    <h2 className='project-info text-center'>
                      A short fun simple game about matching absurd wikiHow photos
                       with equally weird tutorial names.
                    </h2>
                    <div className={'read-more-container w-100' + (this.state.readMoreSpin5 ? ' spin' : ' ')} onClick={() => this.setState({readMoreSpin5: true})} onAnimationEnd={() => this.setState({readMoreSpin5: false})}>
                      <box-icon className='read-more' name='plus-circle' type='solid' size={'50px'} color={'#F7FFFE'}></box-icon>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className='arrow-container w-100' onClick={() => this.refs.slide3.scrollIntoView()}>
                <box-icon name='chevrons-down' animation='chevrons-down-fade-down' color={'#F7FFFE'} size={'50px'}></box-icon>
              </div>
            </div>
          </div>

          <div className='slide-three' ref={'slide3'}>
            <div className='stripe'>
              <h1 className='title m-0'>
                Work.
              </h1>
            </div>
            <div className='slide-three-body'>
              <div className='work-container'>
                <div className='featured-work'>

                </div>
                <Row>
                  <Col xs={6} className='work-one'>

                  </Col>
                  <Col xs={6} className='work-two'>

                  </Col>
                </Row>
              </div>
              <div className='arrow-container w-100' onClick={() => this.refs.slide4.scrollIntoView()}>
                <box-icon name='chevrons-down' animation='chevrons-down-fade-down' color={'#F7FFFE'} size={'50px'}></box-icon>
              </div>
            </div>
          </div>

          <div className='slide-four' ref={'slide4'}>
            <div className='contact-box-container'>
              <div className='title'>
                Say hi!
              </div>
              <div className='contact-box'>
                <Row>
                  <Col xs={8} className='left-side'>
                    <h3 className='email-text'>
                      ninamckenzie88@
                      <br/>gmail.com
                    </h3>
                    <hr/>
                    <h2 className='description'>
                      Hi! I'm Nina, a full-time student at UCSB and front-end developer based in Irvine. I love working with 
                      kids and am constantly learning something new (currently React). Feel free to reach
                       out and send me a quick email. Say hi!
                    </h2>
                    <div>
                      <a className='mr-2' href='https://github.com/neenbeannnn' rel='noopener noreferrer' target='_blank'>
                        <box-icon name='github' type='logo' size={'40px'} color={'#F7FFFE'}></box-icon>
                      </a>
                      <a href='https://www.linkedin.com/in/nina-huang-708a41171/' rel='noopener noreferrer' target='_blank'>
                        <box-icon name='linkedin-square' type='logo' size={'40px'} color={'#F7FFFE'}></box-icon>
                      </a>
                    </div>
                  </Col>
                  <Col xs={4}>
                    
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
        
      </Fragment>
    );
  }
}

export default App;
