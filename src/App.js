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
      readMoreSpin1: false
    }
  }

  render(){
    return (
      <Fragment>
        <div className='wrapper'>
          <div className='slide-one'>

            <div className='text-container'>
              <box-icon id='sun' type='solid' name='sun' color={'#F7FFFE'} size={'50px'} onClick={this.handleSun}></box-icon>
              <h3>
                Hello, I am Nina M. Huang<span className='dot-one'>.</span><span className='dot-two'>.</span><span className='dot-three'>.</span>
              </h3>
              <h2>
                I am a computer engineering student <span className='ampersand'>&</span> front-end developer.
              </h2>
            </div>
            <div className='arrow-container' onClick={() => this.refs.slide2.scrollIntoView()}>
              <box-icon name='chevrons-down' animation='chevrons-down-fade-down' color={'#F7FFFE'} size={'50px'}></box-icon>
            </div>
          </div>

          <div className='slide-two' ref={'slide2'}>
            <div className='stripe'>
              <h1 className='title'>
                Projects.
              </h1>
            </div>
            <div className='slide-two-body'>
              <div className='project-container'>  
                <div className='featured-project'>
                  <h3 className='featured-project-title'>
                    BirdWatchers iOS app
                  </h3>
                  <hr/>
                  <h2 className='featured-project-info'>
                    Coming into this hackathon, my partner and I wanted to incorporate our interests in coding 
                    and environmentalism into one cohesive app. We drew inspiration from the various 
                    species of birds found near the UCSB lagoon and we wanted to learn more about 
                    the unique chaparral ecosystem. Thus this app was hatched from our interest of educating 
                    not only others, but also ourselves.
                  </h2>
                  <div className={'read-more-container' + (this.state.readMoreSpin1 ? ' spin' : ' ')} onClick={() => this.setState({readMoreSpin1: true})} onAnimationEnd={() => this.setState({readMoreSpin1: false})}>
                    <box-icon className='read-more' name='plus-circle' type='solid' size={'50px'} color={'#F7FFFE'}></box-icon>
                  </div>
                </div>
                <Row>
                  <Col xs={6} className='project-one'>
                  
                  </Col>
                  <Col xs={6} className='project-two'>

                  </Col>
                </Row>
                <Row>
                  <Col xs={6} className='project-three'>
                  
                  </Col>
                  <Col xs={6} className='project-four'>

                  </Col>
                </Row>
              </div>
              <div className='arrow-container ' onClick={() => this.refs.slide3.scrollIntoView()}>
                <box-icon name='chevrons-down' animation='chevrons-down-fade-down' color={'#F7FFFE'} size={'50px'}></box-icon>
              </div>
            </div>
          </div>

          <div className='slide-three' ref={'slide3'}>
            <div className='stripe'>
              <h1 className='title'>
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
              <div className='arrow-container' onClick={() => this.refs.slide4.scrollIntoView()}>
                <box-icon name='chevrons-down' animation='chevrons-down-fade-down' color={'#F7FFFE'} size={'50px'}></box-icon>
              </div>
            </div>
          </div>

          <div className='slide-four' ref={'slide4'}>
            <div className='title'>
              Say hi!
            </div>
            <div className='contact-box-container'>
              <div className='contact-box'>
                <Row>
                  <Col xs={8} className='left-side'>
                    
                  </Col>
                  <Col xs={4} className='right-side'>
                    
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
