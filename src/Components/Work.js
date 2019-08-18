import React, {Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col} from 'react-bootstrap';
import 'boxicons';
import '../App.scss';

class Work extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            workOneHover: false,
            workTwoHover: false,
            workThreeHover: false
        }
    }

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
                    <div className='featured-work' onMouseEnter={() => this.setState({workOneHover: true})} onMouseLeave={() => this.setState({workOneHover: false})}>
                        <div className='date-stamp p-2'>
                            Summer 2019
                        </div>
                        <h3 className='work-title'>
                            Frontend Web Dev Intern
                        </h3>
                        <h2 className='work-subtitle'>
                            Creek & River Global Co.
                        </h2>
                        <hr className={this.state.workOneHover ? 'hover' : ''}/>
                        <Row>
                            <Col xs={3}>
                                <div className='subsection pink'>tech used.</div>
                                <ul className='list mt-2'>
                                    <li>React.js</li>
                                    <li>HTML</li>
                                    <li>Sass</li>
                                    <li>Bootstrap</li>
                                    <li>Flexbox</li>
                                    <li>Formix</li>
                                    <li>Yup Validation</li>
                                    <li>React Helmet</li>
                                </ul>    
                            </Col>
                            <Col xs={9}>
                                <div className='subsection pink'>description.</div>
                                <div className='mt-2 work-info'>
                                    For the <span className='emphasize-text'>Medpius</span> site, my first task was to convert the vanilla HTML, CSS, and JS to a <span className='emphasize-text'>React</span> application.
                                    I also worked on implementing a <span className='emphasize-text'>carousel slideshow</span> for the About Us page.
                                    I also created multiple <span className='emphasize-text'>pop-up modals</span> including a login modal using <span className='emphasize-text'>Formix and Yup Validation</span>.
                                    In order to improve <span className='emphasize-text'>SEO</span> for Medpius, I integrated <span className='emphasize-text'>React Helmet</span>.
                                </div>
                                <div className='mt-2 work-info'>
                                    For the <span className='emphasize-text'>Juristerra</span> site, I worked on <span className='emphasize-text'>restructuring</span> the Juristerra Internal Admin page in order to prioritize <span className='emphasize-text'>maintainability</span> and <span className='emphasize-text'>reduce unused code</span>.
                                    I also worked on connecting parts of the frontend to the backend <span className='emphasize-text'>API calls</span>.
                                </div>
                            </Col>
                        </Row>
                        <div className='read-more-container w-100'>
                            <box-icon className='read-more' name='plus-circle' type='solid' size={'50px'} color={'#F7FFFE'}></box-icon>
                        </div>
                    </div>
                    <Row>
                        <Col xs={6} className='work-one' onMouseEnter={() => this.setState({workTwoHover: true})} onMouseLeave={() => this.setState({workTwoHover: false})}>
                            <div className='date-stamp p-2'>
                                2014 - Current
                            </div>
                            <h3 className='work-title'>
                                CS Aide
                            </h3>
                            <h2 className='work-subtitle'>
                                City of Irvine Parks & Recreation
                            </h2>
                            <hr className={this.state.workTwoHover ? 'hover' : ''}/>
                            <div className='work-info mb-5'>
                                I work at <span className='emphasize-text'>Deerfield & University Park</span>, where I led and assisted with <span className='emphasize-text'>art and recreation</span> classes for children ages 3-10.
                                I constantly strive to create a <span className='emphasize-text'>positive</span> and nurturing environment for the children.
                                An integral part of my job is to <span className='emphasize-text'>communicate</span> effectively as well as recognize when I have to step up as a <span className='emphasize-text'>leader</span>.
                            </div>
                        </Col>
                        <Col xs={6} className='work-two' onMouseEnter={() => this.setState({workThreeHover: true})} onMouseLeave={() => this.setState({workThreeHover: false})}>
                            <div className='date-stamp contrast p-2'>
                                2017 - 2018
                            </div>
                            <h3 className='work-title'>
                                English Tutor
                            </h3>
                            <h2 className='work-subtitle'>
                                Self-employed
                            </h2>
                            <hr className={this.state.workThreeHover ? 'hover' : ''}/>
                            <div className='work-info mb-5'>
                                I tutored an elementary-level <span className='emphasize-text contrast'>international</span> student <span className='emphasize-text contrast'>twice</span> a week.
                                The student improved his <span className='emphasize-text contrast'>English reading</span> skills from barely being able to read to reading chapter novels.
                                I helped him by preparing him for <span className='emphasize-text contrast'>weekly presentations</span> and <span className='emphasize-text contrast'>teaching</span> him basic techniques to sound out words.
                            </div>
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