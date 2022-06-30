import React, { useState } from 'react'
import Navbar from './Navbar'
import { Routes, Route, Link } from 'react-router-dom'
import { FaUserGraduate } from 'react-icons/fa'
import Tada from 'react-reveal/Tada';
import RubberBand from 'react-reveal/RubberBand';

import './Portfolio.css'
function Portfolio() {
  const [display, setDisplay] = useState(true)
  const isDisplay = () => setDisplay(!display)
  return (
    <div>
      <h1 className='flex justify-center space-x-3 text-purple-300 bg-stone-900 text-ellipsis text-3xl py-4 text-center border-b-2 border-indigo-400
      '>
        <Tada>
          <p className='bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-purple-300'>PORTFOLIO</p>
          <div>
            <FaUserGraduate  size='2.2rem' />
          </div>
        </Tada>
      </h1>
      <div style={{ display: display ? "grid" : "none" }} className="grid grid-cols-1 place-items-center text-slate-200 py-5 text-2xl Landing--Page">
        <h1 className='text-slate-200 font-mono font-semibold text-5xl px-10 text-center photoHeading'>Hello, I'm Shubham Tiwari, Frontend Web Developer</h1>
        <RubberBand>
          <Link to='/about' onClick={isDisplay} className='ring-2 ring-slate-200 px-10 py-2 bg-slate-800 rounded-md shadow-lg shadow-slate-200
          skew-x-3 skew-y-6'>
            Open »
          </Link>
        </RubberBand>
      </div>
      <Routes>
        <Route exact path='/*' element={<Navbar display={display} isDisplay={isDisplay} />} />
      </Routes>
    </div>

  )
}

export default Portfolio