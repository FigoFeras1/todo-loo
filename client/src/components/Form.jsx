import { useState, useEffect } from "react";
import axios from "axios";

import "../../static/form.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

export default function Form(props) {
  /* Idea: Try using this component as a 'parent' component for Login and Register  */
  const [formData, setFormData] = useState(props.formData);
  const [hasError, setHasError] = useState(false);
  /* TODO: Consider making the inputFields have an error field, i.e.
    inputFields = { jsxElement: <input>..., error: "" || "<error message>"}  */
  const [inputFields, setInputFields] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  console.log(`Form: ${JSON.stringify(formData)}, ${hasError}`);

  useEffect(() => {
    setFormData(props.formData);
    setHasError(false);
  }, [props.type]);

  useEffect(() => {
    initInputFields();
  }, [formData, hasError]);

  // useEffect(() => {
  //   initInputFields();
  // }, [hasError]);

  const titleCase = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <>
      <Navbar loading={loading} />
      <div className="form--main">
        <br />
        <br />
        <form
          method="POST"
          onSubmit={handleSubmit}
          className="form--form"
          name="form--form"
        >
          <label className="form--title">{titleCase(props.type)}</label>
          {hasError ? (
            <label className="form--error_message">
              Please fill out all the fields.
            </label>
          ) : (
            <label></label>
          )}
          {inputFields}
          <div>
            <button
              type="submit"
              onSubmit={handleSubmit}
              className="form--button"
            >
              {titleCase(props.type)}
            </button>
          </div>
        </form>
      </div>
    </>
  );

  function initInputFields() {
    console.log(
      `initInputFields: Form: ${props.type}, FormData: ${JSON.stringify(
        formData
      )}`
    );
    let inputFields = [];

    for (var key in formData) {
      if (formData?.hasOwnProperty(key)) {
        const value = formData[key];

        inputFields.push(
          <input
            type={key === "confirmPassword" ? "password" : key}
            value={formData.value}
            onChange={handleChange}
            name={key}
            key={key}
            className={
              hasError && value === "" ? "form--input_error" : "form--input"
            }
            placeholder={
              key === "confirmPassword" ? "Confirm Password" : titleCase(key)
            }
          />
        );
      }
    }

    setInputFields(inputFields);
  }

  async function handleSubmit(e) {
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

    setLoading(true);

    await axios
      .post(`http://localhost:5000/${props.type}`, formData)
      .then((result) => {
        localStorage.setItem("userId", result.data.userId);
        localStorage.setItem("token", result.data.token);
      })
      .catch((err) => console.log(err));

    setLoading(false);

    navigate("/", { replace: true });
    window.history.replaceState(null, "", "/");
    window.location.href = "/";
  }

  function handleChange(e) {
    const { name, value } = e.target;

    if (hasError) setHasError(false);

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
}
