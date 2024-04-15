import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Contact me</h2>
        <p>Cultivating Connections: Reach out And Connect With Me</p>
      </div>
      <form action="#">
        <div className="input-box">
          <div className="input-field field">
            <input
              type="text"
              placeholder="Full Name"
              id="name"
              className="item"
              autoComplete="off"
            />
            <div className="input-field field">
              <input
                type="text"
                placeholder="Email Address"
                id="email"
                className="item"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="input-field field">
            <input
              type="text"
              placeholder="Phone Number"
              id="phone"
              className="item"
              autoComplete="off"
            />
            <div className="input-field field">
              <input
                type="text"
                placeholder="Subject"
                id="subject"
                className="item"
                autoComplete="off"
              />
            </div>
          </div>
        </div>
        <div className="textarea-field field">
          <textarea
            name=""
            id="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            className="item"
            autoComplete="off"
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
