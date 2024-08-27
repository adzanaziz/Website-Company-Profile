// src/components/AboutUs.js
import React, { useRef } from 'react';

const AboutUs = () => {
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent: ${messageRef.current.value}`);
    messageRef.current.value = '';
  };

  return (
    <div className="container mx-auto py-16 px-8">
      <h2 className="text-4xl font-bold text-blue-600 mb-8">About Us</h2>
      <p className="text-lg text-gray-700 mb-8">
        We are SmartPath, a leading company in tech solutions. Our mission is to provide high-quality products with exceptional service.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h3>
          <form onSubmit={handleSubmit}>
            <textarea
              ref={messageRef}
              placeholder="Enter your message"
              className="border p-4 w-full rounded-lg mb-4"
            ></textarea>
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Send Message</button>
          </form>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Location</h3>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27990807875!2d-74.25987198769935!3d40.69767006728325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5b2278e23%3A0xc80b8f06e177fe62!2sNew+York!5e0!3m2!1sen!2sus!4v1616581606118!5m2!1sen!2sus"
            className="w-full h-64 rounded-lg"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
