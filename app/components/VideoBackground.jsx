'use client'

import React from 'react'

function VideoBackground() {
  return (
    <div className="absolute top-0 right-0 w-[70%] h-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0A0B14]/50 to-[#0A0B14] z-10" />
      
      <div className="relative w-full h-full">
        <iframe
          src="https://www.youtube.com/embed/2neKrBL3FME?autoplay=1&controls=0&mute=1&loop=1&playlist=2neKrBL3FME&playsinline=1&showinfo=0&rel=0&modestbranding=1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="absolute w-[140%] h-[140%] -right-[20%] top-1/2 -translate-y-1/2 opacity-60 pointer-events-none"
          style={{ 
            border: 'none',
            filter: 'brightness(1.2) contrast(1.1)'
          }}
        />
      </div>
    </div>
  )
}

export default VideoBackground

