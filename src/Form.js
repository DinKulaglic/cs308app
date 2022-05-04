import React, { useState } from "react";
import Registration from "./Registration";
import FormComplete from "./FormComplete";
import "./Form.css";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <span className="close-btn">×</span>
        <div className="form-content-left">
          <img className="form-img" src="img/img-2.svg" alt="spaceship" />
        </div>
        {!isSubmitted ? (
          <Registration submitForm={submitForm} />
        ) : (
          <FormComplete />
        )}
      </div>
    </>
  );
};

export default Form;
