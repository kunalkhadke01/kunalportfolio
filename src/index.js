import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Portfolio from './Portfolio';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AlertDialogSlide from './AboutMe';
// import { createStore } from './redux';
// import allData from './reducers';
// import { Provider } from 'react-redux';


// const store = createStore(allData)

ReactDOM.render(
    <BrowserRouter>
        {/* <App /> */}
        {/* <Provider store={store}> */}
        <div>
            {/* <Portfolio /> */}
            <Switch>
                <Route path="/" exact component={Portfolio} />
                <Route path="/aboutme" component={AlertDialogSlide} />
                {/* <Route path="/selfcam" component={Selfcam} /> */}
                {/* <Route path="/userdetail" component={UserDetail} /> */}
            </Switch>
        </div>
        {/* </Provider> */}
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
