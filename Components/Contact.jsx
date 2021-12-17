import React, { useState } from "react";
import styles from "../styles/Contact.module.scss";

import { useRouter } from "next/router";

export default function Contact({ title }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Confirmation message seen on success page after filling the contact form out
  const ConfirmationMessage = (
    <div className={styles.confirmed}>
      <p>
        Thank you for submitting this form. You should receive response within
        24-48 hours.
      </p>

      <button onClick={() => setSubmitted(false)}>
        Submit Another Response
      </button>
    </div>
  );

  const ContactForm = (
    <form
      className="container"
      method="POST"
      name="contact-form"
      action="/"
      onSubmit={() => setSubmitted(true)}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input
        type="hidden"
        name="subject"
        value={`You've got mail from ${name}`}
      />
      <input type="hidden" name="form-name" value="contact-form" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className={styles.group}>
        <div className={styles.one}>
          <input
            id="name"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
          />
        </div>
        <div className={styles.two}>
          <input
            id="company"
            name="company"
            required
            type="text"
            placeholder="Company"
          />
        </div>
      </div>

      <div className={styles.group}>
        <div className={styles.one}>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="E-mail Address"
          />
        </div>
        <div className={styles.two}>
          <input
            id="phone"
            type="phone"
            name="phone"
            required
            placeholder="Phone Number"
          />
        </div>
      </div>
      <textarea
        id="message"
        name="message"
        required
        placeholder="Message"
        rows="3"
      />

      <button type="submit">Submit</button>
    </form>
  );

  return (
    <div className={styles.contact}>
      <h2>{title}</h2>
      {!submitted ? ContactForm : ConfirmationMessage}
    </div>
  );
}
