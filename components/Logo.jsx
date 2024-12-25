import React from 'react'

function Logo() {
  return (
    <div className="logoMain relative z-10">
        <img
          src="/nithLogo.png"
          alt="NITH Logo"
          className="absolute z-10 top-[3rem] left-10 w-28 h-28 lg:w-32 lg:h-32"
        />
      </div>
  )
}

export default Logo