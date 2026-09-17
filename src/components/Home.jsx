// import React from 'react'
// export default function Home() {
//   return (
//     <>
//       <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-10 md:px-12 lg:px-20">

//         <div className="w-full md:w-1/2 text-center md:text-left">

//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
//             Hi, I'm
//             <span className="text-fuchsia-600">
//               {" "}Rakesh Yadav
//             </span>
//           </h1>

//           <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
//             I'm a passionate Software Developer who loves building
//             clean, responsive and user-friendly web applications.
//             I enjoy working with React, Java, Python and modern
//             web technologies.
//           </p>
//           <div>
//             <button>Download Resume</button>
//             <button>View My Projects</button>
//             <button>Let's Connect</button>
//           </div>
//         </div>

//         <div className="w-full md:w-1/2 flex justify-center">
//           <img
//             src="/self.jpeg"
//             alt="Rakesh Yadav"
//             className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover rounded-full"
//           />

//         </div>

//       </div>
//     </>
//   )
// }


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const [bgIndex, setBgIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
const navigate = useNavigate();
  // Background gradients
  const backgrounds = [
    "linear-gradient(135deg, #0f172a, #581c87, #0f172a)",
    "linear-gradient(135deg, #111827, #1e3a8a, #312e81)",
    "linear-gradient(135deg, #020617, #164e63, #0f172a)",
    "linear-gradient(135deg, #1e1b4b, #701a75, #111827)",
    "linear-gradient(135deg, #172554, #4c1d95, #0f172a)",
  ];

  // Change background every second
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Typing animation
  useEffect(() => {
    const text = "Rakesh Yadav";
    let index = 0;

    const typing = setInterval(() => {
      setTypedText(text.slice(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(typing);
      }
    }, 150);

    return () => clearInterval(typing);
  }, []);

  return (
    <section
      className="relative min-h-screen overflow-hidden text-white flex items-center transition-all duration-700"
      style={{
        background: backgrounds[bgIndex],
      }}
    >

      {/* Animated glowing circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-10 right-10 w-56 h-56 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>


      {/* Floating Code */}

      <div className="absolute inset-0 pointer-events-none select-none">

        <span className="absolute top-[10%] left-[5%] text-cyan-300/30 text-2xl font-mono animate-bounce">
          {"<React />"}
        </span>

        <span className="absolute top-[20%] right-[8%] text-fuchsia-300/30 text-xl font-mono animate-pulse">
          {"{ JavaScript }"}
        </span>

        <span className="absolute top-[45%] left-[8%] text-green-300/30 text-xl font-mono animate-bounce">
          {"const developer = true;"}
        </span>

        <span className="absolute bottom-[20%] right-[10%] text-yellow-300/30 text-xl font-mono animate-pulse">
          {"print('Hello World')"}
        </span>

        <span className="absolute bottom-[10%] left-[20%] text-blue-300/30 text-2xl font-mono animate-bounce">
          {"<div></div>"}
        </span>

        <span className="absolute top-[70%] right-[35%] text-purple-300/30 text-lg font-mono animate-pulse">
          {"npm install"}
        </span>

        <span className="absolute top-[12%] right-[40%] text-pink-300/20 text-lg font-mono">
          {"function App() {"}
        </span>

        <span className="absolute bottom-[30%] left-[40%] text-orange-300/20 text-lg font-mono">
          {"return <Home />"}
        </span>

      </div>

      {/* Main Content */}

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-10 md:px-12 lg:px-20">

        {/* Left Side */}

        <div className="w-full md:w-1/2 text-center md:text-left">

          <p className="text-cyan-300 font-mono text-lg mb-3">
            &lt;Hello Developer /&gt;
          </p>


          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">

            Hi, I'm{" "}

            <span className="text-fuchsia-400">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>

          </h1>


          <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl">

            I'm a passionate Software Developer who loves building
            clean, responsive and user-friendly web applications.
            I enjoy working with{" "}

            <span className="text-cyan-300 font-semibold">
              React
            </span>
            ,{" "}

            <span className="text-orange-300 font-semibold">
              Java
            </span>
            ,{" "}

            <span className="text-yellow-300 font-semibold">
              Python
            </span>{" "}

            and modern web technologies.

          </p>


          {/* Buttons */}

          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">

            <button
              className="
                px-6 py-3
                rounded-full
                bg-fuchsia-600
                hover:bg-fuchsia-500
                shadow-lg shadow-fuchsia-500/30
                hover:shadow-fuchsia-400/50
                hover:-translate-y-1
                transition-all duration-300
                font-semibold
              "
            >
              Download Resume
            </button>


            <button
              className="
                px-6 py-3
                rounded-full
                border border-cyan-400
                text-cyan-300
                hover:bg-cyan-400
                hover:text-black
                hover:-translate-y-1
                transition-all duration-300
                font-semibold
              "
              onClick={() => navigate("/project")}
            >
              View My Projects
            </button>


            <button
              className="
                px-6 py-3
                rounded-full
                border border-white/40
                bg-white/10
                backdrop-blur-md
                hover:bg-white
                hover:text-black
                hover:-translate-y-1
                transition-all duration-300
                font-semibold
              "
              onClick={() => navigate("/contact")}
            >
              Let's Connect
            </button>

          </div>


          {/* Developer Code */}

          <div className="mt-8 inline-block">

            <div className="
              px-5 py-3
              rounded-xl
              bg-black/40
              backdrop-blur-md
              border border-white/10
              font-mono
              text-sm
              text-green-300
              shadow-xl
            ">

              <span className="text-purple-400">const</span>{" "}
              developer ={" "}
              <span className="text-yellow-300">
                "Rakesh Yadav"
              </span>;

            </div>

          </div>

        </div>


        {/* Right Side - IMAGE UNCHANGED */}

        <div className="w-full md:w-1/2 flex justify-center">

          <div className="relative">

            {/* Glow behind image */}

            <div className="
              absolute
              inset-0
              rounded-full
              bg-fuchsia-500/30
              blur-3xl
              scale-110
              animate-pulse
            "></div>


            {/* Image */}

            <img
              src="/self.jpeg"
              alt="Rakesh Yadav"
              className="
                relative
                w-48 h-48
                sm:w-56 sm:h-56
                md:w-64 md:h-64
                lg:w-80 lg:h-80
                object-cover
                rounded-full
                border-4
                border-white/20
                shadow-2xl
              "
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;
