import React, { Component } from 'react';
import './Home.css';
import ScrollSwipe from 'scroll-swipe';
import Page from '../Page';

class Home extends Component {
    render() {
        return (
          <Page>
            <div id="homeId" className="mainContent">
                <div id="leftMain">
                    <h1 className="mainHeader">ANOOF <br></br>SHAIKH</h1>
                    <div className="mainBorder fadein"></div>
                    <p className="mainDescription">
                        User Interface / User Experience
                    </p>
                </div>
                <div id="rightMain">

                </div>
            </div>
          </Page>
        );
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps);
    }

    componentWillMount() {
        // this.ss = new ScrollSwipe({
        //     target: document, // Element must be a single dom-node per ScrollSwipe Instance
        //     scrollSensitivity: 10, // The lower the number, the more sensitive
        //     touchSensitivity: 0, // The lower the number, the more senitive
        //     scrollPreventDefault: true, // prevent default option for scroll events
        //     touchPreventDefault: true, // prevent default option for touch events
        //     scrollCb: this.handleScroll,  // The action you wish to perform when a scroll reacts (details below)
        //     touchCb: this.handleScroll // The action you wish to perform when a touch reacts (details below)
        // });
    }

    componentDidMount() {
        // var doParallax = () => {
        // // 	c4left = document.getElementById ( '#l4' ).offsetLeft, later for dustbin layer
        // // 	c4top = document.getElementById ( '#l4' ).offsetTop;
        // 	var parallaxBox = document.getElementById ( 'rightMain' );
        // 	var c1left = document.getElementById ( 'l1' ).offsetLeft,
        // 	c1top = document.getElementById ( 'l1' ).offsetTop,
        // 	c2left = document.getElementById ( 'l2' ).offsetLeft,
        // 	c2top = document.getElementById ( 'l2' ).offsetTop,
        // 	c3left = document.getElementById ( 'l3' ).offsetLeft,
        // 	c3top = document.getElementById ( 'l3' ).offsetTop;
        //
        //
        //     document.onmousemove = function (event) {
        // 		event = event || window.event;
	    	// 	var x = event.clientX - parallaxBox.offsetLeft,
    		//         y = event.clientY - parallaxBox.offsetTop;
        // 		mouseParallax ( 'l1', c1left, c1top, x, y, 8 );
        // 		mouseParallax ( 'l2', c2left, c2top, x, y, 5 );
        // 		mouseParallax ( 'l3', c3left, c3top, x, y, 10 );
        // // 		mouseParallax ( 'l4', c4left, c4top, x, y, 65 );
        // 	}
        // }
        //
        // var mouseParallax = ( id, left, top, mouseX, mouseY, speed ) => {
	      //   	var obj = document.getElementById ( id );
        //     	var parentObj = obj.parentNode,
        //     	containerWidth = parseInt( parentObj.offsetWidth ),
        //     	containerHeight = parseInt( parentObj.offsetHeight );
        //     	obj.style.left = left - ( ( ( mouseX - ( parseInt( obj.offsetWidth ) / 2 + left ) ) / containerWidth ) * speed ) + 'px';
        //     	obj.style.top = top - ( ( ( mouseY - ( parseInt( obj.offsetHeight ) / 2 + top ) ) / containerHeight ) * speed ) + 'px';
        // }
        //
        // doParallax();

    }
    componentWillUnmount() {
        // this.ss.killAll();
    }
}

export default Home;

//  <div className="mainContent fadein">
//     <div id="leftMain">
//         <h1 className="mainHeader moveinHeading">ANOOF <br></br>SHAIKH</h1>
//         <div className="mainBorder fadein"></div>
//         <p className="mainDescription moveinHeading">
//             User Interface Developer <br></br>
//             and Designer
//         </p>
//     </div>
//     <div id="rightMain">
//         <div id="l1" className="parallaxLayer scaleIn3">
//             <img src="assets/workstation1.png" className="abs"/>
//             <img src="assets/workstation2.png" className="tween1 abs"/>
//         </div>
//         <div id="l2" className="parallaxLayer scaleIn1">
//             <img src="assets/clock.png"/>
//         </div>
//         <div id="l3" className="parallaxLayer scaleIn2">
//             <img src="assets/window.png"/>
//         </div>
//         <div className="parallaxLayer scaleIn2">
//             <img src="assets/bgLight.png"/>
//         </div>
//     </div>
// </div>
