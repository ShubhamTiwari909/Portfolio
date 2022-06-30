import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import About from './About'
import Blog from './Blog'
import Contact from './Contact'
import Projects from './Project'
import Skiils from './Skills'
import Footer from './Footer'
import './Portfolio.css'

const Main = props => {
    const buttonStyling = `flex space-x-3 mr-2 font-semibold 
    text-gray-200 rounded-sm ring-2 ring-purple-400 px-4 py-2
    hover:bg-white hover:text-white hover:ring-slate-300 mx-4 focus:bg-violet-700`;
    return (
        <div style={{ display: props.display ? "none" : "grid" }} className='bg-zinc-900'>
            <div className="portfolio--buttons">
                <div>
                    <Link to='/blogs'>
                        <button
                            className={buttonStyling}>
                            <p>Blogs</p>
                        </button>
                    </Link>
                </div>

                <div>
                    <Link to='/projects'>
                        <button
                            className={buttonStyling}>
                            <p>Projects</p>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to='/about'>
                        <button
                            className={buttonStyling}>
                            <p>About</p>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to='/contact'>
                        <button
                            className={buttonStyling}>
                            <p>Contact</p>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to='/skills'>
                        <button
                            className={buttonStyling}>
                            <p>Skills</p>
                        </button>
                    </Link>
                </div>
                <div>
                    <button onClick={props.isDisplay}
                    className="flex space-x-3 mr-2 font-semibold bg-gradient-to-r from-slate-100 via-slate-300 to-slate-400 
                    text-gray-800 rounded-sm ring-2 ring-blue-200 px-4 py-2
                    hover:bg-white hover:text-white hover:ring-slate-300 mx-4">Home</button>
                </div>
            </div>

            <div>
                <Routes>
                    <Route exact path='/blogs' element={<Blog />} />
                    <Route exact path='/projects' element={<Projects />} />
                    <Route exact path='/about' element={<About />} />
                    <Route exact path='/contact' element={<Contact />} />
                    <Route exact path='/skills' element={<Skiils />} />
                </Routes>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
};

export default Main