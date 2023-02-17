import React, { useState } from "react";

// Installs
import ClipLoader from "react-spinners/ClipLoader";
import { Formik } from "formik";
import Swal from "sweetalert2";

// Assets
import linkedIn from "../../assets/icons/linkedIn.png";
import github from "../../assets/icons/github.png";
import mail from "../../assets/icons/mail.png";
import phone from "../../assets/icons/phone.png";

// Style
import "./style.scss";

// Actions
import { createContact } from "../../actions/contact";
import { useDispatch } from "react-redux";

const Contact = () => {
  let [loading, setLoading] = useState(true);
  let [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useDispatch();

  const override = {
    margin: "0 auto",
  };

  const onSubmit = (data) => {
    dispatch(createContact(data))
      .then((res) => {
        setLoading(false);
        Swal.fire("Success!", res.message, "success");
      })
      .catch((error) => {
        setLoading(false);
        Swal.fire("Error", error, "error");
      });
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
              <h5>+ (353) 83 177 9545</h5>
            </div>
          </a>
          <a href="mailto:caolan.fanning@gmail.com">
            <div className="contact-info">
              <img src={mail} alt="A Mail Icon Image" />
              <h5>caolan.fanning@gmail.com</h5>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/caolan-fanning-1a7229157/">
            <div className="contact-info">
              <img src={linkedIn} alt="A LinkedIn Icon Image" />
              <h5>View LinkedIn Profile</h5>
            </div>
          </a>
          <a href="https://github.com/caolan93">
            <div className="contact-info">
              <img src={github} alt="A GitHub Icon Image" />
              <h5>View GitHub Profile</h5>
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
            if (
              !values.email ||
              !values.message ||
              !values.phone ||
              !values.name
            ) {
              errors.name = "Required";
              errors.phone = "Required";
              errors.email = "Required";
              errors.message = "Required";
              return errors;
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
              return errors;
            }
          }}
          onSubmit={(data) => {
            onSubmit(data);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
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
                  {errors.name && (
                    <p style={{ color: "white" }}>
                      {errors.name && touched.name && errors.name}
                    </p>
                  )}
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                  {errors.phone && (
                    <p style={{ color: "white" }}>
                      {errors.phone && touched.phone && errors.phone}
                    </p>
                  )}
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && (
                    <p style={{ color: "white" }}>
                      {errors.email && touched.email && errors.email}
                    </p>
                  )}

                  <textarea
                    type="text"
                    name="message"
                    rows={8}
                    placeholder="Message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                  />
                  {errors.message && (
                    <p style={{ color: "white" }}>
                      {errors.message && touched.message && errors.message}
                    </p>
                  )}

                  <button type="submit" disabled={loading}>
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
