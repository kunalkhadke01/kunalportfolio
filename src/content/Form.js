import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

class LoginForm extends React.Component {
    render() {
        return (
            <Formik
                initialValues={{
                    username: '',
                    age: '',
                    gender: ''
                }}
                validationSchema={Yup.object().shape({
                    username: Yup.string()
                        .required('User Name is required'),
                    age: Yup.string()
                        .min(3, 'age must be at least 3 characters')
                        .required('age is required'),
                })}
                onSubmit={values => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(values, null, 4))
                    // this.props.history.push({ pathname: '/userdetail', state: values })
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="username">User Name</label>
                            <Field name="username" type="text" className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} />
                            <ErrorMessage name="username" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="age">Age</label>
                            <Field name="age" type="password" className={'form-control' + (errors.age && touched.age ? ' is-invalid' : '')} />
                            <ErrorMessage name="age" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">gender</label>
                            <Field name="gender" type="password" className={'form-control' + (errors.gender && touched.gender ? ' is-invalid' : '')} />
                            <ErrorMessage name="gender" component="div" className="invalid-feedback" />
                        </div>
                    </Form>
                )}
            />
        )
    }
}

export default LoginForm;