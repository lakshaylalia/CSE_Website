'use client';
import React, { useState, useEffect } from "react";

export default function MoveToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 10); 
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); 
    };
  }, []);

  function scrollToTop() {
    if (window.scrollY === 0) {
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-2 right-2 border-2 rounded-full z-30 bg-white h-16 w-16 flex items-center justify-center  cursor-pointer"
      onClick={scrollToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        width="24"
        viewBox="0 0 384 512"
        className="h-6 w-6"
      >
        <path
          fill="#000000"
          d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
        />
      </svg>
    </div>
  );
}
