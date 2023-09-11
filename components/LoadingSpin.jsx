import React from 'react'

function LoadingSpin() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#474bff] via-transparent to-transparent bg-clip-border bg-origin-border border border-transparent animate-spin">
    </div>
    <h1 className="text-xl font-semibold mt-4">Loading...</h1>
  </div>
  )
}

export default LoadingSpin