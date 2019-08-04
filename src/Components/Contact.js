import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col} from 'react-bootstrap';
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
            </Fragment>
        );
    }
}
export default Contact;