import React, { useState } from "react";
import { supabase } from './supabase';
import Swal from 'sweetalert2';
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
    const { data: newStudent, error } = await supabase
      .from("User-data")
      .insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        }
      ])
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Updated fail ",
        text: `${error.message}.`,
        timer: 1500,
        showConfirmButton: false
    });
      return;
    }
    Swal.fire({
        icon: "success",
        title: "Updated!",
        text: "Student record updated successfully.",
        timer: 1500,
        showConfirmButton: false
    });
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }
  return (
    <div className="min-h-screen bg-gray-50 px-5 py-10 sm:px-8 md:px-12 lg:px-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold">
          Contact{" "}
          <span className="text-fuchsia-600">
            Me
          </span>
        </h1>

        <p className="mt-3 text-gray-600 text-lg">
          Have a project or idea? Let's talk!
        </p>

      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        <div className="bg-gray-900 text-white rounded-2xl p-7 sm:p-10">

          <h2 className="text-3xl font-bold mb-6">
            Let's <span className="text-fuchsia-400">Connect</span>
          </h2>

          <p className="text-gray-300 leading-7 mb-8">
            I'm always interested in discussing new projects,
            development ideas and opportunities. Feel free to
            reach out to me.
          </p>

          <div className="mb-6">

            <h3 className="text-lg font-semibold text-fuchsia-400">
              📧 Email
            </h3>

            <p className="text-gray-300 mt-1 break-all">
              rj744121@gmail.com
            </p>

          </div>

          <div className="mb-6">

            <h3 className="text-lg font-semibold text-fuchsia-400">
              📍 Location
            </h3>

            <p className="text-gray-300 mt-1">
              Punjab, India
            </p>

          </div>
          <div>

            <h3 className="text-lg font-semibold text-fuchsia-400 mb-3">
              🌐 Social
            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/yadavjeerakesh12"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-gray-700 rounded-lg
                          hover:bg-fuchsia-600 transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/rakesh-yadav12?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                className="px-4 py-2 bg-gray-700 rounded-lg
                          hover:bg-blue-600 transition"
              >
                LinkedIn
              </a>

            </div>

          </div>

        </div>


        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-7 sm:p-10">

          <h2 className="text-3xl font-bold mb-6">
            Send a <span className="text-fuchsia-600">Message</span>
          </h2>


          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="block mb-2 font-semibold">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500"
              />

            </div>
            <div className="mb-5">

              <label className="block mb-2 font-semibold">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500"
              />

            </div>
            <div className="mb-5">

              <label className="block mb-2 font-semibold">
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="5"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-fuchsia-500"
              ></textarea>

            </div>
            <button
              type="submit"
              className="w-full bg-fuchsia-600 text-white py-3 rounded-lg font-semibold hover:bg-fuchsia-700 transition duration-300"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

      <div className="text-center mt-12">

        <p className="text-gray-600">
          Thanks for visiting my portfolio ❤️
        </p>

      </div>

    </div>
  );
}

export default Contact;