import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import axios from "axios";

export const useForm = (validate: any, carregar: any, openNotificationWithIcon: any) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);
 const [emailsent, setEmailsent] = useState(false);
 

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
 

    setErrors(validate(values));

    // Your url for API

    if (Object.keys(values).length === 3 && shouldSubmit) {

        carregar(true)
   

var templateParams = {
    from_name: Object.values(values)[0],
    reply_to: Object.values(values)[1],
    message: Object.values(values)[2],


};
 
emailjs.send('service_tsqncfl', 'template_n281ssn', templateParams, 'VPWshh0QHyiBo4Lc_') 
    .then(function(response) {
    carregar(false);
    openNotificationWithIcon('success');
     setEmailsent(true);
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
          carregar(false);

           openNotificationWithIcon('error');
       console.log('FAILED...', error);
    });
  

          
     
    }
  };

  useEffect(() => {

    if(Object.keys(errors).length === 0) 
    {
      setShouldSubmit(true)
    }
    if (emailsent) {

      setValues("");
      setShouldSubmit(false)
      setEmailsent(false)
    }
  }, [errors, shouldSubmit]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};
