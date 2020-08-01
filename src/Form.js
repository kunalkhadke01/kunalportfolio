import React from "react";
import { Formik, Form, Field, connect } from 'formik';

class LoginForm extends React.Component {

    ValidateUser(value) {
        let error;
        if (value === "Kunal") {
            error = "good try"
        }
        else {
            return error
        }
    }

    ValidatePassword(value) {
        let error;
        if (!value) {
            error = "please fill the password"
        }
        else {
            return error
        }
    }
    render() {
        return (
            <div>
                <div class="container"
                    style={{
                        textAlign: "center",
                        border: '1px outset blue',
                        backgroundColor: 'lightblue',
                        margin: 0,
                        padding: 10,
                        // position: "absolute",
                        top: "20%",
                        left: "20%",
                    }} >
                    <Formik
                        initialValues={{
                            username: '',
                            email: '',
                            password: '',
                            phonenumber: '',
                            address: ''
                        }}
                        onSubmit={values => {
                            // same shape as initial values
                            this.props.history.push({ pathname: '/userdetail', state: values })
                            console.log(values);
                        }}
                    >
                        {({ errors, touched, isValidating }) => (
                            <Form>
                                <Field name="username" validate={this.ValidateUser()} placeholder='username' />
                                <br></br>
                                {errors.username && touched.username && <div>{errors.username}</div>}
                                <Field name="email" name='email' placeholder='email' />
                                <br></br>
                                <Field name="password" validate={this.ValidatePassword()} placeholder='password' />
                                {errors.password && touched.password && <div>{errors.password}</div>}
                                <br></br>
                                <Field name="phonenumber" placeholder='phonenumber' />
                                <br></br>
                                <Field name="address" placeholder='address' />
                                <br></br>
                                <button type="submit">LOGIN</button>
                            </Form>
                        )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}
export default LoginForm;