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

function Peliculas() {

    const [movies, setMovies] = useState()

    useEffect(() => {
        getData()
            .then(rs => setMovies(rs.data.entries))
            .catch((error) => console.log(error))
            console.log(movies)
    }, [])

    return (
        <div className='flex flex-col'>
            <Header />
            <div className='flex items-center justify-between text-white px-2 md:px-24 bg-slate-800 h-11 shadow-lg shadow-black'>
                <h2 className='text-lg'>Popular Movies</h2>
            </div>
            <div>
                {
                    movies &&
                    movies.map(movie =>
                        <h2>{movie.title}</h2>
                    )


                }
            </div>
        </div>
    )
}

export default Peliculas
