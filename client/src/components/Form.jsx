import { useState, useEffect } from "react";

import "../../static/form.css";

export default function Form(props) {
  const [formData, setFormData] = useState(props.formData);
  const [hasError, setHasError] = useState(false);
  const [inputFields, setInputFields] = useState(() => {
    let inputFields = [];

    for (var key in formData) {
      if (formData.hasOwnProperty(key)) {
        const value = formData[key];

        inputFields.push(
          <input
            type={key}
            value={formData.value}
            onChange={handleChange}
            name={key}
            key={key}
            className={
              hasError && value === "" ? "form--input_error" : "form--input"
            }
            placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
          />
        );
      }
    }

    return inputFields;
  });

  function initInputFields() {
    let inputFields = [];

    for (var key in formData) {
      if (formData.hasOwnProperty(key)) {
        const value = formData[key];

        inputFields.push(
          <input
            type={key}
            value={formData.value}
            onChange={handleChange}
            name={key}
            key={key}
            className={
              hasError && value === "" ? "form--input_error" : "form--input"
            }
            placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
          />
        );
      }
    }

    setInputFields(inputFields);
  }

  useEffect(() => initInputFields(), [hasError]);

  function handleSubmit(e) {
    e.preventDefault();
    let hasError = false;

    for (var key in formData) {
      if (formData.hasOwnProperty(key) && formData[key] === "") {
        hasError = true;
      }
    }

    if (hasError) {
      setHasError(hasError);
      return;
    }

    fetch(`http://localhost:5000/${props.type}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then(console.log(`${props.type} request sent.`));
  }

  function handleChange(e) {
    const { name, value } = e.target;

    if (hasError) setHasError(false);

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <>
      <div className="form--main">
        <br />
        <br />
        <form onSubmit={handleSubmit} className="form--form" name="form--form">
          <label className="form--title">{props.type}</label>
          {hasError ? (
            <label className="form--error_message">
              Please fill out all the fields.
            </label>
          ) : (
            <label></label>
          )}
          {inputFields}
          <div>
            <button type="submit" className="form--button">
              {props.type}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
