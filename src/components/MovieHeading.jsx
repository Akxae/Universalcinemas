import React from 'react'
import MovieCard from './MovieCard'
import './MovieHeading.css'


function MovieHeading({ hd, items }) {
    return (
        <>
            {
                hd.map(hddata => (
                    <div key={hddata.id} >
                        <h1 className='heading'>{hddata.heading}</h1>
                        <div className='card-container'>
                            <div className='card-closet'>
                            <MovieCard items={items} hddata={hddata.heading} />                               
                            </div>
                        </div>
                    </div>

                ))
            }
        </>
    )

}

export default MovieHeading
