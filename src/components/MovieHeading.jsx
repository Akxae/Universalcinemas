import React from 'react'

function MovieHeading({ hd }) {
    return (
        <>
            {
                hd.map(hddata => (
                    <div key={hddata.id}>
                        <h1>{hddata.heading}</h1>
                        <h1>Hello</h1>
                    </div>
                    
                ))
            }
        </>
    )

}

export default MovieHeading
