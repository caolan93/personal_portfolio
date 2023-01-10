import React from "react";
import { Field, reduxForm } from "redux-form";

const Contact = () => {
  return (
    <div className="contact-container">
      <form>
        <Field name="Name" component="input" type="text" placeholder="Name" />
      </form>
    </div>
  );
};

export default reduxForm({
  form: "contactForm",
})(Contact);
