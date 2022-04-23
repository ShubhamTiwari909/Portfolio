import React from 'react'
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
            linkName: "About",
            color:" ring-slate-300 "
        },
        {
            link: "/skills",
            linkName: "Skills",
            color: " ring-slate-300 "
        },
        {
            link: "/projects",
            linkName: "Projects",
            color: " ring-slate-300 "
        },
        {
            link: "/blogs",
            linkName: "Blogs",
            color: " ring-slate-300 "
        },
        {
            link: "/contact",
            linkName: "Contact",
            color:" ring-slate-300 "
        },
        {
            link: "/resume",
            linkName: "Resume",
            color:" ring-slate-300"
        }
    ]
    const buttonStyling = `navbar-buttons flex space-x-3 font-semibold bg-gradient-to-r from-violet-100 via-violet-200 to-violet-300
    ring-1 rounded-tl-lg rounded-br-lg px-5 py-2 ring-2 ring-white`;


    return (

        <div style={{ display: props.display ? "none" : "grid" }} className='bg-neutral-900'>

            <div>
                <div className="portfolio--header">
                    {
                        NavButtons.map(item => {
                            return (
                                <RubberBand>
                                    <div>
                                        <Link to={item.link}>
                                            <button
                                                className={`${buttonStyling} ${item.color}`}>
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
                            className="flex space-x-3 mr-2 font-semibold ring-1 ring-slate-300
                            text-gray-200 rounded-tr-lg rounded-bl-lg px-5 py-2
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