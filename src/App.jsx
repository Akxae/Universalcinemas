import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
import Header from './components/Header';
import Home from './pages/Home';
import React, { useEffect, useState } from 'react';
import movieListbanner from './Data/HeromovieList'
import Footer from './components/Footer';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';

// import Navbar from './components/Navbar/Navbar';


export const AppContext = React.createContext();

function App() {

  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(movieListbanner)
  }, [])


  return (
    <>
      {/* <Navbar/> */}
      <AppContext.Provider value={{items ,setItems}}>
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/Tv-shows' element={<TvShows />} />
          <Route path='/Detailes/:id' element={<MovieDetails />}/>
        </Routes>
        </BrowserRouter>
        <Footer />
      </AppContext.Provider>

    </>

  )
}

export default App
