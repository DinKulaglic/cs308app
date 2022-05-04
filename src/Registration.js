import { toHaveErrorMessage } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./Form.css";

const Registration = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Please fill out the form below:</h1>

        <div className="form-inputs">
          <label htmlFor="name" className="form-label">
            Name :
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="form-input"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="surname" className="form-label">
            Surname :
          </label>
          <input
            id="surname"
            type="text"
            name="surname"
            className="form-input"
            placeholder="Enter your surname"
            value={values.surname}
            onChange={handleChange}
          />
          {errors.surname && <p>{errors.surname}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="image" className="form-label">
            Image :
          </label>
          <input
            id="image"
            type="url"
            name="image"
            className="form-input"
            placeholder="Enter the image url"
            value={values.image}
            onChange={handleChange}
          />
          {errors.image && <p>{errors.image}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="biography" className="form-label">
            Biography :
          </label>
          <input
            id="biogrpahy"
            type="text"
            name="biography"
            className="form-input"
            placeholder="Enter your biography"
            value={values.biography}
            onChange={handleChange}
          />
          {errors.biography && <p>{errors.biography}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Confirm
        </button>
        <span className="form-input-login">
          Already entered the details? Try another one <a href="#">here</a>
        </span>
      </form>
    </div>
  );
};

export default Registration;
