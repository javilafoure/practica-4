import React from 'react'

function Header() {
  return (
    <div className='flex items-center justify-between px-2 md:px-24 bg-blue-600 h-14 shadow-lg shadow-black'>
      <div className='flex text-center text-white font-bold text-2xl'>DEMO Streaming</div>
      <div className='flex flex-col sm:flex-row text-white text-sm gap-1 sm:gap-8'>Log in
        <button className='text-white bg-slate-800 px-2 py-1'>Start you free trial</button>
      </div>
    </div>
  )
}

export default Header
