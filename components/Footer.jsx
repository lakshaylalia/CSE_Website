import React from 'react'
import Link from 'next/link'
export default function Footer() {
  return (
    <footer className='relative bottom-0 w-full bg-[#0d1117] text-white h-screen p-4 flex flex-col gap-10 justify-evenly items-center '>
        <div className='footerLogo flex flex-col items-center gap-4'>
           <div className='logo'><img src='/nithLogo.png' alt='logo' height={150} width={150} /></div>
           <h1 className='text-xl font-semibold'>Department of Computer Scienec and Engineering</h1>
           <p className='text-lg'>National Institute of Technology Hamirpur</p>
        </div>
        <div className="footerLinks w-full flex items-center justify-around font-serif">
            <div className="policies flex flex-col items-center gap-8 justify-between">
                <h1 className='text-5xl font-semibold'>Policies&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                <ul className='flex flex-col gap-5'>
                    <li className='text-lg hover:underline'><Link href='https://nith.ac.in/uploads/topics/studentdisplinerule16438814532264.pdf' target='_' >NITH Act and Rules</Link></li>
                    <li className='text-lg hover:underline'><Link href='https://nith.ac.in/cpda-rules-and-formats' target='_'>CPDA Rules</Link></li>
                    <li className='text-lg hover:underline'><Link href='https://nith.ac.in/rules-for-conducting-workshops-conferences' target='_'>Rules for conducting workshops</Link></li>
                   </ul>
            </div>
            <div className="usefulLinks flex flex-col items-center gap-8 justify-between">
                <h1 className='text-5xl font-semibold'>Useful Links&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                <ul className='flex flex-col gap-5'>
                    <li className= 'text-lg hover:underline'><Link href='https://nith.ac.in/results' target='_'> Results</Link></li>
                    <li className='text-lg hover:underline'><Link href='https://nith.ac.in/bachelor-course-structure-syllabus' target='_'>Syllabus</Link></li>
                    <li className='text-lg hover:underline'><Link href='https://nith.ac.in/academics' target='_'>Academics</Link></li>
                    <li className='text-lg hover:underline'><Link href='https://nith.ac.in/department/7' target='_'>Research Publications</Link></li>   
                    </ul>
            </div>
            <div className="getInTouch flex flex-col items-center gap-8 justify-between">
                <h1 className='text-5xl font-semibold'>Get in Touch</h1>
                <ul className='flex flex-col gap-5'>
                    <li className='text-lg hover:underline'><Link href='https://alumni.nith.ac.in/members.dz' target='_'>Alumni</Link></li>
                    <li className='text-lg hover:underline'><Link href='https://nith.ac.in/contact-us' target='_'>Contact Us</Link></li>
                    <li className='text-lg hover:underline'><Link href='https://nith.ac.in/connectivity' target='_'>Location</Link></li>
                </ul>
            </div>
        </div>
        <div className="lowerFooter w-full flex justify-center flex-col gap-3 items-center">
            <p className='font-semibold'>Made with &#x2764; by <Link href='https://github.com/lakshaylalia' target='_' className='text-blue-300'>Lakshay Lalia</Link></p>
            <p>&copy; 2024 NIT Hamirpur. All rights reserved</p>
        </div>
    </footer>
  )
}