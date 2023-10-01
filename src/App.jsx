// import { useState } from 'react'
// import './App.css'

// export default function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <h1>Hai</h1>
    
//     </>
//   )
// }

import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Explore from './components/pages/Explore';
import Planner from './components/pages/Planner';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import AboutUs from './components/pages/AboutUs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export default function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
          <Route path='/' exact element={Home} />
          <Route index element={<Home />} />
          {/* <Route path='/explore' component={Explore} />
          <Route path='/planner' component={Planner} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/sign-up' component={SignUp} /> */}
          <Route path='/explore' element={<Explore/>} />
          <Route path='/planner' element={<Planner/>} />
          <Route path='/sign-in' element={<SignIn/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/about-us' element={<AboutUs/>} />

      </Routes>
    </Router>
    </>
  );
}



