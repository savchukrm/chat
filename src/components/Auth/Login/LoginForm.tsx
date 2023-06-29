import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { setUser } from '../../../redux/user/slice';

import { COLORS } from '../../../constants';

interface FormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues: FormValues = {
    email: '',
    password: '',
  };

  const validateForm = (values: FormValues) => {
    const errors: Partial<FormValues> = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }

    return errors;
  };

  const handleSubmit = (
    values: FormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    setTimeout(() => {
      alert(`Welcome ${values.email}`);
      setSubmitting(false);
    }, 400);

    navigate('/main');

    dispatch(setUser({ name: 'undefined so far', email: values.email }));
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validateForm}
      onSubmit={handleSubmit}
    >
      <Form>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>
            Email
          </label>

          <Field
            type="email"
            id="email"
            name="email"
            style={styles.input}
            placeholder="name@gmail.com"
          />

          <div style={{ color: 'red', fontSize: '12px' }}>
            <ErrorMessage name="email" component="div" />
          </div>
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>
            Password
          </label>

          <Field
            type="password"
            id="password"
            name="password"
            style={styles.input}
            placeholder="at least 8 characters long"
          />

          <div style={{ color: 'red', fontSize: '12px' }}>
            <ErrorMessage name="password" component="div" />
          </div>
        </div>

        <button type="submit" style={styles.submitButton}>
          Log in
        </button>
      </Form>
    </Formik>
  );
};

const styles = {
  formGroup: {
    marginBottom: 20,
  },
  label: {
    display: 'block',
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 5,
  },
  input: {
    padding: 10,
    fontSize: 16,
    width: '100%',
    borderRadius: 4,
    border: '1px solid #ccc',
  },
  submitButton: {
    marginTop: 22,
    fontSize: 20,
    width: '100%',
    color: '#fff',
    borderRadius: 4,
    cursor: 'pointer',
    padding: '10px 20px',
    backgroundColor: COLORS.blue,
  },
};

export default LoginForm;
