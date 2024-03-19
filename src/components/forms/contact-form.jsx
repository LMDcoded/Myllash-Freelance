import { useFormik } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { contactSchema } from '../../utils/validation-schema';
import ErrorMsg from './error-msg';

const ContactForm = () => {
  // user
  // const { user } = useSelector(state => state.auth);
  // console.log(user)

  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: { name: '', email: '', msg: '' },
    validationSchema: contactSchema,
    onSubmit: (values, { resetForm }) => {
      toast.success(`${values.name} your message sent successfully`, {
        position: 'top-left'
      })
      resetForm()
    }
  })

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className='mb-30'>
        <input value={values.name} onChange={handleChange} onBlur={handleBlur}
          name="name" type="text" placeholder="Enter your Name" />
        {touched.name && <ErrorMsg error={errors.name} />}
      </div>
      <div className='mb-30'>
        <input value={values.email} onChange={handleChange} onBlur={handleBlur}
          name="email" type="email" placeholder="Enter your Mail" />
        {touched.email && <ErrorMsg error={errors.email} />}
      </div>
      <div className='mb-30'>
        <textarea value={values.msg} onChange={handleChange} onBlur={handleBlur} name="msg"
          placeholder="Enter your Massage"></textarea>
        {touched.msg && <ErrorMsg error={errors.msg} />}
      </div>
      <button type="submit" className="tp-btn-yellow">Send Massage</button>
    </form>
  );
};

export default ContactForm;