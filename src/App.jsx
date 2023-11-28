import React from 'react';
// import Header from '../src/components/Pages/Header'
import Home from '../src/components/Pages/Home'

// import CardSlider from './components/Pages/CardSlider';
import {Routes , Route} from 'react-router-dom'
import Bhutanbiketrip from '../src/components/Pages/Bhutanbiketrip';


const App=()=> {
 

  return (
    <>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="Bhutanbiketrip" element={<Bhutanbiketrip/>} />
      {/* <Route path="/Bhutanbiketrip" element={<Bhutanbiketrip/>} /> */}

    </Routes>
    </>
  )
}

export default App
