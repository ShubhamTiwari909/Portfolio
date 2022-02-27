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
        }
    ]
    const buttonStyling = `flex space-x-3 mr-2 font-semibold 
    text-gray-200 rounded-sm ring-2 ring-purple-400 px-4 py-2
    hover:bg-white hover:text-white hover:ring-slate-300 mx-4 
    focus:bg-slate-200 focus:text-indigo-800
    hover:bg-slate-300 hover:text-purple-700 hover:ring-purple-800`;
    return (
        <div style={{ display: props.display ? "none" : "grid" }} className='bg-zinc-900'>
            <div className="portfolio--buttons">
                {
                    NavButtons.map(item => {
                        return (
                            <div>
                                <Link to={item.link}>
                                    <button
                                        className={buttonStyling}>
                                        <p>{item.linkName}</p>
                                    </button>
                                </Link>
                            </div>
                        )
                    })

                }
                <div>
                    <button onClick={props.isDisplay}
                        className="flex space-x-3 mr-2 font-semibold bg-gradient-to-r from-slate-100 via-slate-300 to-slate-400 
                    text-gray-800 rounded-sm ring-2 ring-blue-200 px-4 py-2
                    hover:bg-white hover:text-white hover:ring-slate-300 mx-4 hover:text-indigo-600">Home</button>
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