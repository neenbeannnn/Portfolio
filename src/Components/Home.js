import React, { Fragment, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'boxicons';
import '../App.scss';

class Home extends Component {

    render() {
        return (
            <Fragment>
                <div className='menu-bar w-100 pl-3 pt-3'>
                <span className={'menu-container' + (this.props.menuClick ? ' clicked' : '')} onClick={this.props.handleMenuClick}>
                    <box-icon name={this.props.menuClick ? 'x' : 'menu'} color={'#F7FFFE'} size={'50px'}></box-icon>
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
                <div className='arrow-container w-100' onClick={this.props.scrollToNext}>
                <box-icon name='chevrons-down' animation='chevrons-down-fade-down' color={'#F7FFFE'} size={'50px'}></box-icon>
                </div>
            </Fragment>
        );
    }
}

export default Home;