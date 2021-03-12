import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import { Grid, Paper } from '@material-ui/core';
import { connect } from 'react-redux'
import Switch from '@material-ui/core/Switch';

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
    // <div>
    //   <h1 style={{ textAlign: "center" }}>Enter your details for shipping selected product</h1>
    //   <Formik
    //     initialValues={{
    //       // username: '',
    //       // email: '',
    //       name: '',
    //       Title: '',
    //       gender: '',
    //       Intereste: [{ interestValue: "" }]
    //     }}
    //     onSubmit={values => {
    //       props.history.push({
    //         pathname: '/userdetail'
    //       })
    //       // console.log(values);
    //     }}
    //   >
    //     {({ errors, touched, isValidating, values }) => (
    //       <Form>
    //         {/* <Field name="email" validate={validateEmail} />
    //         {errors.email && touched.email && <div>{errors.email}</div>}

    //         <Field name="username" validate={validateUsername} />
    //         {errors.username && touched.username && <div>{errors.username}</div>} */}

    //         <Grid container xs={12} justify="center" alignContent="center" className="Form">
    //           <Grid item xs={12}>
    //             <Field name="name" style={{ width: "27%", margin: 10 }} placeholder="User Name" />
    //           </Grid>
    //           <Grid item xs={12}>
    //             <Field name="Title" style={{ width: "27%", margin: 10 }} placeholder="Title" />
    //           </Grid>
    //           <Grid item xs={12}>
    //             <Field name="City" style={{ width: "27%", margin: 10 }} placeholder="City" />
    //           </Grid>
    //           <Grid item xs={12}>
    //             <Field name="Contact number" style={{ width: "27%", margin: 10 }} placeholder="Contact number" />
    //           </Grid>
    //           <Grid item xs={12}>
    //             <Field name="Email" style={{ width: "27%", margin: 10 }} placeholder="Email" />
    //           </Grid>
    //           <Grid item xs={12}>
    //             <Field name="Link" style={{ width: "27%", margin: 10 }} placeholder="Link" />
    //           </Grid>
    //           <FieldArray name="intereste">
    //             {({ insert, remove, push }) => (
    //               <div>
    //                 {values.intereste && values.intereste.length > 0 &&
    //                   values.intereste.map((int, index) => (
    //                     <div>
    //                       <Grid item xs={12}>
    //                         <Field name={`int.${index}.interestValue`} type="text" placeholder="Intereste" />
    //                         <button
    //                           type="button"
    //                           className="secondary"
    //                           onClick={() => remove(index)}
    //                         >
    //                           X
    //                     </button>
    //                       </Grid>
    //                     </div>
    //                   ))}
    //               </div>
    //             )}
    //           </FieldArray>
    //           <Grid item xs={12}>
    //             <Field name="Languadge" style={{ width: "27%", margin: 10 }} placeholder="Languadge" />
    //           </Grid>
    //           <Grid item xs={12}>
    //             <button type="submit" style={{ margin: 40, backgroundColor: "lightblue" }}>Submit</button>
    //           </Grid>
    //         </Grid>
    //       </Form>
    //     )}
    //   </Formik>
    // </div>
    <div>

      <span>policies</span>
      <h6>Behavior Analytics</h6>
      <Grid container direction="row" justify="space-around" spacing={24}>
        {props.list.usersList.policies.map((user, index) => {
          return (
            <Grid item xs={4} onClick={() => {
              props.history.push({ pathname: '/detail', state: user })
            }}
            >
              <Paper>
                <Grid container direction="row">
                  <i class='fas fa-user-circle' style={{ fontSize: 50 }}></i>
                  <Grid item xs={5} >
                    <h4>{user.name}</h4>
                  </Grid >
                  <Grid item xs={3} >
                    <h4 style={{ width: "40%", height: "40%", borderRadius: "50%", textAlign: 'center', backgroundColor: "orange", color: "white" }}>{user.severity.slice(0, 1)}</h4>
                  </Grid>
                  <Switch
                    checked="true"
                    // onChange={this.handleChange('checkedB')}
                    value="checkedB"
                    color="primary"
                  />
                </Grid>
                <p >Monitor for and detect activity indicate of corporate cloude</p>
                <span >App</span>
                <p>{user.active}</p>
              </Paper>
            </Grid>

          )
        })}
      </Grid>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    list: state,
  }
}

export default connect(mapStateToProps)(App);
