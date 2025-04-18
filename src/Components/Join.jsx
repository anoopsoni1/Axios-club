import React from 'react'

function Join() {
  return (
 <>
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-4 py-16">
      <div className="max-w-3xl mx-auto space-y-10 text-center">
        <div>
          <h1 className="text-4xl font-bold text-blue-600">Join Axios Club</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-3">
            Ready to build awesome projects, learn by doing, and work with the best devs in IIIT Bhopal?
          </p>
        </div>
        <div className="space-y-4 text-left">
          <h2 className="text-2xl font-semibold text-blue-500 text-center">Why Join?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>🚀 Work on real-world, impactful projects</li>
            <li>👨‍💻 Learn full-stack development, Git, open source & more</li>
            <li>🤝 Collaborate with like-minded peers</li>
            <li>📈 Build a strong dev portfolio</li>
            <li>🎓 Workshops, hackathons, and mentorship</li>
          </ul>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-4">Express Your Interest</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none"
              required
            />
            <input
              type="text"
              placeholder="Your IIIT Bhopal Scholar No."
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none"
              required
            />
             <input
              type="email"
              placeholder="Your IIIT Bhopal Email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none"
              required
            />
            <textarea
              placeholder="Why do you want to join?"
              rows="4"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              disabled
              title="Form not connected yet"
            >
              Submit (Coming Soon)
            </button>
          </form>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          You can also reach us at <a className="text-blue-500 underline">axios@iiitbhopal.ac.in</a>
        </p>
      </div>
    </div>
 </>
  )
}

export default Join