import React, { useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  // Refs for form inputs
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5a2d2d71-cf24-4615-8899-e2230568b6ec");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Email sent successfully");

      // Clear form inputs
      if (nameRef.current && emailRef.current && messageRef.current) {
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
      }
    } else {
      toast.error("Failed to send email. Please try again later.");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="title-box">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>saurabhsharma132000@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />  <p>+91 9890494851</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Nagpur, Maharashtra</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name: </label>
          <input
            ref={nameRef}
            type="text"
            placeholder="Enter your name"
            name="name"
          />
          <label htmlFor="">Your Email: </label>
          <input
            ref={emailRef}
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <label htmlFor="">Write Your Message: </label>
          <textarea
            ref={messageRef}
            name="message"
            rows={8}
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
