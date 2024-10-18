import React from 'react'
import Header from '../components/Header'

function Series() {
  return (
    <div className='flex flex-col'>
      <Header />
      <div className='flex items-center justify-between text-white px-2 md:px-24 bg-slate-800 h-11 shadow-lg shadow-black'>
        <h2 className='text-lg'>Popular Series</h2>
      </div>
    </div>
  )
}

export default Series
