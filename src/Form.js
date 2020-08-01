import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

class LoginForm extends React.Component {
    render() {
        return (
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password: '',
                    phonenumber: '',
                    address: ''
                }}
                validationSchema={Yup.object().shape({
                    username: Yup.string()
                        .required('User Name is required'),
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Password is required'),
                    phonenumber: Yup.string()
                        .min(10, 'phone number must be at least 10 characters')
                        .required('phone number is required'),
                })}
                onSubmit={values => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(values, null, 4))
                    this.props.history.push({ pathname: '/userdetail', state: values })
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="username">User Name</label>
                            <Field name="username" type="text" className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} />
                            <ErrorMessage name="username" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phonenumber">Phone number</label>
                            <Field name="phonenumber" type="password" className={'form-control' + (errors.phonenumber && touched.phonenumber ? ' is-invalid' : '')} />
                            <ErrorMessage name="phonenumber" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">address</label>
                            <Field name="address" type="password" className={'form-control' + (errors.address && touched.address ? ' is-invalid' : '')} />
                            <ErrorMessage name="address" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2">Register</button>
                            <button type="reset" className="btn btn-secondary">Reset</button>
                        </div>
                    </Form>
                )}
            />
        )
    }
}

export default LoginForm;