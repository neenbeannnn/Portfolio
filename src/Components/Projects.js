import React, { Fragment, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col } from 'react-bootstrap';
import ProjectModal from './ProjectModal';
import '../App.scss';

const project = {
  BirdWatchers: 0,
  LocoNote: 1,
  Portfolio: 2,
  BeeWorld: 3,
  wikiWhat: 4
};

class Projects extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      readMoreSpin1: false,
      readMoreSpin2: false,
      readMoreSpin3: false,
      readMoreSpin4: false,
      readMoreSpin5: false,
      modalOpen: false,
      selectedProject: -1,
      projectOneHover: false,
      projectTwoHover: false,
      projectThreeHover: false,
      projectFourHover: false,
      projectFiveHover: false
    }
  }

  render() {
    return (
      <Fragment>
        <ProjectModal
          isOpen={this.state.modalOpen}
          toggle={() => this.setState({ modalOpen: !this.state.modalOpen })}
          currentProject={this.state.selectedProject}
        />
        <div className='stripe'>
          <h1 className='title m-0'>
            Projects.
              </h1>
        </div>
        <div className='project-body'>
          <div className='project-container'>

            <div className='featured-project' onMouseEnter={() => this.setState({ projectOneHover: true })} onMouseLeave={() => this.setState({ projectOneHover: false })}>
              <h3 className='project-title'>
                BirdWatchers iOS app
                  </h3>
              <hr className={this.state.projectOneHover ? 'hover' : ''} />
              <h2 className='project-info'>
                Coming into this hackathon, my partner and I wanted to incorporate our interests in coding
                and environmentalism into one cohesive app. We drew inspiration from the various
                species of birds found near the UCSB lagoon and we wanted to learn more about
                the unique chaparral ecosystem. Thus this app was hatched from our interest of educating
                not only others, but also ourselves.
                  </h2>
              <div className={'read-more-container w-100' + (this.state.readMoreSpin1 ? ' spin' : ' ')} onClick={() => this.setState({ readMoreSpin1: true, selectedProject: project.BirdWatchers, modalOpen: true })} onAnimationEnd={() => this.setState({ readMoreSpin1: false })}>
                <box-icon className='read-more' name='plus-circle' type='solid' size={'50px'} color={'#F7FFFE'}></box-icon>
              </div>
            </div>

            <Row>
              <Col xs={12} sm={6} className='project-one' onMouseEnter={() => this.setState({ projectTwoHover: true })} onMouseLeave={() => this.setState({ projectTwoHover: false })}>
                <h3 className='project-title'>
                  LocoNote
                    </h3>
                <hr className={this.state.projectTwoHover ? 'hover' : ''} />
                <h2 className='project-info text-center'>
                  Pin an emoji and short message in your current location
                  to be viewed by other users of the iOS app
                    </h2>
                <div className={'read-more-container w-100' + (this.state.readMoreSpin2 ? ' spin' : ' ')} onClick={() => this.setState({ readMoreSpin2: true, selectedProject: project.LocoNote, modalOpen: true })} onAnimationEnd={() => this.setState({ readMoreSpin2: false })}>
                  <box-icon className='read-more' name='plus-circle' type='solid' size={'50px'} color={'#F7FFFE'}></box-icon>
                </div>
              </Col>
              <Col xs={12} sm={6} className='project-two' onMouseEnter={() => this.setState({ projectThreeHover: true })} onMouseLeave={() => this.setState({ projectThreeHover: false })}>
                <h3 className='project-title'>
                  Portfolio
                    </h3>
                <hr className={this.state.projectThreeHover ? 'hover' : ''} />
                <h2 className='project-info text-center'>
                  This work-in-progress portfolio site was created to showcase my work, as well as challenge myself to see a website from start to end.
                    </h2>
                <div className={'read-more-container w-100' + (this.state.readMoreSpin3 ? ' spin' : ' ')} onClick={() => this.setState({ readMoreSpin3: true, selectedProject: project.Portfolio, modalOpen: true })} onAnimationEnd={() => this.setState({ readMoreSpin3: false })}>
                  <box-icon className='read-more' name='plus-circle' type='solid' size={'50px'} color={'#F7FFFE'}></box-icon>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={6} className='project-three' onMouseEnter={() => this.setState({ projectFourHover: true })} onMouseLeave={() => this.setState({ projectFourHover: false })}>
                <h3 className='project-title'>
                  Bee World
                    </h3>
                <hr className={this.state.projectFourHover ? 'hover' : ''} />
                <h2 className='project-info text-center'>
                  Control a bee, collect honey from flowers, shoot honey at wasps,
                  and collect upgrades!
                    </h2>
                <div className={'read-more-container w-100' + (this.state.readMoreSpin4 ? ' spin' : ' ')} onClick={() => this.setState({ readMoreSpin4: true, selectedProject: project.BeeWorld, modalOpen: true })} onAnimationEnd={() => this.setState({ readMoreSpin4: false })}>
                  <box-icon className='read-more' name='plus-circle' type='solid' size={'50px'} color={'#F7FFFE'}></box-icon>
                </div>
              </Col>
              <Col xs={12} sm={6} className='project-four' onMouseEnter={() => this.setState({ projectFiveHover: true })} onMouseLeave={() => this.setState({ projectFiveHover: false })}>
                <h3 className='project-title'>
                  wikiWhat
                    </h3>
                <hr className={this.state.projectFiveHover ? 'hover' : ''} />
                <h2 className='project-info text-center'>
                  A short fun simple game about matching absurd wikiHow photos
                  with equally weird tutorial names.
                    </h2>
                <div className={'read-more-container w-100' + (this.state.readMoreSpin5 ? ' spin' : ' ')} onClick={() => this.setState({ readMoreSpin5: true, selectedProject: project.wikiWhat, modalOpen: true })} onAnimationEnd={() => this.setState({ readMoreSpin5: false })}>
                  <box-icon className='read-more' name='plus-circle' type='solid' size={'50px'} color={'#F7FFFE'}></box-icon>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Projects;