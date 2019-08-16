import React, { Fragment, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col, Button } from 'react-bootstrap';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import 'boxicons';
import '../App.scss';

const project = {
    BirdWatchers: 0,
    LocoNote: 1,
    CardGame: 2,
    BeeWorld: 3,
    wikiWhat: 4
};

const BirdWatchers = {
    title: "BirdWatchers",
    description: "Have you ever seen a bird and wanted to know more about it? Well, I made an app called BirdWatcher that allows you to search up bird species at national parks and learn more about them.",
    challenges: "This app was the first iOS my partner and I had ever made so it was bit difficult learning the new syntax. However, after reading the documentation and watching YouTube videos, we were able to figure out most of the new elements needed.",
    what_i_learned: ["basics of XCode elements", "user-friendly styling such as drop-down menus and animations"]
}

const LocoNote = {
    title: "LocoNote",
    description: "The fast-paced lives of many students makes it difficult to remember what happened at a certain location and time. The app LocoNote allows the user to pin a note in a location and assign an emoji mood to it. See what other users of the app are up to and what kind of memories they might have in your favorite place!",
    created_with: "This app was created with Android Studio, and implements the Firebase database in order to store the user data. The map that makes up the majority of the app uses the Google Maps Api, which comes pre-installed with lots of nifty features to minimize the map work on the developer end."
}

const CardGame = {
    title: "Card Game"
}

const BeeWorld = {
    title: "Bee World"
}

const wikiWhat = {
    title: "wikiWhat"
}

class ProjectModal extends Component {
    render(){
        let currentProjectTitle;
        switch(this.props.currentProject){
            case project.BirdWatchers:
                currentProjectTitle = BirdWatchers;
                break;
            case project.LocoNote:
                currentProjectTitle = LocoNote;
                break;
            case project.CardGame:
                currentProjectTitle = CardGame;
                break;
            case project.BeeWorld:
                currentProjectTitle = BeeWorld;
                break;
            case project.wikiWhat:
                currentProjectTitle = wikiWhat;
                break;
            default:
                currentProjectTitle = 'No project found!';
        }
        return(
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
                <ModalHeader>
                    <div className='clickable text-right'>
                        <box-icon name='x' size='32px' color='#F7FFFE' onClick={this.props.toggle}/>
                    </div>
                    <h1>{currentProjectTitle.title}</h1>
                </ModalHeader>
                <ModalBody>
                    <div className='title-text'>description.</div>
                    <p className='text'>{currentProjectTitle.description}</p>
                    {currentProjectTitle.created_with && <Fragment>
                        <div className='title-text'>created with.</div>
                        <div className='text'>{currentProjectTitle.created_with}</div>
                    </Fragment>}
                    {currentProjectTitle.challenges && <Fragment>
                        <div className='title-text'>challenges.</div>
                        <p className='text'>{currentProjectTitle.challenges}</p>
                    </Fragment>}
                    <div className='title-text'>what i learned.</div>
                    <ul className='text'>{ currentProjectTitle.what_i_learned && currentProjectTitle.what_i_learned.map((element, i) => <li key={i}>{element}</li>)}</ul>
                </ModalBody>
            </Modal>
        );
    }
}

export default ProjectModal;