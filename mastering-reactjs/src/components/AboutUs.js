
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
        Kami adalah Adziz Store, sebuah perusahaan Product yang menyediakan produk berkualitas tinggi dengan layanan yang luar biasa.
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
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">lokasi</h3>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126777.26243091845!2d106.68942907349495!3d-6.22972884839373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1a8b55d64d7%3A0xa402b31aa5dd29fd!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1693172567619!5m2!1sen!2sid"
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
