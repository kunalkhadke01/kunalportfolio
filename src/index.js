import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Selfcam from './Selfcam';
// import LoginForm from "./Form";
// import UserDetail from "./Userdetail";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        {/* <App /> */}
        <div>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/selfcam" component={Selfcam} />
                {/* <Route path="/userdetail" component={UserDetail} /> */}
            </Switch>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
