import React, { useContext } from 'react'
import { AppContext } from '../App'
import './Hero.css'
import HeroSwiper from './HeroSwiper'



const Hero = () => {

    const { items, setItems } = useContext(AppContext);

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
                                <button className='mainButton'>Watch Trailer</button>
                            </div>
                        </div>
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
