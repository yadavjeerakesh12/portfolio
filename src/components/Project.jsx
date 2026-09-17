import React from "react";

function Project() {

  const projects = [
    {
      title: "Student Record Management",
      description:
        "A database-connected student management application with CRUD operations for managing student records.",
      technologies: ["React", "Supabase", "Tailwind CSS"],
      github: "https://github.com/yadavjeerakesh12/Database-inject",
      live: "https://database-inject.vercel.app/",
    },

    {
      title: "Mathematical Function",
      description:
        "A web project focused on mathematical functions and interactive calculations.",
      technologies: ["React", "JavaScript", "CSS"],
      github: "https://github.com/yadavjeerakesh12/mathematical-function",
      live: "https://mathematical-function.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-5 py-10 sm:px-8 md:px-12 lg:px-20">

      {/* Heading */}
      <div className="text-center mb-12">

        <h1 className="text-4xl sm:text-5xl font-bold">
          My{" "}
          <span className="text-fuchsia-600">
            Projects
          </span>
        </h1>

        <p className="mt-3 text-gray-600 text-lg">
          Some of the projects I have built while learning and
          improving my development skills.
        </p>

      </div>


      {/* Project Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {projects.map((project, index) => (

          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden
                      hover:shadow-2xl hover:-translate-y-2
                      transition duration-300"
          >

            {/* Project Image */}
            <div className="h-48 bg-linear-to-br from-fuchsia-500 to-purple-700
                            flex items-center justify-center">

              <h2 className="text-white text-2xl font-bold text-center px-5">
                {project.title}
              </h2>

            </div>


            {/* Content */}
            <div className="p-6">

              <h2 className="text-2xl font-bold mb-3">
                {project.title}
              </h2>

              <p className="text-gray-600 leading-7">
                {project.description}
              </p>


              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-5">

                {project.technologies.map((tech, techIndex) => (

                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-fuchsia-100
                              text-fuchsia-700 rounded-full
                              text-sm font-semibold"
                  >
                    {tech}
                  </span>

                ))}

              </div>


              {/* Buttons */}
              <div className="flex gap-4 mt-6">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 bg-gray-900 text-white
                            rounded-lg hover:bg-gray-700 transition"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 bg-fuchsia-600 text-white
                             rounded-lg hover:bg-fuchsia-700 transition"
                >
                  Live Demo
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>


      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto mt-14 text-center">

        <h2 className="text-2xl sm:text-3xl font-bold">
          More projects are{" "}
          <span className="text-fuchsia-600">
            coming soon...
          </span>
        </h2>

        <p className="mt-3 text-gray-600">
          I'm continuously building new projects to improve my
          development skills.
        </p>

      </div>

    </div>
  );
}

export default Project;