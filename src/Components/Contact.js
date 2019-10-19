import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col } from 'react-bootstrap';
import 'boxicons';
import '../App.scss';

class Contact extends Component {
    render() {
        return (
            <Fragment>
                <div className='contact-box-container'>
                    <div className='title'>
                        Say hi!
                    </div>
                    <div className='contact-box'>
                        <Row>
                            <Col xs={12} xl={8} className='left-side'>
                                <h2 className='email-text'>
                                    <a className='email' href='mailto:ninamckenzie88@gmail.com'>ninamckenzie88@gmail.com</a>
                                </h2>
                                <hr />
                                <h2 className='description'>
                                    Hi! I'm Nina, a full-time student at UC Santa Barbara. I love working with
                                kids and am constantly learning something new. Currently, I am learning basic circuitry using the Arduino. Check out my resume <a href='https://docs.google.com/document/d/1npzpRFrqcwMQ_I5rLDcImGNeuMjhLftKivvFVpSVX2c/edit?usp=sharingi' rel='noopener noreferrer' target='_blank'>here</a> and feel free to reach out to say hi!
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
                            {/* <Col xs={4}>

                            </Col> */}
                        </Row>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default Contact;