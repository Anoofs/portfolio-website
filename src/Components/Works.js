import React, { Component } from 'react';
import './Works.css';
import Page from '../Page';

class Works extends Component {
    render() {
        return (
          <Page>
              <div id="worksId" className="mainContent" >
                  <div id="leftMain">
                      <h1 className="mainHeader">WORKS</h1>
                      <div className="mainBorder"></div>
                  </div>
                  <div id="rightMain">
                  </div>
              </div>
          </Page>
        );
    }
}

export default Works;
