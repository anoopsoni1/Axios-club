import React from 'react'

function About() {
  return (
    <>
     <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-4 py-12">
      <div className="max-w-5xl mx-auto space-y-10">

        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">About Axios Club</h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Empowering IIIT Bhopal students through real-world development, collaboration, and innovation.
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-500">🚀 Our Mission</h2>
          <p>
            Axios Club is the development hub of IIIT Bhopal, where passionate coders, designers, and innovators come together to build meaningful software. We bridge the gap between classroom knowledge and real-world tech challenges by creating full-stack apps, open-source tools, and internal institute solutions.
          </p>
        </section>


        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-500">🛠️ What We Do</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Organize coding sprints, workshops, and tech meetups.</li>
            <li>Build and maintain projects that solve real problems.</li>
            <li>Collaborate on open-source initiatives.</li>
            <li>Help students grow into industry-ready developers.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-500">🤝 Why Join Axios?</h2>
          <p>
            Being a part of Axios means learning by doing. Whether you're a backend enthusiast, a frontend wizard, a UI/UX designer, or just starting out, you'll find a community that supports and challenges you.
          </p>
        </section>

    
        <div className="text-center pt-6">
          <a
            href="#join"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-blue-700 transition"
          >
            Join the Movement 🚀
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default About