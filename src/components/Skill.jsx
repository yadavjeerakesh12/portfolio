import React from "react";

function Skill() {
  const skills = [
    {
      name: "C",
      level: 80,
      description: "Strong understanding of programming fundamentals and problem solving.",
    },
    {
      name: "C++",
      level: 80,
      description: "Used for object-oriented programming.",
    },
    {
      name: "Java",
      level: 75,
      description: "Used for object-oriented programming, DSA, application development and backend concepts.",
    },
    {
      name: "Python",
      level: 70,
      description: "Used for programming, automation and backend-related projects.",
    },
    {
      name: "HTML & CSS",
      level: 90,
      description: "Creating clean, responsive and user-friendly web interfaces.",
    },
    {
      name: "JavaScript",
      level: 70,
      description: "Working with DOM, APIs, events, ES6 and modern JavaScript.",
    },
    {
      name: "React",
      level: 75,
      description: "Building component-based and interactive web applications.",
    },
    {
      name: "Tailwind CSS",
      level: 75,
      description: "Creating responsive and modern user interfaces quickly.",
    },
    {
      name: "Supabase",
      level: 50,
      description: "Working with database connectivity, CRUD operations and authentication.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-5 py-10 sm:px-8 md:px-12 lg:px-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold">
          My{" "}
          <span className="text-fuchsia-600">
            Skills
          </span>
        </h1>

        <p className="mt-3 text-gray-600 text-lg">
          Technologies and tools I use to build projects
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md
            hover:shadow-xl transition duration-300"
          >

  
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold">
                {skill.name}
              </h2>
              <span className="text-fuchsia-600 font-bold">
                {skill.level}%
              </span>
            </div>

            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-fuchsia-600 rounded-full transition-all duration-700"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>

            <p className="mt-4 text-gray-600 leading-6">
              {skill.description}
            </p>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto mt-12 bg-gray-900 text-white rounded-2xl p-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Always <span className="text-fuchsia-400">Learning</span>
        </h2>
        <p className="mt-3 text-gray-300 text-lg">
          I'm continuously learning new technologies and
          improving my development and problem-solving skills.
        </p>
        <p className="mt-5 text-fuchsia-400 font-semibold text-xl">
          Learn • Build • Grow
        </p>
      </div>
    </div>
  );
}
export default Skill;