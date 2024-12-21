import React from 'react'

function Logo() {
  return (
    <div className="logoMain relative z-10">
        <img
          src="/nithLogo.png"
          alt="NITH Logo"
          className="absolute z-10 top-[1rem] left-10 w-32 h-32"
        />
      </div>
  )
}

export default Logo