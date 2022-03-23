import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import RubberBand from 'react-reveal/RubberBand';
import Flip from 'react-reveal/Flip';
import About from './About'
import Blog from './Blog'
import Contact from './Contact'
import Projects from './Project'
import Skiils from './Skills'
import Footer from './Footer'
import Resume from './Resume'
import './Portfolio.css'

const Navbar = props => {

    const NavButtons = [
        {
            link: "/about",
            linkName: "About"
        },
        {
            link: "/skills",
            linkName: "Skills"
        },
        {
            link: "/projects",
            linkName: "Projects"
        },
        {
            link: "/blogs",
            linkName: "Blogs"
        },
        {
            link: "/contact",
            linkName: "Contact"
        },
        {
            link: "/resume",
            linkName: "Resume"
        }
    ]
    const buttonStyling = `flex space-x-3 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-200  font-semibold 
    text-gray-900 rounded-tl-lg rounded-br-lg ring-2 ring-purple-800 px-4 py-2
    hover:bg-white hover:text-white hover:ring-slate-300 mx-3 
    focus:bg-slate-200 focus:text-indigo-800
    hover:bg-slate-300 hover:text-purple-700 hover:ring-purple-800 navButtons`;


    return (
        <div style={{ display: props.display ? "none" : "grid" }} className='bg-neutral-300'>
         
            <div>
                <div className="portfolio--header">
                    {
                        NavButtons.map(item => {
                            return (
                                <RubberBand>
                                    <div>
                                        <Link to={item.link}>
                                            <button
                                                className={buttonStyling}>
                                                <p>{item.linkName}</p>
                                            </button>
                                        </Link>
                                    </div>
                                </RubberBand>
                            )
                        })

                    }
                </div>
                <div className='grid grid-cols-1 place-items-center mb-5'>
                    <Flip right>
                        <button onClick={props.isDisplay}
                            className="flex space-x-3 mr-2 font-semibold bg-gradient-to-r from-slate-100 via-slate-200 to-slate-200 
                            text-gray-800 border-x-4 border-x-purple-700 rounded-tr-lg rounded-bl-lg px-5 py-2
                            hover:bg-white hover:ring-slate-300 mx-4 hover:text-indigo-600 ">Home</button>
                    </Flip>
                </div>

            </div>

            <div>
                <Routes>
                    <Route exact path='/blogs' element={<Blog />} />
                    <Route exact path='/projects' element={<Projects />} />
                    <Route exact path='/about' element={<About />} />
                    <Route exact path='/contact' element={<Contact />} />
                    <Route exact path='/skills' element={<Skiils />} />
                    <Route exact path='/resume' element={<Resume />} />
                </Routes>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
};

export default Navbar