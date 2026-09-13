import React from 'react'

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-10 md:px-12 lg:px-20">

        <div className="w-full md:w-1/2 text-center md:text-left">

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Hi, I'm
            <span className="text-fuchsia-600">
              {" "}Rakesh Yadav
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
            I'm a passionate Software Developer who loves building
            clean, responsive and user-friendly web applications.
            I enjoy working with React, Java, Python and modern
            web technologies.
          </p>

        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/self.jpeg"
            alt="Rakesh Yadav"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover rounded-full"
          />

        </div>

      </div>
    </>
  )
}
