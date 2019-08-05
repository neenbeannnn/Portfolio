import React, {Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'boxicons';
import '../App.scss';

const SkillSelected = {
    React: 0,
    CPlusPlus: 1,
    Bash: 2,
    HtmlCss: 3
};

class Skills extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            descriptionOpen: false,
            skillSelected: SkillSelected.React
        }
    }

    SkillContentSwitch = () => {
        switch(this.state.skillSelected) {
            case SkillSelected.React:
                return (
                    <h1>React</h1>
                );
            case SkillSelected.CPlusPlus:
                return (
                    <h1>C++</h1>
                );
            case SkillSelected.Bash:
                return (
                    <h1>Bash</h1>
                );
            case SkillSelected.HtmlCss:
                return (
                    <h1>Html/Css</h1>
                );
            default:
                return (
                    <h1>No skill selected</h1>
                );
        }
    }

    render() {
        return (
            <Fragment>
                <div className='stripe'>
                    <h1 className='title m-0'>
                        Skills.
                    </h1>
                </div>
                
                <div className='skills-container'>
                    
                    <div className='skill-bubble' onClick={() => this.setState({descriptionOpen: true})}>REACT</div>
                    <div className='skill-bubble' onClick={() => this.setState({descriptionOpen: true})}>C++</div>
                    <div className='skill-bubble' onClick={() => this.setState({descriptionOpen: true})}>BASH</div>
                    <div className='skill-bubble' onClick={() => this.setState({descriptionOpen: true})}>HTML/CSS</div>
                    <div className={'skill-description' + (this.state.descriptionOpen ? ' open' : '')}>
                        <div className='x-container' onClick={() => this.setState({descriptionOpen: false})}>
                            <box-icon name='x' size={(this.state.descriptionOpen ? '50px' : '0px')}></box-icon>
                        </div>
                        <div className={'description-body p-3' + (this.state.descriptionOpen ? ' show' : '')}>
                            {this.SkillContentSwitch}
                        </div>
                    </div>
                    <svg viewBox='0 0 500 500'>
                        <path 
                            d="M 90 0 Q 800 155 110 400 Q 5 440 85 500"
                            className='svg-path'
                        />
                    </svg>
                </div>
                <div className='arrow-container w-100' onClick={this.props.scrollToNext}>
                    <box-icon name='chevrons-down' animation='chevrons-down-fade-down' color={'#1E3B44'} size={'50px'}></box-icon>
                </div>
            </Fragment>
        );
    }
}

export default Skills;