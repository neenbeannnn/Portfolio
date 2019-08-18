import React, {Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'boxicons';
import '../App.scss';

class Skills extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            cardOneHover: false,
            cardTwoHover: false,
            cardThreeHover: false,
            cardFourHover: false,
            cardFiveHover: false,
            cardSixHover: false,
            cardSevenHover: false,
            cardEightHover: false,
            cardNineHover: false,
            cardTenHover: false,
            cardElevenHover: false,
            cardTwelveHover: false,
            cardThirteenHover: false,
            cardFourteenHover: false,
            cardFifteenHover: false
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
                    <span className={'skill-card m-1' + (this.state.cardOneHover ? ' hover-blue' : '')} onMouseEnter={() => this.setState({cardOneHover: true})} onMouseLeave={() => this.setState({cardOneHover: false})}>React.js</span>
                    <span className={'skill-card m-1' + (this.state.cardNineHover ? ' hover-blue' : '')} onMouseEnter={() => this.setState({cardNineHover: true})} onMouseLeave={() => this.setState({cardNineHover: false})}>C++</span>
                    <span className={'skill-card m-1' + (this.state.cardThreeHover ? ' hover-blue' : '')} onMouseEnter={() => this.setState({cardThreeHover: true})} onMouseLeave={() => this.setState({cardThreeHover: false})}>Bootstrap</span>
                    <span className={'skill-card m-1' + (this.state.cardFourteenHover ? ' hover-orange' : '')} onMouseEnter={() => this.setState({cardFourteenHover: true})} onMouseLeave={() => this.setState({cardFourteenHover: false})}>Flexbox</span>
                    <span className={'skill-card m-1' + (this.state.cardTwoHover ? ' hover-blue' : '')} onMouseEnter={() => this.setState({cardTwoHover: true})} onMouseLeave={() => this.setState({cardTwoHover: false})}>HTML</span>
                    <span className={'skill-card m-1' + (this.state.cardFourHover ? ' hover-blue' : '')} onMouseEnter={() => this.setState({cardFourHover: true})} onMouseLeave={() => this.setState({cardFourHover: false})}>CSS</span>
                    <span className={'skill-card m-1' + (this.state.cardFifteenHover ? ' hover-blue' : '')} onMouseEnter={() => this.setState({cardFifteenHover: true})} onMouseLeave={() => this.setState({cardFifteenHover: false})}>Sass</span>
                    <span className={'skill-card m-1' + (this.state.cardFiveHover ? ' hover-orange' : '')} onMouseEnter={() => this.setState({cardFiveHover: true})} onMouseLeave={() => this.setState({cardFiveHover: false})}>Formix</span>
                    <span className={'skill-card m-1' + (this.state.cardSixHover ? ' hover-orange' : '')} onMouseEnter={() => this.setState({cardSixHover: true})} onMouseLeave={() => this.setState({cardSixHover: false})}>Yup Validation</span>
                    <span className={'skill-card m-1' + (this.state.cardEightHover ? ' hover-blue' : '')} onMouseEnter={() => this.setState({cardEightHover: true})} onMouseLeave={() => this.setState({cardEightHover: false})}>Java</span>
                    <span className={'skill-card m-1' + (this.state.cardElevenHover ? ' hover-orange' : '')} onMouseEnter={() => this.setState({cardElevenHover: true})} onMouseLeave={() => this.setState({cardElevenHover: false})}>React Helmet</span>
                    <span className={'skill-card m-1' + (this.state.cardTenHover ? ' hover-blue' : '')} onMouseEnter={() => this.setState({cardTenHover: true})} onMouseLeave={() => this.setState({cardTenHover: false})}>Bash</span>
                    <span className={'skill-card m-1' + (this.state.cardTwelveHover ? ' hover-pink' : '')} onMouseEnter={() => this.setState({cardTwelveHover: true})} onMouseLeave={() => this.setState({cardTwelveHover: false})}>Arduino</span>
                    <span className={'skill-card m-1' + (this.state.cardSevenHover ? ' hover-orange' : '')} onMouseEnter={() => this.setState({cardSevenHover: true})} onMouseLeave={() => this.setState({cardSevenHover: false})}>Styled Icons</span>
                    <span className={'skill-card m-1' + (this.state.cardThirteenHover ? ' hover-pink' : '')} onMouseEnter={() => this.setState({cardThirteenHover: true})} onMouseLeave={() => this.setState({cardThirteenHover: false})}>Visual Studio Code</span>
                </div>
                <div className='arrow-container w-100' onClick={this.props.scrollToNext}>
                    <box-icon name='chevrons-down' animation='chevrons-down-fade-down' color={'#1E3B44'} size={'50px'}></box-icon>
                </div>
            </Fragment>
        );
    }
}

export default Skills;