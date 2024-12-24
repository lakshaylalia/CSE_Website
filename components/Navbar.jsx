import React from 'react';
import Link from 'next/link';


function Navbar() {
  return (
    <nav className="w-full bg-[#0d1117] shadow-md sticky top-0 flex gap-10 p-1 z-20">
      <div className="logo">
        <Link href='https://nith.ac.in/' target='_blank'><img src='/nithLogo.png' alt='NITH Logo' className="w-16 h-14 cursor-pointer"/></Link>
      </div>
      <div className="right w-full">
      <ul className="flex flex-wrap items-center justify-around py-4 text-gray-300 font-medium text-lg">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li className=''>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/faculty">Faculty</Link>
        </li>
        <li>
          <Link href="/students">Students</Link>
        </li>
        <li>
          <Link href="https://nith.ac.in/computer-science-engineering" target='_blank'>More Details</Link>
        </li>
        <li>
          <Link href="/signin">Sign In</Link>
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;
