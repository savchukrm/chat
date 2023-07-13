import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import axios from 'axios';

import { setUser, setVerified } from '../../../redux/user/slice';
import { openWelcome } from '../../../redux/modals/slice';

interface LoginFormProps {
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  setLoadingModal: React.Dispatch<React.SetStateAction<boolean>>;
  setForgotPasswordModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProps> = ({
  setErrorMessage,
  setLoadingModal,
  setForgotPasswordModal,
}) => {
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

  const handleSubmit = async (
    values: FormValues,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
  ) => {
    try {
      setLoadingModal(true);
      const url = `${process.env.REACT_APP_API_URL}/auth/login`;
      const headers = {
        'Content-Type': 'application/json',
      };

      const response = await axios.post(
        url,
        {
          login: values.email,
          password: values.password,
        },
        { headers }
      );

      if (
        response.status === 200 &&
        response.data.message ===
          'Authentication failed, check given credentials'
      ) {
        setLoadingModal(false);
        setErrorMessage('Password or email is incorrect');
        resetForm();
      } else if (
        response.status === 200 &&
        response.data.message === `User's account is not verified`
      ) {
        setLoadingModal(false);

        setErrorMessage('An account is not verified');

        dispatch(setUser({ email: values.email }));
      } else if (response.status === 200) {
        const { login, name } = response.data;

        setLoadingModal(false);

        dispatch(setUser({ name: name, email: login }));

        dispatch(setVerified(true));

        dispatch(openWelcome());
      } else {
        throw new Error('Failed to sign up');
      }
    } catch (error: any) {
      console.error(error.message);
    }

    setSubmitting(false);
  };

  const openForgotPasswordModal = () => {
    setForgotPasswordModal(true);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validateForm}
      onSubmit={handleSubmit}
    >
      <Form style={{ position: 'relative' }}>
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
          />

          <div style={{ color: 'red', fontSize: '12px' }}>
            <ErrorMessage name="password" component="div" />
          </div>
        </div>

        <button type="submit" className="submitBtn">
          Log in
        </button>

        <div className="forgotBtn" onClick={() => openForgotPasswordModal()}>
          Forgot password?
        </div>
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
};

export default LoginForm;
