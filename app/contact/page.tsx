"use client";
import { useState } from "react";
import classes from "./contact.module.css";

type FormData = {
  email: string;
  name: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  console.log(formData);

  const { email, name, message }: FormData = formData;

  return (
    <section className={`container ${classes.contact}`}>
      <h1>How can we help you?</h1>

      <form className={classes.form} onSubmit={() => {}}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              value={email}
              onChange={handleChange}
            />
          </div>

          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              name="name"
              required
              value={name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="name">Your Mesage</label>
          <textarea
            id="message"
            name="message"
            required
            value={message}
            onChange={handleChange}
            rows={5}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button className={`btn ${classes.formSubmit}`}>Send Message</button>
        </div>
      </form>
    </section>
  );
}
