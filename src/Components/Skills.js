import React, {Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col} from 'react-bootstrap';
import 'boxicons';
import '../App.scss';

class Skills extends Component {
    render() {
        return (
            <Fragment>
                <div className='stripe'>
                    <h1 className='title m-0'>
                        Skills.
                    </h1>
                </div>
                <div className='skills-body'>
                <div className='skills-container'>
                    <div className='featured-skill'>

                    </div>
                    <Row>
                        <Col xs={6} className='skill-one'>

                        </Col>
                        <Col xs={6} className='skill-two'>

                        </Col>
                    </Row>
                    </div>
                    <div className='arrow-container w-100' onClick={this.props.scrollToNext}>
                    <box-icon name='chevrons-down' animation='chevrons-down-fade-down' color={'#1E3B44'} size={'50px'}></box-icon>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Skills;