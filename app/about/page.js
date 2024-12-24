import Logo from "@/components/Logo";
import React from "react";
import Image from "next/image";
import MoveToTop from "@/components/MoveToTop";
export default function About() {
  return (
    <>
    <MoveToTop />
      <Logo />
      <section className="about">
        <section className="heading h-[90vh] w-full relative z-0 flex justify-center items-center">
          <Image
            src="/csDepartment.webp"
            alt="CS Department"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
            className="brightness-[65%]"
          />

          <div className="header ">
            <p className="relative z-10 text-white font-bold font-serif text-5xl">
              Computer Science and Engineering
            </p>
          </div>
        </section>
        <section className="history h-[40vh] flex justify-center items-center w-[80%] ml-[10%]">
          <div className="flex items-center">
            <Image
              src="https://www.iima.ac.in/themes/iima/images/qoute-2.svg"
              alt="comma"
              width={50}
              height={50}
              loading="eager"
              style={{ transform: "rotate(180deg)" }}
              className="self-start"
            />
            <p className="mx-4 text-xl font-medium text-gray-900 font-serif text-left leading-10 ">
              Located in Hamirpur district of Himachal Pradesh, NIT Hamirpur
              enjoys a really scenic environment and pleasant weather.
              Established in the year 1986, as REC Hamirpur, NIT Hamirpur has
              been declared as the Institute of National Importance under the
              Act of Parliament, 2007. Established in 1989 as the Department of
              Computer Science & Engineering, we have an excellent & rich
              history and an outstanding record of contributions to the
              profession and community. The Department is well recognized for
              excellence in facilities and teaching.
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
        </section>
        <section className="academicPrograms h-[40vh] w-[80%] ml-[10%] flex flex-col gap-6">
          <h1 className="text-blue-900 text-5xl font-semibold font-serif">
            Academic Programmes
          </h1>
          <ul className="flex flex-col gap-6 text-lg font-semibold ml-[5%]">
            <li>B.Tech. in Computer Science & Engineering (Four Years)</li>
            <li>
              Dual Degree in Computer Science & Engineering [B.Tech. + M.Tech.]
              (Five Years)
            </li>
            <li>M.Tech. in Computer Science & Engineering (Two Years)</li>
            <li>
              M.Tech. in Computer Science & Engineering (Artificial
              Intelligence) (Two Years)
            </li>
            <li>Ph.D. in Computer Science & Engineering</li>
          </ul>
        </section>
        <section className="history h-[60vh] flex justify-center items-center w-[80%] ml-[10%] mt-10">
          <div className="flex items-center">
            <Image
              src="https://www.iima.ac.in/themes/iima/images/qoute-2.svg"
              alt="comma"
              width={50}
              height={50}
              loading="eager"
              style={{ transform: "rotate(180deg)" }}
              className="self-start"
            />
            <p className="mx-4 text-xl font-medium text-gray-900 font-serif text-left leading-8">
            The aim of these programmes is to enable students to acquire
              specialized knowledge for various subjects in computer science &
              information technology, as well as to enrich the students
              personal, social and cognitive development to meet challenges of
              today and tomorrow. The Department is well equipped with high end
              computers, latest software & state-of-the-art IT infrastructure
              and all these computing resources are inter-connected with high
              speed intranet. Our students are exposed to up-to-date curriculum,
              technology and techniques. The Department has well experienced &
              dedicated faculty members with different specializations. Our
              curriculum is modified, enhanced and updated regularly as we
              introduce new courses to reflect current topics in this
              fast-changing discipline. Our faculty is involved in cutting-edge
              research areas, including computer networks, mobile computing,
              mobile ad hoc networks, wireless sensor networks, security, image
              processing, data mining, artificial intelligence, computer
              architecture and reconfigurable computing. The Department prides
              itself on good career opportunities for students. Our students
              graduate with more than 100% placement through campus. Many
              companies of repute show their interest to visit our Institute for
              campus recruitment.
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
        </section>
      </section>
    </>
  );
}

export const metadata = {
  title: "About - NITH CSE",
  description:
    "Learn about the Computer Science and Engineering Department at NIT Hamirpur (NITH CSE), its vision, mission, and academic goals.",
};
