import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Contact Us</h1>
        <p className="text-gray-600 mb-6">
          We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out using the form below or through our contact details.
        </p>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-700 mb-2">
            <strong>Email:</strong> 
            <a href="mailto:info@chandamama.tech" className="text-blue-500 hover:underline"> info@chandamama.tech</a>
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Phone:</strong> 123-456-7890
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Address:</strong> 123 Chandamama Lane, City, State, Zip Code
          </p>
          <p className="text-gray-700">
            We look forward to connecting with you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
