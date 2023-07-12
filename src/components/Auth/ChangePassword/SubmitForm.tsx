import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

import { setUser } from '../../../redux/user/slice';

interface SubmitFormProps {
  setLoadingModal: React.Dispatch<React.SetStateAction<boolean>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  setSuccessfulSubmit: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FormValues {
  email: string;
}

const SubmitForm: React.FC<SubmitFormProps> = ({
  setLoadingModal,
  setErrorMessage,
  setSuccessfulSubmit,
}) => {
  const dispatch = useDispatch();
  const initialValues: FormValues = {
    email: '',
  };

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      setLoadingModal(true);
      const baseUrl = process.env.REACT_APP_API_URL;
      const endpoint = 'forgot-password/request';
      const queryParams = `email=${values.email}`;
      const url = `${baseUrl}/${endpoint}?${queryParams}`;
      const headers = {
        'Content-Type': 'application/json',
      };

      const response = await axios.post(url, null, { headers });

      if (response.status === 200) {
        setLoadingModal(false);
        setSuccessfulSubmit(true);
        dispatch(setUser({ email: values.email }));
      } else if (response.status === 404) {
        setLoadingModal(false);
        setErrorMessage('User not found');
      } else if (response.status === 500) {
        setLoadingModal(false);
        setErrorMessage('Server error. Please try again later.');
      } else {
        setLoadingModal(false);
        throw new Error('User not found');
      }
    } catch (error) {
      console.error(error);
      setLoadingModal(false);
      setErrorMessage('Server error. Please try again later.');
    } finally {
      setLoadingModal(false);
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
            placeholder="name@gmail.com"
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
