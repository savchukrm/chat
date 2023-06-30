import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import axios from 'axios';

import { setUser } from '../../../redux/user/slice';

interface FormValues {
  name: string;
  email: string;
  password: string;
}

interface SignupBlockProps {
  setSignModal: React.Dispatch<React.SetStateAction<boolean>>;
  setVerifyModal: React.Dispatch<React.SetStateAction<boolean>>;
  setLoadingModal: React.Dispatch<React.SetStateAction<boolean>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}

const SignupForm: React.FC<SignupBlockProps> = ({
  setSignModal,
  setVerifyModal,
  setLoadingModal,
  setErrorMessage,
}) => {
  const dispatch = useDispatch();

  const initialValues: FormValues = {
    name: '',
    email: '',
    password: '',
  };

  const validateForm = (values: FormValues) => {
    const errors: Partial<FormValues> = {};

    if (!values.name) {
      errors.name = 'Required';
    } else if (!/^[A-Za-z0-9-_.\s]{1,30}$/.test(values.name)) {
      errors.name =
        'You can use letters, digits and symbols “-” “_” “.” (up to 30)';
    }

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
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      setLoadingModal(true);
      const url = `${process.env.REACT_APP_API_URL}/auth/signUp`;
      const headers = {
        'Content-Type': 'application/json',
      };

      const response = await axios.post(
        url,
        {
          name: values.name,
          email: values.email,
          password: values.password,
          passwordConfirm: values.password,
        },
        { headers }
      );

      if (response.status === 200) {
        const { name, login } = response.data;

        setSignModal(false);
        setLoadingModal(false);
        setVerifyModal(true);
        dispatch(setUser({ name, email: login }));
      } else {
        throw new Error('Failed to sign up');
      }
    } catch (error: any) {
      setLoadingModal(false);
      setErrorMessage('Failed to sign up');

      console.error(error.message);
    }

    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validateForm}
      onSubmit={handleSubmit}
    >
      <Form>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>
            Full name, how users will see you
          </label>

          <Field
            type="text"
            id="name"
            name="name"
            style={styles.input}
            maxLength={30}
            placeholder="John Smith"
          />

          <div style={{ color: 'red', fontSize: '12px' }}>
            <ErrorMessage name="name" component="div" />
          </div>
        </div>

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
            maxLength={20}
            placeholder="8 characters or more"
          />

          <div style={{ color: 'red', fontSize: '12px' }}>
            <ErrorMessage name="password" component="div" />
          </div>
        </div>

        <button type="submit" className="submitBtn">
          Create account
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
    marginBottom: 5,
    fontSize: 14,
    fontWeight: 500,
  },
  input: {
    padding: 10,
    fontSize: 16,
    width: '100%',
    borderRadius: 4,
    border: '1px solid #ccc',
  },
};

export default SignupForm;
