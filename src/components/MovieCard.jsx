import React from 'react'
import 'remixicon/fonts/remixicon.css'
import styles from './MovieCard.module.css'

const MovieCard = ({ items }) => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
        {
            items.map((item)=>(
                <div className={styles.container}>
                    <div className={styles.movieCards}>
                        <div className={styles.card}>
                            <img src={item.titlecard} alt="" />
                            <div className={styles.content}>
                                <h1 className={styles.name}>{item.title}</h1>
                                <h3 className={styles.name}>
                                    <i class="ri-star-line"></i> | 7.6/10 |2023-09-07 | 167min
                                </h3>
                                <p className={styles.name}>{item.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
        </>
        

    )
}
export default MovieCard



