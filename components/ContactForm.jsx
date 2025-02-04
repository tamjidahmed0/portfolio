'use client'
import Form from 'next/form'

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="max-w-lg w-full p-6 bg-white rounded-lg shadow-md">
        <p className="text-gray-700 text-lg">
          I am always open to discussing{" "}
          <strong className="text-black">new projects, opportunities in tech world, partnerships</strong> and more so{" "}
          <strong className="text-black">mentorship</strong>.
        </p>
        <Form className="mt-6">
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 font-medium">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="mt-1 w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-medium">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="mt-1 w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-600 font-medium">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              className="mt-1 w-full border border-gray-300 rounded-lg p-2.5 h-24 resize-none bg-[#1E1E1E]  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />

          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
