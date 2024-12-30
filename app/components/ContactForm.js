"use client"; // Ensures this component is treated as a Client Component

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "Your Name",
      to_email: "ke.bleach@gmail.com",
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        "service_x9c5lxl",
        "template_5754eaz",
        templateParams,
        "q1SI5s-QZcSnaWZy6"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          // Optionally, reset form data
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );
  };

  return (
    <section id="contact" className="contact py-8">
      <div className="container mx-auto px-4">
        <div className="section-title text-center">
          {/* Add your section title here */}
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start gap-8">
          {/* Contact Info */}
          <div className="info flex flex-col items-start space-y-6 w-full md:w-1/3">
            <div className="address">
              <h4 className="font-semibold text-lg">Location:</h4>
              <p>Downtown Houston Area</p>
            </div>
            <div className="email">
              <h4 className="font-semibold text-lg">Email:</h4>
              <p>
                <a
                  href="mailto:ke.bleach@gmail.com"
                  className="text-blue-600"
                >
                  ke.bleach@gmail.com
                </a>
              </p>
            </div>
            <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443088.0517941327!2d-95.73094394933668!3d29.817364687471006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1735594963061!5m2!1sen!2sus"
  width="500"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>


          </div>

          {/* Contact Form */}
          <div className="w-full md:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-black font-medium"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border border-black rounded p-2 w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-black font-medium"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border border-black rounded p-2 w-full"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-black font-medium"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="border border-black rounded p-2 w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-black font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="border border-black rounded p-2 w-full"
                  rows="6"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-black text-white p-2 rounded"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
