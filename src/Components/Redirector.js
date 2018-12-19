import React, { Component } from 'react';
import ScrollSwipe from 'scroll-swipe';

class Redirector extends Component {
    constructor(location) {
        super();
        this.state = {
            redirect: false,
            to: {}
        };
        this.createScrollSwipe();

    }

    render() {
        return <div></div>
    }

    componentWillUnmount() {
        this.ss.killAll();
    }

    createScrollSwipe = () => {
        this.ss = new ScrollSwipe({
            target: document, // Element must be a single dom-node per ScrollSwipe Instance
            scrollSensitivity: 0, // The lower the number, the more sensitive
            touchSensitivity: 0, // The lower the number, the more senitive
            scrollPreventDefault: true, // prevent default option for scroll events
            touchPreventDefault: true, // prevent default option for touch events
            scrollCb: this.handleScroll,  // The action you wish to perform when a scroll reacts (details below)
            touchCb: this.handleScroll // The action you wish to perform when a touch reacts (details below)
        });
    }

    redirect = (direction) => {
        let pushState;
        if(direction === 'forward') {
            pushState = { prev: true };
        }
        else if(direction === 'backward') {
            pushState = { prev: false };
        }

        if(this.props.history.location.pathname === '/' )
        {
          if(direction === 'forward')
            this.props.history.push({  pathname: '/Works', state: pushState});
        }
        else if(this.props.history.location.pathname === '/Works')
        {
          if(direction === 'backward')
            this.props.history.push({  pathname: '/', state: pushState});
        }
        this.createScrollSwipe();
    }

    handleScroll = (data) => {
        if (data.direction === "VERTICAL" && data.intent > 0) {//scrolled top
            this.redirect('forward');
        }
        else if (data.direction === "VERTICAL" && data.intent <= 0) {//scrolled top
            this.redirect('backward');
        }
    }
}

export default Redirector;
