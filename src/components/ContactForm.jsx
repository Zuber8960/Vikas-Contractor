import React from "react";
import "../styles/contact.css";

export default function ContactForm() {
  return (
    <section id="contact" className="contact container">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
