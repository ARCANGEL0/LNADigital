import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

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

const validate = (values: FormValues): FormErrors => {
  let errors: FormErrors = {};

  if (!values.name) {
    errors.name = 'Name is required';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.message) {
    errors.message = 'Message is required';
  }

  return errors;
};

export const useForm = (
  carregar: (loading: boolean) => void,
  openNotificationWithIcon: (type: 'success' | 'error') => void
) => {
  const [values, setValues] = useState<FormValues>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [shouldSubmit, setShouldSubmit] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
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
        })
        .catch(error => {
          carregar(false);
          openNotificationWithIcon('error');
        })
        .finally(() => {
          setShouldSubmit(false);
        });
    }
  }, [shouldSubmit]);

  useEffect(() => {
    if (emailSent) {
      setValues({ name: '', email: '', message: '' });
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