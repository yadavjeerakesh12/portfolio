import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gray-50 px-5 py-10 sm:px-8 md:px-12 lg:px-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold">
          About{" "}
          <span className="text-fuchsia-600">
            Me
          </span>
        </h1>
        <p className="mt-3 text-gray-600 text-lg">
          Get to know me and my development journey
        </p>
      </div>
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">

        <h2 className="text-2xl sm:text-3xl font-bold mb-5">
          Hi, I'm{" "}
          <span className="text-fuchsia-600">
            Rakesh Yadav
          </span>
        </h2>

        <p className="text-gray-700 text-base sm:text-lg leading-8">
          I'm a passionate Software Developer and B.Tech student (Going on)
          who enjoys creating modern, responsive and user-friendly
          applications. I love turning ideas into real-world
          projects and continuously improving my programming skills.
        </p>

        <p className="text-gray-700 text-base sm:text-lg leading-8 mt-4">
          My development journey includes working with React,
          JavaScript, Tailwind CSS, Java, C++, Python and Supabase.
          I also enjoy working with APIs, databases, authentication
          systems and responsive user interfaces.
        </p>

      </div>

      <div className="max-w-5xl mx-auto mt-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          What I <span className="text-fuchsia-600">Do</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-3">
              🌐 Web Development
            </h3>
            <p className="text-gray-600 leading-7">
              I build responsive and user-friendly websites
              using modern web technologies.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-3">
              ⚛️ React Development
            </h3>

            <p className="text-gray-600 leading-7">
              I create interactive React applications with
              reusable components and clean UI.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-3">
              🗄️ Database
            </h3>
            <p className="text-gray-600 leading-7">
              I work with databases and Supabase for storing
              and managing application data.
            </p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="max-w-5xl mx-auto mt-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          My <span className="text-fuchsia-600">Technologies</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="px-5 py-2 bg-orange-100 rounded-full font-semibold">
            HTML
          </span>
          <span className="px-5 py-2 bg-blue-100 rounded-full font-semibold">
            CSS
          </span>
          <span className="px-5 py-2 bg-yellow-100 rounded-full font-semibold">
            JavaScript
          </span>
          <span className="px-5 py-2 bg-cyan-100 rounded-full font-semibold">
            React
          </span>
          <span className="px-5 py-2 bg-purple-100 rounded-full font-semibold">
            Tailwind CSS
          </span>
          <span className="px-5 py-2 bg-red-100 rounded-full font-semibold">
            Java
          </span>
          <span className="px-5 py-2 bg-gray-200 rounded-full font-semibold">
            C/C++
          </span>
          <span className="px-5 py-2 bg-green-100 rounded-full font-semibold">
            Python
          </span>
          <span className="px-5 py-2 bg-emerald-100 rounded-full font-semibold">
            Supabase
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-12 bg-gray-900 text-white rounded-2xl p-7 sm:p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">
          My <span className="text-fuchsia-400">Goal</span>
        </h2>

        <p className="text-gray-300 text-base sm:text-lg leading-8">
          My goal is to become a skilled Full Stack Developer
          and build useful, efficient and scalable applications.
          I believe in learning continuously, building projects
          and improving every day.
        </p>
        <p className="mt-6 text-xl font-semibold text-fuchsia-400">
          Learn • Build • Grow
        </p>

      </div>

    </div>
  );
}

export default About;