import React from 'react'
import MovieCard from './MovieCard'
import './MovieHeading.css'


function MovieHeading({ hd, items }) {
    return (
        <>
            {
                hd.map(hddata => (
                    <div key={hddata.id}>
                        <h1>{hddata.heading}</h1>
                        <div className='card-container'>
                            <div className='card-closet'>
                                <MovieCard items={items} />
                            </div>
                        </div>
                    </div>

                ))
            }
        </>
    )

}

export default MovieHeading
