import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2rwuuow", "template_xq4vgn6", form.current, {
        publicKey: "7xjmu1pAamliRzfSf",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2 id="page-3">Contact Me</h2>
        <p>Cultivating Connections: Reach out And Connect With Me</p>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="contact-item">
          <label placeholder="Full Name">Name</label>
          <input type="text" name="user_name" className="user-input" />
        </div>
        <div className="contact-item">
          <label placeholder="Email Address">Email</label>
          <input type="email" name="user_email" className="user-input" />
        </div>
        <div className="contact-item">
          <label placeholder="Message">Message</label>
          <textarea name="message" className="message-input" />
          <div className="contact-item">
            <input type="submit" value="Send" className="send-input" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
