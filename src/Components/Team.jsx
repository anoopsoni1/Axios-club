import React from 'react'

function Team() {
    const teamMembers = [
        "Riya Sharma",
        "Arjun Verma",
        "Priya Singh",
        "Karan Mehta",
        "Aarav Joshi",
        "Ishita Patel",
        "Devansh Rao",
        "Sneha Iyer",
      ];
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-4 py-16">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-blue-600">Our Team</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            The amazing minds behind Axios Club.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-lg font-medium">
          {teamMembers.map((name, idx) => (
            <li
              key={idx}
              className="bg-blue-50 dark:bg-gray-800 rounded-lg py-3 px-4 hover:bg-blue-100 dark:hover:bg-gray-700 transition"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
      </div>
  )
}

export default Team