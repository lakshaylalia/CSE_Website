import Logo from "@/components/Logo";
import MoveToTop from "@/components/MoveToTop";
import Image from "next/image";
import React from "react";

export default function Students() {
  return (
    <>
      <Logo />
      <MoveToTop />
      <section className="relative w-full h-screen flex header">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/students.webp"
            alt="Students"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
            className="brightness-[65%]"
          />
        </div>
        <div className="heading relative z-10 text-white w-full h-screen flex flex-col justify-center items-center gap-6">
          <p className="text-8xl font-semibold font-serif">Students</p>
          <p className="text-lg font-semibold ">
            The curiosity and tenacity that drives our faculty’s research and
            creativity make their classrooms exciting places to be.
          </p>
        </div>
      </section>
      <section className="activities grid grid-cols-3 grid-rows-2 w-full h-screen">
        <div className="alumniNetwork bg-[#1B2F6E] text-white flex justify-center items-center flex-col gap-6 p-5">
          <h1 className="text-4xl font-bold font-serif hover:underline decoration-white animate-top">
            Alumni Network
          </h1>
          <p className="leading-8 text-lg text-left animate-top">
            Connect with a strong network of successful alumni who share their
            experiences and provide valuable insights into career paths and
            opportunities.
          </p>
        </div>
        <div className="hackhathonImage">
          <Image
            src="/hackhathon.jpg"
            alt="Hackhathon Image"
            height={0}
            width={0}
            sizes="100vw"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            priority
          />
        </div>
        <div className="internships row-span-2 relative">
          <Image
            src="/internship.jpeg"
            alt="Internship Image"
            height={0}
            width={0}
            sizes="100vw"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            priority
            className="absolute top-0 left-0 w-full h-full z-0 brightness-[65%]"
          />

          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10 gap-6 text-white p-5">
            <h1 className="text-4xl font-bold font-serif hover:underline decoration-white animate-top">
              Internship and Placement Support
            </h1>
            <p className="leading-8 text-lg text-left animate-top">
              Benefit from dedicated support for internships and placements,
              connecting students with industry leaders and enhancing career
              prospects.
            </p>
          </div>
        </div>

        <div className="alumni ">
          <Image
            src="/alumni.jpeg"
            alt="Aumni Meet Image"
            height={0}
            width={0}
            sizes="100vw"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            priority
          />
        </div>
        <div className="codingCompetetions bg-[#BF2A2A]  text-white flex justify-center items-center flex-col gap-6 p-5">
          <h1 className="text-4xl font-bold font-serif hover:underline decoration-white animate-top">
            Coding Competitions
          </h1>
          <p className="leading-8 text-lg text-left animate-top">
            Participate in various coding competitions and hackathons that
            challenge your skills and encourage teamwork, creativity, and
            problem-solving.
          </p>
        </div>
      </section>
    </>
  );
}

export const metadata = {
  title: "Students - NITH CSE",
  description:
    "Find student resources, academic guides, and achievements from the Computer Science and Engineering Department of NIT Hamirpur (NITH CSE).",
};
