// import React, { useState } from "react";
// import { supabase } from './supabase';
// import Swal from 'sweetalert2';
// function Contact() {

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   function handleChange(e) {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     const { data: newStudent, error } = await supabase
//       .from("User-data")
//       .insert([
//         {
//           name: formData.name,
//           email: formData.email,
//           message: formData.message
//         }
//       ])
//     if (error) {
//       Swal.fire({
//         icon: "error",
//         title: "Updated fail ",
//         text: `${error.message}.`,
//         timer: 1500,
//         showConfirmButton: false
//     });
//       return;
//     }
//     Swal.fire({
//         icon: "success",
//         title: "Updated!",
//         text: "Student record updated successfully.",
//         timer: 1500,
//         showConfirmButton: false
//     });
//     setFormData({
//       name: "",
//       email: "",
//       message: "",
//     });
//   }
//   return (
//     <div className="min-h-screen bg-gray-50 px-5 py-10 sm:px-8 md:px-12 lg:px-20">
//       <div className="text-center mb-12">
//         <h1 className="text-4xl sm:text-5xl font-bold">
//           Contact{" "}
//           <span className="text-fuchsia-600">
//             Me
//           </span>
//         </h1>

//         <p className="mt-3 text-gray-600 text-lg">
//           Have a project or idea? Let's talk!
//         </p>

//       </div>

//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

//         <div className="bg-gray-900 text-white rounded-2xl p-7 sm:p-10">

//           <h2 className="text-3xl font-bold mb-6">
//             Let's <span className="text-fuchsia-400">Connect</span>
//           </h2>

//           <p className="text-gray-300 leading-7 mb-8">
//             I'm always interested in discussing new projects,
//             development ideas and opportunities. Feel free to
//             reach out to me.
//           </p>

//           <div className="mb-6">

//             <h3 className="text-lg font-semibold text-fuchsia-400">
//               📧 Email
//             </h3>

//             <p className="text-gray-300 mt-1 break-all">
//               rj744121@gmail.com
//             </p>

//           </div>

//           <div className="mb-6">

//             <h3 className="text-lg font-semibold text-fuchsia-400">
//               📍 Location
//             </h3>

//             <p className="text-gray-300 mt-1">
//               Punjab, India
//             </p>

//           </div>
//           <div>

//             <h3 className="text-lg font-semibold text-fuchsia-400 mb-3">
//               🌐 Social
//             </h3>

//             <div className="flex gap-4">

//               <a
//                 href="https://github.com/yadavjeerakesh12"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="px-4 py-2 bg-gray-700 rounded-lg
//                           hover:bg-fuchsia-600 transition"
//               >
//                 GitHub
//               </a>

//               <a
//                 href="https://www.linkedin.com/in/rakesh-yadav12?utm_source=share_via&utm_content=profile&utm_medium=member_android"
//                 target="_blank"
//                 className="px-4 py-2 bg-gray-700 rounded-lg
//                           hover:bg-blue-600 transition"
//               >
//                 LinkedIn
//               </a>

//             </div>

//           </div>

//         </div>


//         {/* Contact Form */}
//         <div className="bg-white rounded-2xl shadow-lg p-7 sm:p-10">

//           <h2 className="text-3xl font-bold mb-6">
//             Send a <span className="text-fuchsia-600">Message</span>
//           </h2>


//           <form onSubmit={handleSubmit}>
//             <div className="mb-5">
//               <label className="block mb-2 font-semibold">
//                 Name
//               </label>

//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter your name"
//                 required
//                 className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500"
//               />

//             </div>
//             <div className="mb-5">

//               <label className="block mb-2 font-semibold">
//                 Email
//               </label>

//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//                 required
//                 className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500"
//               />

//             </div>
//             <div className="mb-5">

//               <label className="block mb-2 font-semibold">
//                 Message
//               </label>

//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Write your message..."
//                 rows="5"
//                 required
//                 className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-fuchsia-500"
//               ></textarea>

//             </div>
//             <button
//               type="submit"
//               className="w-full bg-fuchsia-600 text-white py-3 rounded-lg font-semibold hover:bg-fuchsia-700 transition duration-300"
//             >
//               Send Message
//             </button>

//           </form>

//         </div>

//       </div>

//       <div className="text-center mt-12">

//         <p className="text-gray-600">
//           Thanks for visiting my portfolio ❤️
//         </p>

//       </div>

//     </div>
//   );
// }

// export default Contact;


import React, { useState } from "react";
import { supabase } from "./supabase";
import Swal from "sweetalert2";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const { error } = await supabase
      .from("User-data")
      .insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      ]);

    if (error) {
      Swal.fire({
        icon: "error",
        title: "Message Failed",
        text: error.message,
        timer: 1800,
        showConfirmButton: false,
      });

      return;
    }

    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for contacting me.",
      timer: 1800,
      showConfirmButton: false,
    });

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white px-5 py-10 sm:px-8 md:px-12 lg:px-20">

      {/* ================================================= */}
      {/* CONTACT BACKGROUND EFFECTS */}
      {/* ================================================= */}

      {/* Big glowing circles */}

      <div className="absolute -top-40 -left-40 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>


      {/* Contact rings */}

      <div className="absolute top-24 right-[15%] w-24 h-24 border border-fuchsia-400/10 rounded-full animate-ping"></div>

      <div className="absolute bottom-32 left-[10%] w-20 h-20 border border-cyan-400/10 rounded-full animate-ping"></div>


      {/* Phone decorative icon */}

      <div className="
        absolute
        top-[15%]
        left-[8%]
        text-6xl
        opacity-10
        rotate-12
        animate-bounce
      ">
        📞
      </div>


      {/* Email decorative icon */}

      <div className="
        absolute
        top-[30%]
        right-[6%]
        text-6xl
        opacity-10
        -rotate-12
        animate-pulse
      ">
        ✉️
      </div>


      {/* Location decorative icon */}

      <div className="
        absolute
        bottom-[15%]
        right-[15%]
        text-6xl
        opacity-10
        animate-bounce
      ">
        📍
      </div>


      {/* ================================================= */}
      {/* MAIN CONTENT */}
      {/* ================================================= */}

      <div className="relative z-10">

        {/* ================= HEADER ================= */}

        <div className="text-center mb-14">

          <div className="
            inline-flex
            items-center
            justify-center
            w-16
            h-16
            rounded-full
            bg-fuchsia-500/10
            border
            border-fuchsia-400/20
            text-3xl
            mb-5
            animate-pulse
          ">
            💬
          </div>


          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">

            Contact{" "}

            <span className="
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-fuchsia-500
              to-cyan-400
            ">
              Me
            </span>

          </h1>


          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            Have a project or idea? Let's talk!
          </p>

        </div>


        {/* ================= GRID ================= */}

        <div className="
          max-w-6xl
          mx-auto
          grid
          grid-cols-1
          md:grid-cols-2
          gap-8
        ">


          {/* ================================================= */}
          {/* LEFT CONTACT INFORMATION */}
          {/* ================================================= */}

          <div className="
            relative
            overflow-hidden
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-7
            sm:p-10
            transition-all
            duration-500
            hover:-translate-y-2
            hover:border-fuchsia-500/30
            hover:shadow-2xl
            hover:shadow-fuchsia-500/10
          ">

            {/* Top glow */}

            <div className="
              absolute
              -top-20
              -right-20
              w-40
              h-40
              bg-fuchsia-500/20
              rounded-full
              blur-3xl
            "></div>


            <div className="relative">

              <h2 className="text-3xl font-bold mb-5">

                Let's{" "}

                <span className="text-fuchsia-400">
                  Connect
                </span>

              </h2>


              <p className="text-gray-400 leading-7 mb-10">

                I'm always interested in discussing new projects,
                development ideas and opportunities. Feel free to
                reach out to me.

              </p>


              {/* ================= EMAIL ================= */}

              <div className="
                group
                flex
                items-center
                gap-4
                mb-7
                p-4
                rounded-2xl
                bg-white/5
                border
                border-white/5
                transition-all
                duration-300
                hover:bg-fuchsia-500/10
                hover:border-fuchsia-400/30
              ">

                <div className="
                  flex
                  items-center
                  justify-center
                  w-12
                  h-12
                  rounded-xl
                  bg-fuchsia-500/10
                  text-2xl
                  transition-transform
                  duration-300
                  group-hover:scale-110
                ">
                  📧
                </div>


                <div>

                  <h3 className="text-sm text-fuchsia-400 font-semibold">
                    Email
                  </h3>

                  <p className="text-gray-300 mt-1 break-all">
                    rj744121@gmail.com
                  </p>

                </div>

              </div>


              {/* ================= LOCATION ================= */}

              <div className="
                group
                flex
                items-center
                gap-4
                mb-7
                p-4
                rounded-2xl
                bg-white/5
                border
                border-white/5
                transition-all
                duration-300
                hover:bg-cyan-500/10
                hover:border-cyan-400/30
              ">

                <div className="
                  flex
                  items-center
                  justify-center
                  w-12
                  h-12
                  rounded-xl
                  bg-cyan-500/10
                  text-2xl
                  transition-transform
                  duration-300
                  group-hover:scale-110
                ">
                  📍
                </div>


                <div>

                  <h3 className="text-sm text-cyan-400 font-semibold">
                    Location
                  </h3>

                  <p className="text-gray-300 mt-1">
                    Punjab, India
                  </p>

                </div>

              </div>


              {/* ================= PHONE ================= */}

              <div className="
                group
                flex
                items-center
                gap-4
                mb-8
                p-4
                rounded-2xl
                bg-white/5
                border
                border-white/5
                transition-all
                duration-300
                hover:bg-green-500/10
                hover:border-green-400/30
              ">

                <div className="
                  flex
                  items-center
                  justify-center
                  w-12
                  h-12
                  rounded-xl
                  bg-green-500/10
                  text-2xl
                  transition-transform
                  duration-300
                  group-hover:scale-110
                  group-hover:rotate-12
                ">
                  📞
                </div>


                <div>

                  <h3 className="text-sm text-green-400 font-semibold">
                    Let's Talk
                  </h3>

                  <p className="text-gray-300 mt-1">
                    Available for opportunities
                  </p>

                </div>

              </div>


              {/* ================= SOCIAL ================= */}

              <h3 className="text-lg font-semibold text-gray-300 mb-4">
                🌐 Social
              </h3>


              <div className="flex flex-wrap gap-4">

                <a
                  href="https://github.com/yadavjeerakesh12"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    px-5
                    py-2.5
                    rounded-xl
                    bg-white/10
                    border
                    border-white/10
                    text-gray-300
                    transition-all
                    duration-300
                    hover:bg-fuchsia-600
                    hover:text-white
                    hover:-translate-y-1
                    hover:shadow-lg
                    hover:shadow-fuchsia-500/30
                  "
                >
                  GitHub
                </a>


                <a
                  href="https://www.linkedin.com/in/rakesh-yadav12"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    px-5
                    py-2.5
                    rounded-xl
                    bg-white/10
                    border
                    border-white/10
                    text-gray-300
                    transition-all
                    duration-300
                    hover:bg-blue-600
                    hover:text-white
                    hover:-translate-y-1
                    hover:shadow-lg
                    hover:shadow-blue-500/30
                  "
                >
                  LinkedIn
                </a>

              </div>

            </div>

          </div>


          {/* ================================================= */}
          {/* CONTACT FORM */}
          {/* ================================================= */}

          <div className="
            relative
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-7
            sm:p-10
            transition-all
            duration-500
            hover:-translate-y-2
            hover:border-cyan-400/30
            hover:shadow-2xl
            hover:shadow-cyan-500/10
          ">


            <h2 className="text-3xl font-bold mb-7">

              Send a{" "}

              <span className="text-cyan-400">
                Message
              </span>

            </h2>


            <form onSubmit={handleSubmit}>


              {/* NAME */}

              <div className="mb-5">

                <label className="block mb-2 text-gray-300 font-semibold">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="
                    w-full
                    bg-white/5
                    border
                    border-white/10
                    text-white
                    placeholder-gray-500
                    rounded-xl
                    px-4
                    py-3
                    outline-none
                    transition-all
                    duration-300
                    focus:border-fuchsia-400
                    focus:ring-2
                    focus:ring-fuchsia-500/20
                    focus:bg-white/10
                  "
                />

              </div>


              {/* EMAIL */}

              <div className="mb-5">

                <label className="block mb-2 text-gray-300 font-semibold">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="
                    w-full
                    bg-white/5
                    border
                    border-white/10
                    text-white
                    placeholder-gray-500
                    rounded-xl
                    px-4
                    py-3
                    outline-none
                    transition-all
                    duration-300
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-500/20
                    focus:bg-white/10
                  "
                />

              </div>


              {/* MESSAGE */}

              <div className="mb-6">

                <label className="block mb-2 text-gray-300 font-semibold">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="5"
                  required
                  className="
                    w-full
                    bg-white/5
                    border
                    border-white/10
                    text-white
                    placeholder-gray-500
                    rounded-xl
                    px-4
                    py-3
                    outline-none
                    resize-none
                    transition-all
                    duration-300
                    focus:border-fuchsia-400
                    focus:ring-2
                    focus:ring-fuchsia-500/20
                    focus:bg-white/10
                  "
                ></textarea>

              </div>


              {/* SEND BUTTON */}

              <button
                type="submit"
                className="
                  group
                  relative
                  w-full
                  overflow-hidden
                  bg-gradient-to-r
                  from-fuchsia-600
                  to-purple-600
                  text-white
                  py-3.5
                  rounded-xl
                  font-semibold
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:shadow-xl
                  hover:shadow-fuchsia-500/30
                  active:scale-95
                "
              >

                <span className="relative z-10 flex items-center justify-center gap-2">

                  Send Message

                  <span className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  ">
                    ➜
                  </span>

                </span>

              </button>


            </form>

          </div>

        </div>


        {/* ================= FOOTER ================= */}

        <div className="text-center mt-14">

          <p className="text-gray-500">
            Thanks for visiting my portfolio{" "}
            <span className="text-red-400 animate-pulse">
              ❤️
            </span>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Contact;

