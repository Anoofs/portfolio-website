import React, { Component } from 'react'; 
import './TopNav.css';

class TopNav extends Component {
    render() {
        return (
            <div id="topNavContainer" className="bobDown">
                <nav className="topNav">
                    <div className="leftAligned">
                        <a className="indexLink scalable" href="">Anoof Shaikh</a>
                    </div>
                    <div className="rightAligned">
                        <a className="socialIcon" href=""><i className="fa fa-linkedin scaleIn1 hoverable"></i></a>
                        <a className="socialIcon" href=""><i className="fa fa-twitter scaleIn1 hoverable"></i></a>
                        <a className="socialIcon" href=""><i className="fa fa-instagram scaleIn1 hoverable"></i></a>
                    </div>
                    <div className="hamburgerContainer">
                        <a className="socialIcon" href=""><i className="fa fa-bars hoverable"></i></a>
                    </div>
                </nav>
            </div>
        );
    }
}

export default TopNav;