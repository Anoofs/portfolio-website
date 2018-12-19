import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Components/Anims.css';
import {
    BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import TopNav from './Components/TopNav';
import Home from './Components/Home';
import Works from './Components/Works';
import Redirector from './Components/Redirector';
import registerServiceWorker from './registerServiceWorker';

import '../node_modules/font-awesome/css/font-awesome.min.css';

ReactDOM.render(
    <Router>
      <div>
        <div className="bg"></div>
        <TopNav/>
        <Route
          render={({ location, history }) => {
            const { pathname } = location;
            return (
                <TransitionGroup>
                  <Redirector history = {history}/>
                  <CSSTransition key={pathname} classNames="page"
                        timeout={{
                          enter: 1000,
                          exit: 1000,
                        }} >
                      <Route
                        location={location}
                        render={() => (
                          <Switch>
                            <Route exact path="/" history={history} component={Home} />
                            <Route path="/works" history={history} component={Works} />
                          </Switch>
                        )}
                      />
                  </CSSTransition>
                </TransitionGroup>
            );}}
        />
      </div>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
