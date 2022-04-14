import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import "../Contact/contact.css";

function ContactForm() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Email is invalid. Try Again!");
      } else {
        setErrorMessage("");
      }
    }
    if (!e.target.value.length) {
      setErrorMessage(`${e.target.name} is required.`);
    } else {
      setErrorMessage("");
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  const backHome = () => {
    window.reload("/");
  };

  return (
    <section>
      <h1 className="is-size-3-mobile is-size-3 has-text-centered mt-2">Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="columns is-mobile">
          <div className="column is-three-fifths is-offset-one-fifth field">
            <label className="label" htmlFor="name">
              Name
            </label>
            <div className="control has-icons-left">
              <input className={errorMessage ? "input is-danger" : "input"} type="text" name="name" defaultValue={name} placeholder="name" onBlur={handleChange} />
              <span className="icon is-small is-left">
                <i className="fa-solid fa-user"></i>
              </span>
            </div>
            {errorMessage && <p className="help is-danger">Name is required</p>}

            <label className="label mt-1" htmlFor="email">
              Email
            </label>
            <div className="control has-icons-left">
              <input className={errorMessage ? "input is-danger" : "input"} type="email" name="email" defaultValue={email} placeholder="email" onBlur={handleChange} />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
            {errorMessage && <p className="help is-danger">This email is invalid</p>}

            <label className="label mt-1" htmlFor="message">
              Message
            </label>
            <div className="control">
              <textarea className={errorMessage ? "textarea is-danger" : "textarea"} name="message" defaultValue={message} placeholder="Textarea" onBlur={handleChange}></textarea>
            </div>
            {errorMessage && <p className="help is-danger">Message is required</p>}

            <div className="field is-grouped pt-3">
              <div className="control">
                <button className="button is-link" type="submit">
                  Submit
                </button>
              </div>
              <div className="control">
                <button className="button is-link is-light" onClick={backHome}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
