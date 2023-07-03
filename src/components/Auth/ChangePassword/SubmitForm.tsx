import React from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

interface FormValues {
  email: string;
}

const SubmitForm = () => {
  const initialValues: FormValues = {
    email: '',
  };

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      // change url to proper
      const url = `${process.env.REACT_APP_API_URL}/auth/reset-password`;
      const headers = {
        'Content-Type': 'application/json',
      };

      const response = await axios.post(
        url,
        {
          login: '',
        },
        { headers }
      );

      // handle error
      if (response.status === 200) {
        console.log('ok');
      } else {
        throw new Error('Failed to verify');
      }
    } catch (error) {
      console.error(error);
      //   setErrorMessage('Failed to verify');
    } finally {
      setSubmitting(false);
    }
  };

  const validateForm = (values: FormValues) => {
    const errors: Partial<FormValues> = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validateForm}
      onSubmit={handleSubmit}
    >
      <Form>
        <div style={{ position: 'relative' }}>
          <label htmlFor="name" style={styles.label}>
            Your email adress
          </label>

          <Field
            style={styles.input}
            type="text"
            name="email"
            maxLength={6}
            placeholder="123456"
          />

          <div style={{ color: 'red', fontSize: '12px' }}>
            <ErrorMessage name="email" component="div" />
          </div>

          <button className="submitBtn verifyBtn" type="submit">
            Submit
          </button>
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
  backText: {
    position: 'relative' as 'relative',
    top: -1,
    color: '#2c3fe1',
    fontSize: 16,
    fontWeight: 400,
  },
};

export default SubmitForm;
