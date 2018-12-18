import React, { Component } from 'react';
import './TopNav.css';

class TopNav extends Component {
    render() {
        return (
            <div id="topNavContainer" className="bobDown">
                <nav className="topNav">
                    <div className="leftAligned">
                        <a className="indexLink  scaleLow" href="">Anoof Shaikh</a>
                    </div>
                    <div className="rightAligned">
                        <a className="socialIcon" href=""><i className="fa fa-linkedin hoverScale"></i></a>
                        <a className="socialIcon" href=""><i className="fa fa-twitter hoverScale"></i></a>
                        <a className="socialIcon" href=""><i className="fa fa-instagram hoverScale"></i></a>
                    </div>
                    <div className="hamburgerContainer">
                        <a className="socialIcon" href=""><i className="fa fa-bars hoverScale"></i></a>
                    </div>
                </nav>
            </div>
        );
    }
}

export default TopNav;
