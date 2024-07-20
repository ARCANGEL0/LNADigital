import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { validate as validateType } from './validationRules'; // Ensure proper import path

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export const useForm = (
  validate: (values: FormValues) => FormErrors,
  carregar: (loading: boolean) => void,
  openNotificationWithIcon: (type: 'success' | 'error') => void
) => {
  const [values, setValues] = useState<FormValues>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [shouldSubmit, setShouldSubmit] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors(validate(values));

    // Trigger submission if no errors
    if (Object.keys(errors).length === 0) {
      setShouldSubmit(true);
    }
  };

  useEffect(() => {
    if (shouldSubmit) {
      carregar(true);

      const templateParams = {
        from_name: values.name,
        reply_to: values.email,
        message: values.message,
      };

      emailjs.send('service_tsqncfl', 'template_n281ssn', templateParams, 'VPWshh0QHyiBo4Lc_')
        .then(response => {
          carregar(false);
          openNotificationWithIcon('success');
          setEmailSent(true);
          console.log('SUCCESS!', response.status, response.text);
        })
        .catch(error => {
          carregar(false);
          openNotificationWithIcon('error');
          console.log('FAILED...', error);
        });
    }
  }, [shouldSubmit]);

  useEffect(() => {
    if (emailSent) {
      setValues({ name: '', email: '', message: '' });
      setShouldSubmit(false);
      setEmailSent(false);
    }
  }, [emailSent]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};