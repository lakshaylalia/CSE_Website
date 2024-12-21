"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
function Video() {
  return (
    <>
      <div className="bgVideo relative h-[95vh] flex justify-center items-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          preload="auto"
          className="video absolute top-0 left-0 w-full h-full object-cover brightness-[70%]"
        >
          <source
            src="https://res.cloudinary.com/dz1vsgxm5/video/upload/v1729336941/nith-cse-website/bidaegjvqeggbtqp9xea.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="centre z-10 relative text-white flex flex-col justify-center items-center gap-6 font-serif">
          <p className="font-bold text-6xl">National Institute of Technology</p>
          <p className="font-bold text-6xl"> Hamirpur</p>
          <p className="text-xl">
            <Typewriter
              words={[
                "Welcome, to NITH. An Institute of National Importance.",
                "An innovative hub for computer science research and education in India.",
                "A leading institution in India, renowned for its groundbreaking contributions to computer science research.",
              ]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
        </div>
      </div>
    </>
  );
}

export default Video;
