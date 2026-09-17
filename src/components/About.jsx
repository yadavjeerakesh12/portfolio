// import React from "react";

// function About() {
//   return (
//     <div className="min-h-screen bg-gray-50 px-5 py-10 sm:px-8 md:px-12 lg:px-20">
//       <div className="text-center mb-12">
//         <h1 className="text-4xl sm:text-5xl font-bold">
//           About{" "}
//           <span className="text-fuchsia-600">
//             Me
//           </span>
//         </h1>
//         <p className="mt-3 text-gray-600 text-lg">
//           Get to know me and my development journey
//         </p>
//       </div>
//       <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">

//         <h2 className="text-2xl sm:text-3xl font-bold mb-5">
//           Hi, I'm{" "}
//           <span className="text-fuchsia-600">
//             Rakesh Yadav
//           </span>
//         </h2>

//         <p className="text-gray-700 text-base sm:text-lg leading-8">
//           I'm a passionate Software Developer and B.Tech student (Going on)
//           who enjoys creating modern, responsive and user-friendly
//           applications. I love turning ideas into real-world
//           projects and continuously improving my programming skills.
//         </p>

//         <p className="text-gray-700 text-base sm:text-lg leading-8 mt-4">
//           My development journey includes working with React,
//           JavaScript, Tailwind CSS, Java, C++, Python and Supabase.
//           I also enjoy working with APIs, databases, authentication
//           systems and responsive user interfaces.
//         </p>

//       </div>

//       <div className="max-w-5xl mx-auto mt-10">
//         <h2 className="text-3xl font-bold text-center mb-8">
//           What I <span className="text-fuchsia-600">Do</span>
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
//             <h3 className="text-xl font-bold mb-3">
//               🌐 Web Development
//             </h3>
//             <p className="text-gray-600 leading-7">
//               I build responsive and user-friendly websites
//               using modern web technologies.
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
//             <h3 className="text-xl font-bold mb-3">
//               ⚛️ React Development
//             </h3>

//             <p className="text-gray-600 leading-7">
//               I create interactive React applications with
//               reusable components and clean UI.
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
//             <h3 className="text-xl font-bold mb-3">
//               🗄️ Database
//             </h3>
//             <p className="text-gray-600 leading-7">
//               I work with databases and Supabase for storing
//               and managing application data.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Skills */}
//       <div className="max-w-5xl mx-auto mt-12">
//         <h2 className="text-3xl font-bold text-center mb-8">
//           My <span className="text-fuchsia-600">Technologies</span>
//         </h2>
//         <div className="flex flex-wrap justify-center gap-4">
//           <span className="px-5 py-2 bg-orange-100 rounded-full font-semibold">
//             HTML
//           </span>
//           <span className="px-5 py-2 bg-blue-100 rounded-full font-semibold">
//             CSS
//           </span>
//           <span className="px-5 py-2 bg-yellow-100 rounded-full font-semibold">
//             JavaScript
//           </span>
//           <span className="px-5 py-2 bg-cyan-100 rounded-full font-semibold">
//             React
//           </span>
//           <span className="px-5 py-2 bg-purple-100 rounded-full font-semibold">
//             Tailwind CSS
//           </span>
//           <span className="px-5 py-2 bg-red-100 rounded-full font-semibold">
//             Java
//           </span>
//           <span className="px-5 py-2 bg-gray-200 rounded-full font-semibold">
//             C/C++
//           </span>
//           <span className="px-5 py-2 bg-green-100 rounded-full font-semibold">
//             Python
//           </span>
//           <span className="px-5 py-2 bg-emerald-100 rounded-full font-semibold">
//             Supabase
//           </span>
//         </div>
//       </div>

//       <div className="max-w-5xl mx-auto mt-12 bg-gray-900 text-white rounded-2xl p-7 sm:p-10 text-center">
//         <h2 className="text-3xl font-bold mb-4">
//           My <span className="text-fuchsia-400">Goal</span>
//         </h2>

//         <p className="text-gray-300 text-base sm:text-lg leading-8">
//           My goal is to become a skilled Full Stack Developer
//           and build useful, efficient and scalable applications.
//           I believe in learning continuously, building projects
//           and improving every day.
//         </p>
//         <p className="mt-6 text-xl font-semibold text-fuchsia-400">
//           Learn • Build • Grow
//         </p>

//       </div>

//     </div>
//   );
// }

// export default About;



import React from "react";

function About() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white px-5 py-10 sm:px-8 md:px-12 lg:px-20">

      {/* ================= BACKGROUND ================= */}

      {/* Gradient Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>


      {/* Floating Code */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">

        <span className="absolute top-[10%] left-[5%] text-cyan-300/20 text-2xl font-mono animate-bounce">
          {"<About />"}
        </span>

        <span className="absolute top-[20%] right-[8%] text-fuchsia-300/20 text-xl font-mono animate-pulse">
          {"const developer = true;"}
        </span>

        <span className="absolute top-[45%] left-[3%] text-green-300/20 text-lg font-mono animate-pulse">
          {"npm install"}
        </span>

        <span className="absolute bottom-[25%] right-[5%] text-yellow-300/20 text-xl font-mono animate-bounce">
          {"{ React }"}
        </span>

        <span className="absolute bottom-[10%] left-[15%] text-blue-300/20 text-xl font-mono">
          {"function Developer() {}"}
        </span>

        <span className="absolute top-[65%] right-[35%] text-purple-300/20 text-lg font-mono animate-pulse">
          {"<Code />"}
        </span>

      </div>


      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10">

        {/* ================= HEADER ================= */}

        <div className="text-center mb-12 animate-[fadeIn_1s_ease-out]">

          <p className="text-cyan-400 font-mono text-sm sm:text-base mb-3 tracking-widest">
            &lt;developer /&gt;
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">

            About{" "}

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-400">
              Me
            </span>

          </h1>

          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            Get to know me and my development journey
          </p>

        </div>


        {/* ================= ABOUT CARD ================= */}

        <div
          className="
            max-w-5xl mx-auto
            bg-white/5
            backdrop-blur-xl
            border border-white/10
            rounded-3xl
            shadow-2xl
            p-6 sm:p-8 md:p-10
            transition-all duration-500
            hover:-translate-y-2
            hover:border-fuchsia-500/40
            hover:shadow-fuchsia-500/10
          "
        >

          <h2 className="text-2xl sm:text-3xl font-bold mb-5">

            Hi, I'm{" "}

            <span className="text-fuchsia-400">
              Rakesh Yadav
            </span>

          </h2>


          <p className="text-gray-300 text-base sm:text-lg leading-8">

            I'm a passionate Software Developer and B.Tech student
            who enjoys creating modern, responsive and user-friendly
            applications. I love turning ideas into real-world
            projects and continuously improving my programming skills.

          </p>


          <p className="text-gray-300 text-base sm:text-lg leading-8 mt-5">

            My development journey includes working with React,
            JavaScript, Tailwind CSS, Java, C++, Python and Supabase.
            I also enjoy working with APIs, databases, authentication
            systems and responsive user interfaces.

          </p>

        </div>


        {/* ================= WHAT I DO ================= */}

        <div className="max-w-5xl mx-auto mt-16">

          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">

            What I{" "}

            <span className="text-fuchsia-400">
              Do
            </span>

          </h2>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">


            {/* Card 1 */}

            <div
              className="
                group
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                p-6
                rounded-2xl
                transition-all duration-500
                hover:-translate-y-3
                hover:bg-white/10
                hover:border-cyan-400/40
                hover:shadow-xl
                hover:shadow-cyan-500/10
              "
            >

              <div className="text-4xl mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                🌐
              </div>

              <h3 className="text-xl font-bold mb-3">
                Web Development
              </h3>

              <p className="text-gray-400 leading-7">
                I build responsive and user-friendly websites
                using modern web technologies.
              </p>

            </div>


            {/* Card 2 */}

            <div
              className="
                group
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                p-6
                rounded-2xl
                transition-all duration-500
                hover:-translate-y-3
                hover:bg-white/10
                hover:border-fuchsia-400/40
                hover:shadow-xl
                hover:shadow-fuchsia-500/10
              "
            >

              <div className="text-4xl mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                ⚛️
              </div>

              <h3 className="text-xl font-bold mb-3">
                React Development
              </h3>

              <p className="text-gray-400 leading-7">
                I create interactive React applications with
                reusable components and clean UI.
              </p>

            </div>


            {/* Card 3 */}

            <div
              className="
                group
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                p-6
                rounded-2xl
                transition-all duration-500
                hover:-translate-y-3
                hover:bg-white/10
                hover:border-green-400/40
                hover:shadow-xl
                hover:shadow-green-500/10
              "
            >

              <div className="text-4xl mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                🗄️
              </div>

              <h3 className="text-xl font-bold mb-3">
                Database
              </h3>

              <p className="text-gray-400 leading-7">
                I work with databases and Supabase for storing
                and managing application data.
              </p>

            </div>

          </div>

        </div>


        {/* ================= TECHNOLOGIES ================= */}

        <div className="max-w-5xl mx-auto mt-16">

          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">

            My{" "}

            <span className="text-cyan-400">
              Technologies
            </span>

          </h2>


          <div className="flex flex-wrap justify-center gap-4">

            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind CSS",
              "Java",
              "C/C++",
              "Python",
              "Supabase",
            ].map((tech) => (

              <span
                key={tech}
                className="
                  px-5 py-3
                  rounded-full
                  bg-white/5
                  border border-white/10
                  text-gray-300
                  font-semibold
                  backdrop-blur-md
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-fuchsia-500/20
                  hover:border-fuchsia-400
                  hover:text-white
                  hover:shadow-lg
                  hover:shadow-fuchsia-500/20
                  cursor-default
                "
              >
                {tech}
              </span>

            ))}

          </div>

        </div>


        {/* ================= GOAL ================= */}

        <div
          className="
            max-w-5xl mx-auto
            mt-16
            bg-gradient-to-br
            from-fuchsia-600/20
            via-purple-600/10
            to-cyan-500/20
            backdrop-blur-xl
            border border-white/10
            rounded-3xl
            p-7 sm:p-10
            text-center
            transition-all duration-500
            hover:-translate-y-2
            hover:border-fuchsia-400/30
          "
        >

          <h2 className="text-3xl sm:text-4xl font-bold mb-5">

            My{" "}

            <span className="text-fuchsia-400">
              Goal
            </span>

          </h2>


          <p className="text-gray-300 text-base sm:text-lg leading-8 max-w-3xl mx-auto">

            My goal is to become a skilled Full Stack Developer
            and build useful, efficient and scalable applications.
            I believe in learning continuously, building projects
            and improving every day.

          </p>


          <p className="mt-7 text-xl font-bold">

            <span className="text-cyan-400">
              Learn
            </span>

            {" • "}

            <span className="text-fuchsia-400">
              Build
            </span>

            {" • "}

            <span className="text-purple-400">
              Grow
            </span>

          </p>

        </div>


        {/* Bottom spacing */}

        <div className="h-10"></div>

      </div>

    </div>
  );
}

export default About;

