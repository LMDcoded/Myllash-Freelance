import React from 'react';
import { useFormik } from 'formik';
import ErrorMsg from './error-msg';
import { aboutSchema } from '../../utils/validation-schema';

const AboutForm = () => {
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: { name: '', email: '', msg: '' },
    validationSchema: aboutSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values)
      resetForm()
    }
  })
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6 col-12">
          <div className="input">
            <input value={values.name} onChange={handleChange}
              onBlur={handleBlur} type="text" placeholder="Enter your name" id="name" />
            {touched.name && <ErrorMsg error={errors.name} />}
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="input">
            <input value={values.email} onChange={handleChange}
              onBlur={handleBlur} type="text" placeholder="Enter your Email" id="email" />
            {touched.email && <ErrorMsg error={errors.email} />}
          </div>
        </div>
        <div className="col-12">
          <div className="textarea">
            <textarea value={values.msg} onChange={handleChange} id="msg"
              onBlur={handleBlur} placeholder="Enter your massage"></textarea>
            {touched.msg && <ErrorMsg error={errors.msg} />}
          </div>
        </div>
      </div>
      <input className="tp-btn-lg-yellow" type="submit" value="Send Massage" />
    </form>
  );
};

export default AboutForm;