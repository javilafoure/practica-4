import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'


function Inicio() {
  return (
    <div className='flex flex-col'>
      <Header />
      <div className='flex items-center justify-between text-white px-2 md:px-24 bg-slate-800 h-11 shadow-lg shadow-black'>
        <h2 className='text-lg'>Popular Titles</h2>
      </div>
      <div className='flex mt-10 px-5 md:px-24 gap-4'>
        <div className='relative w-40 h-64'>
          <Link href={"/series"}>
            <div className='content-center border shadow-md w-full h-full bg-black'>
              <img className='w-full h-full object-cover' src="placeholder.png" alt="" />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                <p className="text-white text-xl font-bold">SERIES</p>
              </div>
            </div>
          </Link>
          <h3 className='mt-2'>Popular Series</h3>
        </div>
        <div className='relative w-40 h-64'>
          <Link href={"/peliculas"}>
            <div className='content-center border shadow-md w-full h-full bg-black'>
              <img className='w-full h-full object-cover' src="placeholder.png" alt="" />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                <p className="text-white text-xl font-bold">MOVIES</p>
              </div>
            </div>
          </Link>
          <h3 className='mt-2'>Popular Movies</h3>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default Inicio
