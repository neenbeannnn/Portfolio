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
                <div className='position-relative'>
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
                        <span className={'skill-card m-1' + (this.state.cardFiveHover ? ' hover-orange' : '')} onMouseEnter={() => this.setState({cardFiveHover: true})} onMouseLeave={() => this.setState({cardFiveHover: false})}>Formik</span>
                        <span className={'skill-card m-1' + (this.state.cardSixHover ? ' hover-orange' : '')} onMouseEnter={() => this.setState({cardSixHover: true})} onMouseLeave={() => this.setState({cardSixHover: false})}>Yup Validation</span>
                        <span className={'skill-card m-1' + (this.state.cardEightHover ? ' hover-blue' : '')} onMouseEnter={() => this.setState({cardEightHover: true})} onMouseLeave={() => this.setState({cardEightHover: false})}>Java</span>
                        <span className={'skill-card m-1' + (this.state.cardElevenHover ? ' hover-orange' : '')} onMouseEnter={() => this.setState({cardElevenHover: true})} onMouseLeave={() => this.setState({cardElevenHover: false})}>React Helmet</span>
                        <span className={'skill-card m-1' + (this.state.cardTenHover ? ' hover-blue' : '')} onMouseEnter={() => this.setState({cardTenHover: true})} onMouseLeave={() => this.setState({cardTenHover: false})}>Bash</span>
                        <span className={'skill-card m-1' + (this.state.cardTwelveHover ? ' hover-pink' : '')} onMouseEnter={() => this.setState({cardTwelveHover: true})} onMouseLeave={() => this.setState({cardTwelveHover: false})}>Arduino</span>
                        <span className={'skill-card m-1' + (this.state.cardSevenHover ? ' hover-orange' : '')} onMouseEnter={() => this.setState({cardSevenHover: true})} onMouseLeave={() => this.setState({cardSevenHover: false})}>Styled Icons</span>
                        <span className={'skill-card m-1' + (this.state.cardThirteenHover ? ' hover-pink' : '')} onMouseEnter={() => this.setState({cardThirteenHover: true})} onMouseLeave={() => this.setState({cardThirteenHover: false})}>Visual Studio Code</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='svg-middle'><path fill="#C9F5F9" fill-opacity="1" d="M0,192L60,176C120,160,240,128,360,144C480,160,600,224,720,245.3C840,267,960,245,1080,245.3C1200,245,1320,267,1380,277.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='svg-back'><path fill="#8ED8DE" fill-opacity="1" d="M0,96L26.7,117.3C53.3,139,107,181,160,202.7C213.3,224,267,224,320,208C373.3,192,427,160,480,144C533.3,128,587,128,640,133.3C693.3,139,747,149,800,160C853.3,171,907,181,960,160C1013.3,139,1067,85,1120,64C1173.3,43,1227,53,1280,48C1333.3,43,1387,21,1413,10.7L1440,0L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='svg-front'><path fill="#E4FAFC" fill-opacity="1" d="M0,160L40,181.3C80,203,160,245,240,245.3C320,245,400,203,480,197.3C560,192,640,224,720,245.3C800,267,880,277,960,266.7C1040,256,1120,224,1200,181.3C1280,139,1360,85,1400,58.7L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
                    <div className='arrow-container w-100 skills-arrow' onClick={this.props.scrollToNext}>
                        <box-icon name='chevrons-down' animation='chevrons-down-fade-down' color={'#1E3B44'} size={'50px'}></box-icon>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Skills;