import React from 'react'

function Home() {
  return (
       <>
      <div className="space-y-24">
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-100 to-blue-50 dark:from-gray-900 dark:to-gray-800 px-4"
      >
        <h1 className="text-5xl font-extrabold mb-4 text-blue-700 dark:text-white">
          Welcome to Axios Club
        </h1>
        <p className="text-lg max-w-xl text-gray-700 dark:text-gray-300 mb-6">
          The Official Development Club of IIIT Bhopal — where innovation meets code.
        </p>
        <a
          href="#join"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-blue-700 transition"
        >
          Join the Club
        </a>
      </section>
      </div>
   </>
  )
}

export default Home