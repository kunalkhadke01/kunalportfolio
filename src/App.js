import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Grid } from '@material-ui/core'
import './App.css';

// function validateEmail(value) {
//   let error;
//   if (!value) {
//     error = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
//     error = 'Invalid email address';
//   }
//   return error;
// }

// function validateUsername(value) {
//   let error;
//   if (value === 'admin') {
//     error = 'Nice try!';
//   }
//   return error;
// }


function App(props) {
  console.log(props)
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Enter your details for shipping selected product</h1>
      <Formik
        initialValues={{
          // username: '',
          // email: '',
          name: '',
          age: '',
          gender: ''
        }}
        onSubmit={values => {
          props.history.push({
            pathname: '/userdetail',
            state: [values,
              props.location.state]
          })
          console.log(values);
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form>
            {/* <Field name="email" validate={validateEmail} />
            {errors.email && touched.email && <div>{errors.email}</div>}

            <Field name="username" validate={validateUsername} />
            {errors.username && touched.username && <div>{errors.username}</div>} */}

            <Grid container xs={12} justify="center" alignContent="center" className="Form">
              <Grid item xs={12}>
                <Field name="name" style={{ width: "27%", margin: 10 }} placeholder="User Name" />
              </Grid>
              <Grid item xs={12}>
                <Field name="age" style={{ width: "27%", margin: 10 }} placeholder="Age" />
              </Grid>
              <Grid item xs={12}>
                <Field name="gender" style={{ width: "27%", margin: 10 }} placeholder="gender" />
              </Grid>
              <Grid item xs={12}>
                <button type="submit" style={{ margin: 40, backgroundColor: "lightblue" }}>Submit</button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
