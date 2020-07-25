import React from 'react';
import { Formik, Form, Field, connect } from 'formik';
import {
  Link
} from "react-router-dom";
import './App.css';
import Selfcam from './Selfcam';

function validateEmail(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}

function validateUsername(value) {
  let error;
  if (value === 'admin') {
    error = 'Nice try!';
  }
  return error;
}


function App() {
  return (
    <div style={{
      textAlign: "center",
      border: '5px outset red',
      backgroundColor: 'lightblue',
      padding: 50,
      margin: 150
    }}>
      <h1>SIGNUP FOR LOGIN</h1>
      <Formik
        initialValues={{
          username: '',
          email: '',
        }}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched, isValidating }) => (
          <div >
            <Form>
              <Field name="email" validate={validateEmail} name='email' placeholder='email' />
              {errors.email && touched.email && <div>{errors.email}</div>}
              <br></br>
              <Field name="username" validate={validateUsername} placeholder='username' />
              {errors.username && touched.username && <div>{errors.username}</div>}
              <br></br>
              <Link to='/selfcam'>
                <button type="submit">Submit</button>
              </Link>
            </Form>
          </div>
        )}
      </Formik>

    </div>

  );
}

export default App;
