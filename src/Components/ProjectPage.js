import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import { Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'boxicons';

const ProjectComponent = {
    BirdWatcher: 0

};

class ProjectPage extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            ProjectComponent: ProjectComponent.BirdWatcher
        }
    }

    ProjectSwitch = () => {
        switch(this.state.ProjectComponent) { 
            case ProjectComponent.BirdWatcher:
                return (
                    <Fragment>
                        <h1 className='title text-center'>-Birdwatcher-</h1>
                        <div className='body'>
                            <div className='description-box left mb-3'>
                                This iOS app was created at WomxnHacks, and is geared toward adventure enthusiasts 
                                and those interested in learning more about the wildlife in national parks. My partner 
                                and I were inspired by the chaparral environment surrounding UCSB's lagoon and wanted 
                                to combine our interests into making our first app.
                            </div>
                            <div className='description-box right mt-3'>

                            </div>
                        </div>
                    </Fragment>
                );
            default:
                return (
                    <h1>
                        Error, no project found!
                    </h1>
                );
        }
    }

    render() {
        return (
            <div className='projectpage-container'>
                <Link to='/'>
                    <div className='backbutton-container'>
                        <box-icon type='solid' color='#1E3B44' name='left-arrow-circle' size='50px'></box-icon>
                    </div>
                </Link>
                <div className='project-container'>
                    {this.ProjectSwitch()}
                </div>
            </div>
        );
    }
}

export default ProjectPage;