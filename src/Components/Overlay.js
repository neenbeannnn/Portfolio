import React, {Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'boxicons';
import '../App.scss';

class Overlay extends Component {
    render() {
        return (
            <div className={'overlay-menu ' + (this.props.menuClick ? ' open' : '')}>
                <h3 className={'overlay-name text-center' + (this.props.menuClick ? ' open' : '')}>Nina M. Huang</h3>
                <hr className={(this.props.menuClick ? ' open' : '')}/>
                <h2 className={'overlay-projects text-center my-3 w-100' + (this.props.menuClick ? ' open' : '')} onClick={this.props.handleMenuProjectClick}>projects.</h2> 
                <h2 className={'overlay-skills text-center my-3 w-100' + (this.props.menuClick ? ' open' : '')} onClick={this.props.handleMenuSkillClick}>skills.</h2>
                <h2 className={'overlay-work text-center my-3 w-100' + (this.props.menuClick ? ' open' : '')} onClick={this.props.handleMenuWorkClick}>work.</h2>
                <h2 className={'overlay-contact text-center my-3 w-100' + (this.props.menuClick ? ' open' : '')} onClick={this.props.handleMenuConnectClick}>say hi.</h2>     
            </div>
        );
    }
}

export default Overlay;