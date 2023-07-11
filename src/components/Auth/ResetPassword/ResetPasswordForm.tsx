import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

interface FormValues {
  password: string;
  passwordConfirm: string;
}

interface ResetPasswordFormProps {
  userLogin: string | null;
  passwordResetToken: string | null;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  setSuccessMessage: React.Dispatch<React.SetStateAction<string>>;
}

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({
  userLogin,
  passwordResetToken,
  setSuccessMessage,
  setErrorMessage,
}) => {
  const initialValues: FormValues = {
    password: '',
    passwordConfirm: '',
  };

  const validateForm = (values: FormValues) => {
    const errors: Partial<FormValues> = {};

    if (!values.password) {
      errors.password = 'Required';
    } else if (/\s/.test(values.password)) {
      errors.password = 'Password cannot contain spaces';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }

    if (!values.passwordConfirm) {
      errors.passwordConfirm = 'Required';
    } else if (/\s/.test(values.passwordConfirm)) {
      errors.password = 'Password cannot contain spaces';
    } else if (values.password !== values.passwordConfirm) {
      errors.passwordConfirm = 'Passwords do not match';
    }

    return errors;
  };

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/forgot-password/change`;
      const headers = {
        'Content-Type': 'application/json',
      };

      const response = await axios.post(
        url,
        {
          userLogin: userLogin,
          password: values.password,
          passwordConfirm: values.password,
          passwordResetToken: passwordResetToken,
        },
        { headers }
      );

      if (response.status === 200) {
        setSuccessMessage('Password changed successfully');
      } else if (response.status === 200) {
        setErrorMessage('Invalid token');
      } else {
        setErrorMessage('Invalid token');
        throw new Error('Failed to sign up');
      }
    } catch (error: any) {
      setErrorMessage('Invalid token');
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
      <Form style={{ width: '400px' }}>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>
            New password
          </label>

          <Field
            type="password"
            id="password"
            name="password"
            style={styles.input}
            maxLength={20}
            placeholder="at least 8 characters long"
          />

          <div style={{ color: 'red', fontSize: '12px' }}>
            <ErrorMessage name="password" component="div" />
          </div>
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="passwordConfirm" style={styles.label}>
            Repeat new password
          </label>
          <Field
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            style={styles.input}
            maxLength={20}
            placeholder="at least 8 characters long"
          />
          <div style={{ color: 'red', fontSize: '12px' }}>
            <ErrorMessage name="passwordConfirm" component="div" />
          </div>
        </div>

        <button type="submit" className="submitBtn">
          Confirm
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

export default ResetPasswordForm;
