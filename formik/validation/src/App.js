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
const textArea = () => {
  return (
    <textarea id="w3review" name="Address1" rows="4" cols="50" placeholder="Address line 1"></textarea>
  )
}
const textArea2 = () => {
  return (
    <textarea id="w3review" name="Address2" rows="4" cols="50" placeholder="Address line 2"></textarea>
  )
}

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Enter your details for shipping selected product</h1>
      <Formik
        initialValues={{
          // username: '',
          // email: '',
          Address1: '',
          Address2: '',
          Country: '',
          State: '',
          City: ''
        }}
        onSubmit={values => {
          // same shape as initial values
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
                <Field name="Address1" component={textArea} placeholder="Address line 1" />
              </Grid>
              <Grid item xs={12}>
                <Field name="Address2" component={textArea2} placeholder="Address line 2" />
              </Grid>
              <Grid item xs={12}>
                <Field name="Country" style={{ width: "27%" }} placeholder="Country" />
              </Grid>
              <Grid item xs={12}>
                <Field name="State" style={{ width: "27%" }} placeholder="State" />
              </Grid>
              <Grid item xs={12}>
                <Field name="City" style={{ width: "27%" }} placeholder="City" />
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
