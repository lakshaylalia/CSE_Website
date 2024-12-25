import Logo from "@/components/Logo";
import Video from "@/components/Video";
import Image from "next/image";
import Link from "next/link";
import MoveToTop from "@/components/MoveToTop";
export default function Home() {
  return (
    <div>
      <MoveToTop />
      <Logo />
      <Video />
      <section>
        <div className="container1 h-screen w-full flex ">
          <div className="leftSection text-white flex flex-col gap-8 relative w-[50%] justify-end items-start">
            <Image
              src="/studentImages.jpeg"
              alt="Students collaborating in the CS Department"
              height={0}
              width={0}
              sizes="100vw"
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              className="brightness-[75%] blur-[1px] absolute inset-0 z-0"
              priority
            />
            <div className="relative z-10 p-6  flex flex-col gap-6 text-left">
              <h1 className="text-5xl font-bold  animate-top hover:underline decoration-white">
                Diverse Communities
              </h1>
              <p className="text-3xl  leading-10 lg:mt-4 lg:text-lg animate-top">
                Our Department unites students from diverse backgrounds,
                <br />
                fostering innovation and collaboration in technology.
              </p>
            </div>
          </div>
          <div className="rightSection text-white">
            {/* <div className="sports bg-[#BF2A2A] h-[50%] flex flex-col gap-4 p-6 justify-center">
              <h1 className="hover:underline decoration-white text-5xl font-semibold animate-top">
                Sports
              </h1>
              <p className="text-lg animate-top">
                We promotes holistic student growth with excellent sports
                <br />
                facilities that build teamwork and leadership.
              </p>
            </div> */}
            <div className="lifeAtNith h-full flex flex-col gap-4 p-6 relative justify-end items-center">
              <video
                src="https://res.cloudinary.com/dmiq1mtz7/video/upload/f_auto:video,q_auto/v1/CSE_Website/wq7fl6jp3qj2sdnbonf9"
                autoPlay
                muted
                loop
                className="absolute inset-0 w-full h-[100%] object-cover z-0 overflow-hidden"
              />
              <div className="relative z-10  flex flex-col gap-10 animate-top">
                <h1 className="text-2xl lg:text-5xl font-bold hover:underline decoration-white font-mono">
                  Life at NITH
                </h1>
                <p className=" text-xl ">
                  Enjoy a balanced campus life with academic excellence and
                  enriching recreational activities.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container2 h-screen w-full grid grid-rows-2 grid-cols-3 text-white ">
          <div className="campusFacility bg-[#1B2F6E] flex flex-col justify-center items-center gap-6 px-8">
            <h1 className="text-4xl font-bold hover:underline decoration-white animate-top">
              Campus Facility
            </h1>
            <p className="text-lg animate-top">
              Our campus features smart classrooms and state-of-the-art
              technology, creating an ideal environment for innovative learning
              and collaboration..
            </p>
          </div>
          <div className="departmentalImage">
            <Image
              src="/departmentalImage.jpg"
              alt="Departmental Images"
              height={0}
              width={0}
              sizes="100vw"
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              priority
            />
          </div>
          <div className="drivingInnovation row-span-2 text-white relative flex justify-center items-center">
            <video
              src="https://res.cloudinary.com/dz1vsgxm5/video/upload/v1716225403/nith-cse-website/ancjkzr6jxboae1c60l9.mp4"
              autoPlay
              muted
              loop
              className="absolute inset-0 w-full h-full object-cover z-0"
            />

            <div className="content relative z-10 p-6 flex flex-col gap-10">
              <h1 className="text-4xl font-bold hover:underline decoration-white animate-top">
                Driving Innovation
              </h1>
              <p className="text-lg animate-top">
                Through events like Nimbus and active technical clubs, the CSE
                Department at NIT Hamirpur drives innovation and excellence in
                cutting-edge technologies.
              </p>
            </div>
          </div>
          <div className="centralBlockImage">
            <Image
              src="/nithImage.png"
              alt="Departmental Images"
              height={0}
              width={0}
              sizes="100vw"
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              priority
            />
          </div>
          <div className="facultyMembers bg-[#BF2A2A] flex flex-col justify-center items-center gap-6 px-8 ">
            <h1 className="text-4xl font-bold hover:underline decoration-white animate-top">
              Expert Faculty Members
            </h1>
            <p className="text-lg animate-top">
              Learn from expert faculty dedicated to mentoring and fostering
              excellence in computer science.
            </p>
          </div>
        </div>
      </section>
      <div className="upcommingEvents h-[80vh] w-full pt-10">
        <p className="text-5xl text-[#1b2f6e] font-semibold ml-[8%] mb-10">
          Upcoming Events
        </p>
        <div className="evnetContainer grid grid-cols-3 grid-rows-2 gap-y-8  h-[60%] pl-4 left-animate">
          <div className="event1 border-2 border-gray-400 h-40 w-[90%] self-center p-2 flex flex-col gap-4">
            <p className="text-gray-600"> 30 Sep 2024</p>
            <p>
              <Link
                href="https://nith.ac.in/uploads/topics/exploring-the-research-paths-what-all-you-need-to-know17273242178783.pdf"
                target="_blank"
                className="text-lg hover:underline"
              >
                e-STC On &quot;Exploring the research paths: What all you need
                to know?&quot;
              </Link>
            </p>
          </div>
          <div className="event2 border-2 border-gray-400 h-40 w-[90%] self-center p-2 flex flex-col gap-4 ">
            <p className="text-gray-600">07 Oct 2024</p>
            <p>
              <Link
                href="https://nith.ac.in/uploads/topics/exploring-the-research-paths-what-all-you-need-to-know-217273242767596.pdf"
                target="_blank"
                className="text-lg hover:underline"
              >
                e-STC on &quot;Exploring the research paths: What all you need
                to know?&quot; (Part-2)
              </Link>
            </p>
          </div>
          <div className="event3 border-2 border-gray-400 h-40 w-[90%] self-center p-2 flex flex-col gap-4 e">
            <p className="text-gray-600">07 Dec 2024</p>
            <p>
              <Link
                href="https://nith.ac.in/uploads/topics/cpted-conference-202417267460457816.pdf"
                target="_blank"
                className="text-lg hover:underline"
              >
                National Conference CPTED-2024 organized by NIT Hamirpur and
                ISAC to be held on 7th December, 2024
              </Link>
            </p>
          </div>
          <div className="event4 border-2 border-gray-400 h-40 w-[90%] self-center p-2 flex flex-col gap-4 ">
            <p className="text-gray-600">28 Oct 2024</p>
            <p>
              <Link
                href="https://nith.ac.in/uploads/topics/notification-regarding-15th-convocation17228579093585.pdf"
                target="_blank"
                className="text-lg hover:underline"
              >
                Notification regarding 15th Convocation of NIT Hamirpur
              </Link>
            </p>
          </div>
          <div className="event5 border-2 border-gray-400 h-40 w-[90%] self-center p-2 flex flex-col gap-4 ">
            <p className="text-gray-600">11 Nov 2024</p>
            <p>
              <Link
                href="https://nith.ac.in/uploads/topics/efdp-on-advanced-energy-storage-systems17265582556841.pdf"
                target="_blank"
                className="text-lg hover:underline"
              >
                eFDP on Advanced Energy Storage Systems for Electric Vehicles
                during 11th to 15th November, 2024
              </Link>
            </p>
          </div>
          <div className="event6 border-2 border-gray-400 h-40 w-[90%] self-center p-2 flex flex-col gap-4 ">
            <p className="text-gray-600">11 Nov 2024</p>
            <p>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfgQe45aqVkR2-_ozaZfVar25QwohiIgqIseKwef14H9EqmmQ/viewform"
                target="_blank"
                className="text-lg hover:underline"
              >
                Registration link for eFDP on Advanced Energy Storage Systems
                for Electric Vehicles during 11th to 15th November, 2024
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// https://res.cloudinary.com/dmiq1mtz7/video/upload/f_auto:video,q_auto/v1/CSE_Website/wq7fl6jp3qj2sdnbonf9
