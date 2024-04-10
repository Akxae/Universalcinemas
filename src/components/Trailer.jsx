// import React from 'react'
// import styles from './Trailer.module.css'

// function Trailer({ item, toggleTrailer, status }) {
//     return (
//         <div className={`${styles.movieTrailer} ${status ? styles.active : ''}`}>

//             <a href="#" className={styles.trailerClose} onClick={toggleTrailer}><i class="ri-close-fill" ></i></a>

//             <iframe
//                 width="1280"
//                 height="720"
//                 src={item.trailer}
//                 title={`${item.title} | Official Trailer"`}
//                 frameborder="0"
//                 allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                 allowfullscreen>

//             </iframe>
//         </div>

//     )
// }

// export default Trailer
import React, { useRef } from 'react';
import styles from './Trailer.module.css';

function Trailer({ item, toggleTrailer, status }) {
    const iframeRef = useRef(null);

    const handleCloseClick = () => {
        // Reset the video by setting src to an empty string
        if (iframeRef.current) {
            iframeRef.current.src = '';
        }

        // Call toggleTrailer to close the trailer modal
        toggleTrailer();
    };

    return (
        <div className={`${styles.movieTrailer} ${status ? styles.active : ''}`}>
            <a href="#" className={styles.trailerClose} onClick={handleCloseClick}>
                <i className="ri-close-fill"></i>
            </a>
            <iframe
                ref={iframeRef}
                width="1280"
                height="720"
                src={item.trailer}
                title={`${item.title} | Official Trailer"`}
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default Trailer;

