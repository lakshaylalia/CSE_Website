import Logo from "@/components/Logo";
import React from "react";
import Image from "next/image";
import MoveToTop from "@/components/MoveToTop";
export default function Faculty() {
  return (
    <>
      <Logo />
      <MoveToTop />
      <section className="relative w-full h-[35vh] lg:h-full flex header">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/facultyBg.webp"
            alt="Students"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
        </div>
        <div className="heading relative z-10 text-white w-full lg:h-screen flex flex-col justify-center items-center gap-6">
          <p className="text-6xl lg:text-8xl font-semibold font-serif">Faculty</p>
          <p className="text-lg lg:text-xl font-semibold ">
            The curiosity and tenacity that drives our faculty’s research and
            creativity make their classrooms exciting places to be.
          </p>
        </div>
      </section>
      <div className="deanMessage h-[45vh] lg:h-screen w-full p-10 flex flex-col gap-6 justify-around">
        <h1 className="text-[#2945a2] text-6xl font-bold font-serif">
          Message from Dean
        </h1>
        <div className="message flex items-center gap-4">
          <Image
            src="https://www.iima.ac.in/themes/iima/images/qoute-2.svg"
            alt="comma"
            width={50}
            height={50}
            loading="eager"
            style={{ transform: "rotate(180deg)" }}
            className="self-start"
          />
          <p className="leading-8 text-xl font-semibold">
            NITH faculty come from diverse backgrounds and each individual is a
            sought-after specialist in his or her own area of expertise. Their
            personal experience as entrepreneurs, policy makers, researchers,
            theoreticians and consultants enlivens their teaching and gives it
            immediacy and relevance. Both as educators and researchers, they are
            continually learning. They are well aware that knowledge alone
            changes nothing; the power to affect and shape the future lies with
            the observing, reasoning, creative, curious mind. IIMA faculty make
            a lasting impact on students because they challenge, inspire and
            truly care what happens to their students. Employing the very
            highest standards of teaching and mentoring, they mould students
            into innovators, entrepreneurs and leaders. They are directly
            involved in every aspect of the Institute: teaching, governance and
            research and also work continuously with their industry peers.
            Additionally, some experience in roles outside the academic world
            means that they have a realistic appreciation of the nitty-gritty of
            finance, markets, production, strategy and much more from the
            practice world. From their active involvement, comes the precious
            cross-fertilization of ideas and ensures that IIMA academic
            programmes are not just up to date but oriented to the future.
          </p>
          <Image
            src="https://www.iima.ac.in/themes/iima/images/qoute-2.svg"
            alt="comma"
            width={50}
            height={50}
            loading="eager"
            className="self-end"
          />
        </div>
        <p className="text-right font-bold text-xl">
          Ram Naresh Sharma <br />
          Dean (Faculty)
        </p>
      </div>
    </>
  );
}


export const metadata = {
  title: "Faculty  - NITH CSE",
  description:
    "Welcome to the Computer Science and Engineering Department of NIT Hamirpur (NITH CSE). Discover CSE@NITH, find faculty details, student information, academic programs, research opportunities, and more.",
};