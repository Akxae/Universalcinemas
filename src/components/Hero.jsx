import { useState } from 'react'
import React, { useContext } from 'react'
import { AppContext } from '../App'
import './Hero.css'
import HeroSwiper from './HeroSwiper'
import Trailer from './Trailer'



const Hero = () => {

    const { items, setItems } = useContext(AppContext);

    const [Trailerr , setTrailer] = useState(false)
    const toggletrailer = ()=>{
        setTrailer(!Trailerr)
        };

    const handleSlideChange = id => {
        const newItems = items.map((item) => {
            item.active = false;
            if (item.id === id) {
                item.active = true;
            }
            return item;
        })

        setItems(newItems);
    }

    return (
        <div className="banner">
            {

                items && items.map(item => (

                    <div className="item" key={item.id}>
                        <img src={item.bgImg} alt="hai" className={`bgImg ${item.active ? 'active' : undefined}`} />
                        <div className={`content ${item.active ? 'active' : undefined}`}>
                            <h1 className='fontStyle'>{item.title}</h1>
                            <p>{item.desc}</p>
                            <div className="buttons">
                                <button className='mainButton' >Watch Now</button>
                                <button className='mainButton' onClick={toggletrailer}>Watch Trailer</button>
                            </div>
                        </div>
                        {item.active && <Trailer item={item} status={Trailerr} toggleTrailer={toggletrailer} />}

                    </div>
                ))
            }
            {
                items && items.length > 0 && <HeroSwiper slides={items} slideChange={handleSlideChange} />
            }
        </div>
    )
}

export default Hero;
