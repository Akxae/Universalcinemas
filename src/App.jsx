import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
import Header from './components/Header';
import Home from './pages/Home';
import React, { useEffect, useState } from 'react';
import movieListbanner from './Data/HeromovieList'
import Allmovies from './components/Allmovies';
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
        <Header />
        <Home />
        <Allmovies />
      </AppContext.Provider>

    </>

  )
}

export default App
