import React from 'react'

function Contact() {
  return (
  <>
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600">Contact Us</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-3">
            Got questions? Ideas? Just want to say hi? Drop us a message!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-500">Reach Out</h2>
            <p><strong>Email:</strong> <a className="text-blue-500 underline">axios@iiitbhopal.ac.in</a></p>
            <p><strong>Location:</strong> IIIT Bhopal Campus, Bhopal, India</p>
            <p><strong>Follow us:</strong><img src="../public/axios.iiitbhopal_qr.png" height={70} width={70} alt="" /></p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-4">Send a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
              />
              <button
                type="submit"
                disabled
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                title="Form not connected yet"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Contact