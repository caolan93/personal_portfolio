import React, { useState } from "react";

// Installs
import ClipLoader from "react-spinners/ClipLoader";
import { Formik } from "formik";

// Assets
import linkedIn from "../../assets/icons/linkedIn.png";
import github from "../../assets/icons/github.png";
import mail from "../../assets/icons/mail.png";
import phone from "../../assets/icons/phone.png";

// Style
import "./style.scss";

const Contact = () => {
  let [loading, setLoading] = useState(true);

  const override = {
    margin: "0 auto",
  };

  return (
    <div className="contact-form-container">
      <div className="contact-details-container">
        <div className="title-container">
          <h2>Get In Touch!</h2>
        </div>
        <div className="contact-details">
          <a href="tel:+353841779545">
            <div className="contact-info">
              <img src={phone} alt="A Phone Icon Image" />
              <h4>+ (353) 83 177 9545</h4>
            </div>
          </a>
          <a href="mailto:caolan.fanning@gmail.com">
            <div className="contact-info">
              <img src={mail} alt="A Mail Icon Image" />
              <h4>caolan.fanning@gmail.com</h4>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/caolan-fanning-1a7229157/">
            <div className="contact-info">
              <img src={linkedIn} alt="A LinkedIn Icon Image" />
              <h4>View LinkedIn Profile</h4>
            </div>
          </a>
          <a href="https://github.com/caolan93">
            <div className="contact-info">
              <img src={github} alt="A GitHub Icon Image" />
              <h4>View GitHub Profile</h4>
            </div>
          </a>
        </div>
      </div>
      <div className="contact-form">
        <div className="title-container">
          <h2>Send A Message</h2>
        </div>
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
              {isSubmitting ? (
                <div
                  style={{
                    height: "500px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ClipLoader
                    color="#fff"
                    cssOverride={override}
                    loading={loading}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </div>
              ) : (
                <>
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
                </>
              )}
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Contact;
