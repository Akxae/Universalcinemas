import React, { useContext } from 'react'
import HeadingData from '../Data/HeadingData'
import { AppContext } from '../App'
import MovieHeading from './MovieHeading'



function Allmovies() {

  const { items, setItems } = useContext(AppContext);

  return (
    <div style={{marginBottom:'50px'}}>
      <MovieHeading hd={HeadingData} items={items} />  
    </div>
  )
}

export default Allmovies
