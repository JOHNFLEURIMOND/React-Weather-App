import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Wakanda from './Wakanda';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <Router>
        <Wakanda />
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();