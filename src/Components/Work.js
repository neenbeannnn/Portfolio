import React, {Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col} from 'react-bootstrap';
import 'boxicons';
import '../App.scss';

class Work extends Component {

    render() {
        return (
            <Fragment>  
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
                    <div className='arrow-container w-100' onClick={this.props.scrollToNext}>
                    <box-icon name='chevrons-down' animation='chevrons-down-fade-down' color={'#F7FFFE'} size={'50px'}></box-icon>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Work;