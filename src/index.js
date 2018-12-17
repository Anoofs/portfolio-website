import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Components/Anims.css';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import App from './AppWrapper';
import registerServiceWorker from './registerServiceWorker';

import '../node_modules/font-awesome/css/font-awesome.min.css'; 
    
ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.getElementById('root'));
registerServiceWorker();
