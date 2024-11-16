import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Fitness from './Components/Fitness';
import Food from './Components/Food';
import Hollywood from './Components/Hollywood';
import Bollywood from './Components/Bollywood';
import Technology from './Components/Technology';
import CategoryDetail from './Components/CategoryDetail';
import Footer from './Components/Footer';

const RoutePath = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fitness" element={<Fitness />} />
      <Route path="/food" element={<Food />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/hollywood" element={<Hollywood />} />
      <Route path="/bollywood" element={<Bollywood />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/detail/:id" element={<CategoryDetail/>}></Route>
    </Routes>
  </Router>
  )
}

export default RoutePath


