import React, { useState } from "react";
import "./FormContent.css"; // import the CSS file

function FormContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Later connect this to your backend (fetch/axios)
    setFormData({ name: "", email: "", message: "" });
    alert("Thank you! Your message has been received.");
  };

  return (
    //Form section
    <div className="form-container">
      <h1 className="main-heading">
        Christian Greetings in the Name of Our Lord Jesus Christ.
      </h1>
      <p className="sub-heading">
        Send Us A Message, Prayer Request, Question etc.
      </p>

      <form onSubmit={handleSubmit}>
        <label className="form-label">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />

        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
        />

        <label className="form-label">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message, prayer request, or question here..."
          rows="4"
          required
        />

        <button type="submit">Send Message</button>
      </form>

      {/* Contact Info Section */}
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p><strong>Phone:</strong> +234 803 747 8247</p>
        <p><strong>Location:</strong> Alvan Ikoku College of Education, Owerri, Imo State, Nigeria</p>
        <p><strong>Email:</strong> endtimemessage@gmail.com</p>
      </div>

    </div>
    

  
  );
}

export default FormContent