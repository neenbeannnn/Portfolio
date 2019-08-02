import React, {Hooks, Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col} from 'react-bootstrap';
import 'boxicons';
import './App.scss';
import Projects from './Components/Projects'

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      menuClick: false
    }
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
    const projectslide = this.useRef(null);

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
          <div className='home-slide' ref={'homeslide'}>
            <div className='menu-bar w-100 pl-3 pt-3'>
              <span className={'menu-container' + (this.state.menuClick ? ' clicked' : '')} onClick={this.handleMenuClick}>
                <box-icon name={this.state.menuClick ? 'x' : 'menu'} color={'#F7FFFE'} size={'50px'}></box-icon>
              </span>
            </div>
            <div className='text-container'>
              <h3>
                Hello, I am Nina M. Huang<span className='dot-one'>.</span><span className='dot-two'>.</span><span className='dot-three'>.</span>
              </h3>
              <h2>
                I am a computer engineering student <span className='ampersand'>&</span> front-end developer.
              </h2>
            </div>
            <div className='arrow-container w-100' onClick={() => projectslide.current.focus()}>
              <box-icon name='chevrons-down' animation='chevrons-down-fade-down' color={'#F7FFFE'} size={'50px'}></box-icon>
            </div>
          </div>

          <Projects ref={projectslide}/>

          <div className='work-slide' ref={'workslide'}>
            <div className='stripe'>
              <h1 className='title m-0'>
                Work.
              </h1>
            </div>
            <div className='work-body'>
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
              <div className='arrow-container w-100' onClick={() => this.refs.contactslide.scrollIntoView()}>
                <box-icon name='chevrons-down' animation='chevrons-down-fade-down' color={'#F7FFFE'} size={'50px'}></box-icon>
              </div>
            </div>
          </div>

          <div className='contact-slide' ref={'contactslide'}>
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
