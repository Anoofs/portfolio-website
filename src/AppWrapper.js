import React, { Component } from 'react';
import { BrowserHistory, Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ScrollSwipe from 'scroll-swipe';
import Home from './Components/Home';
import Works from './Components/Works';
import TopNav from './Components/TopNav';

        // <Route exact path='/about' component = { About }/> 
        // <Route exact path='/contact' component = { Contact }/> 

class App extends Component {
    constructor(location) {
        super();
        this.state = {
            currentMain:'Home'    
        };
        // this.location = this.props.location;
    }
    // <Route exact path='/works' component = { Works }/> 



    render() {
        let location = this.props.location;
        return (<div>
        <div className="bg bobbingAnim">
        </div>
        <div id="appContainer">
            <TopNav/>
            <div id="topScrollIndicator" className="fadein scalable">
                <p className="portfolioLink secondaryColor scrollDownAnim">Home</p>
                <i className="fa fa-chevron-up secondaryColor scrollDownAnim"></i>
            </div>
                <TransitionGroup>
                    <CSSTransition
                    key={location.key}
                    classNames='fade'
                    timeout={1000}
                    >
                        <Switch location={location}>
                            <Route exact path='/' component={Home}/> 
                            <Route exact path='/Works' component={Works}/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            <div id="bottomScrollIndicator" className="fadein scalable">
                <i className="fa fa-chevron-down secondaryColor scrollDownAnim"></i>
                <p className="portfolioLink secondaryColor scrollDownAnim">Works</p>
            </div>
        </div>
    </div>)
    }
    
    shouldComponentUpdate() {
        return false;
    }
    
    componentWillMount() {
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
    
    handleScroll(data) {
        if (data.direction === "VERTICAL" && data.intent > 0) {//scrolled top
            window.location.href = '/Works';
        }
        else if (data.direction === "VERTICAL" && data.intent <= 0) {//scrolled top
            window.location.href = '/';
        }
    }
    
    componentWillUnmount() {
        this.ss.killAll();
    }
}

const AppWrapper = withRouter(({ location }) => <App location={location}/>);

export default AppWrapper;