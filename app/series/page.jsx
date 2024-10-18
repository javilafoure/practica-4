'use client'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'

async function getData() {
    try {
        const {data} = await axios.get('data/sample.json')
        return data.entries
    } catch (error) {
        console.log(error)
    }
}

function Series() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        getData()
            .then(entries => setMovies(entries))
            .catch((error) => console.log(error))
            
    }, [])
    

    return (
        <div className='flex flex-col'>
            <Header />
            <div className='flex items-center justify-between text-white px-2 md:px-24 bg-slate-800 h-11 shadow-lg shadow-black'>
                <h2 className='text-lg'>Popular Series</h2>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 mt-8 px-2 md:px-24 gap-11'>
                {
                    movies &&

                        movies.filter(movie => movie.programType === 'series').map(movie =>                          
                            
                            <div className='content-center border shadow-md w-40 h-64'>
                                <img className='w-full h-full object-cover' src={movie.images['Poster Art'].url} alt="" />
                                <h3>{movie.title}</h3>
                            </div>
                   )

                }
            </div>
        </div>
    )
}

export default Series
