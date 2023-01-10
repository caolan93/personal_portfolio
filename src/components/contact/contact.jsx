import React from "react";
import { Formik } from "formik";

// Style
import "./style.scss";

const Contact = () => {
  return (
    <div className="contact-form">
      <h2>Get in touch!</h2>
      <Formik
        initialValues={{ name: "", phone: "", email: "", message: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(data) => {
          console.log(data);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="name"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <p style={{ color: "white" }}>
              {errors.name && touched.name && errors.name}
            </p>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
            />
            {errors.phone && touched.phone && errors.phone}
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <p style={{ color: "white" }}>
              {errors.email && touched.email && errors.email}
            </p>
            <textarea
              type="text"
              name="message"
              rows={8}
              placeholder="Message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            />
            {errors.message && touched.message && errors.message}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
