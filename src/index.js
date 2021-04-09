import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MyTable from './tablecomponent/MyTable';
import { createStore } from 'redux';
import allData from './Services/index';
import { Provider } from 'react-redux';
import Dashboard from './tablecomponent/Dashboard';
import ListSpacex from './tablecomponent/ListSpacex';
// import DetailPolicy from './DetailPolicy';
import Users from './registrationForm.js/Addinfo';
import Login from './registrationForm.js/Login';
import StudentsDetail from './registrationForm.js/StudentsDetail';
import UpdateForm from './registrationForm.js/UpdateForm';
const store = createStore(allData)

ReactDOM.render(
    <BrowserRouter>
        {/* <App /> */}
        <Provider store={store}>
            <div>
                {/* <Dashboard /> */}

                {/* <MyTable /> */}
                <Switch>
                    {/* <Route path="/" exact component={Dashboard} />
                    <Route path="/lounch_info" component={ListSpacex} />
                    <Route path="/lounch_table" component={MyTable} /> */}


                    <Route path="/" exact component={Users} />
                    <Route path="/login" component={Login} />

                    <Route path="/student-detail" component={StudentsDetail} />
                    <Route path="/udate_form" component={UpdateForm} />

                    {/* <Route path="/" exact component={App} />
                    <Route path="/detail" component={DetailPolicy} />
                    <Route path="/aboutme" component={AlertDialogSlide} /> */}
                    {/* <Route path="/selfcam" component={Selfcam} /> */}
                    {/* <Route path="/userdetail" component={UserDetail} /> */}
                </Switch>
            </div>
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
