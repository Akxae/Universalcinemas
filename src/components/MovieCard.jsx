import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './MovieCard.module.css';
import { NavLink } from 'react-router-dom';

const MovieCard = ({ items, hddata }) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const customItemClass = `${styles.movieCards} ${styles.gap}`; 

    return (
        <div className={styles.container}>
            <Carousel responsive={responsive} itemClass={customItemClass}>
                {items.map((item, index) => {
                    if (item.genre.includes(hddata) || ((hddata === "Top Rated" && item.topRated))) {
                        return (
                            <NavLink key={index} to={`/Detailes/${item.id}`} className={styles.navLink}>
                                <div className={styles.movieCards}>
                                    <div className={styles.card}>
                                        <img src={item.titlecard} alt="" />
                                        <div className={styles.content}>
                                            <h1 className={styles.name}>{item.title}</h1>
                                            <h3 className={styles.name}>
                                                <i className="ri-star-line"></i> | 7.6/10 | 2023-09-07 | 167min
                                            </h3>
                                            <p className={styles.name}>{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        );
                    }
                    return null;
                })}
            </Carousel>
        </div>
    );
};

export default MovieCard;