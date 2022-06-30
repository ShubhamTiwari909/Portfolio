import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

// animations
import RubberBand from 'react-reveal/RubberBand';
import Flip from 'react-reveal/Flip';

// icons
import { AiOutlineCodepen } from 'react-icons/ai'
import { BsFilePerson } from 'react-icons/bs'
import { GiSkills } from 'react-icons/gi'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { SiBlogger } from 'react-icons/si'
import { MdOutlineConnectWithoutContact } from 'react-icons/md'
import {FcHome} from 'react-icons/fc'
import { FcDocument } from 'react-icons/fc'
import {FaHamburger} from 'react-icons/fa'

// components
import About from './About'
import Blog from './Blog'
import Contact from './Contact'
import Projects from './Project'
import Skiils from './Skills'
import Footer from './Footer'
import Resume from './Resume'
import './Portfolio.css'

const Navbar = props => {

    const [isActive, setisActive] = React.useState(false);

    const NavButtons = [
        {
            link: "/about",
            linkName:"About",
            linkIcon: <BsFilePerson color="white" size="1.5rem" />,
            color: " ring-slate-300 "
        },
        {
            link: "/skills",
            linkName:"Skills",
            linkIcon: <GiSkills size="1.5rem" />,
            color: " ring-slate-300 "
        },
        {
            link: "/projects",
            linkName:"Project",
            linkIcon: <AiOutlineFundProjectionScreen size="1.5rem" />,
            color: " ring-slate-300 "
        },
        {
            link: "/blogs",
            linkName:"Blogs",
            linkIcon: <SiBlogger size="1.5rem" />,
            color: " ring-slate-300 "
        },
        {
            link: "/contact",
            linkName:"Contact",
            linkIcon: <MdOutlineConnectWithoutContact size="1.5rem" />,
            color: " ring-slate-300 "
        },
        {
            link: "/resume",
            linkName:"Resume",
            linkIcon: <FcDocument size="1.5rem" />,
            color: " ring-slate-300"
        }
    ]
    const buttonStyling = `gradient-border flex justify-content-center font-semibold text-slate-200 px-3 py-2  my-3`;


    return (

        <div style={{ display: props.display ? "none" : "grid" }} className='bg-neutral-900'>
            <nav className="navbar bg-neutral-900" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <div className="navbar-item">
                        <AiOutlineCodepen color="cyan" size="2rem" />
                    </div>

                    <button
                        onClick={() => {
                            setisActive(!isActive);
                        }}
                        className={`navbar-burger burger ${isActive ? "is-active" : ""} `}
                        aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <FaHamburger color="white" size="1.5rem" />
                    </button>
                </div>

                <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""} bg-neutral-900`}>
                    <div className="navbar-start">
                        <div className="navbar-item">
                            <div className="portfolio--header">
                                {
                                    NavButtons.map(item => {
                                        return (
                                            <RubberBand key={item.link}>
                                                <div  className="lg:mx-5">
                                                    <Link to={item.link}>
                                                        <button
                                                            className={`${buttonStyling} ${item.color}`}>
                                                            <p className="mx-2">{item.linkName}</p>
                                                            <p>{item.linkIcon}</p>
                                                        </button>
                                                    </Link>
                                                </div>
                                            </RubberBand>
                                        )
                                    })

                                }
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className='grid grid-cols-1 place-items-center'>
                            <Flip right>
                                <button onClick={props.isDisplay}
                                    className="flex space-x-3 mr-2 font-semibold ring-1 ring-slate-300
                            text-gray-200 rounded-full px-5 py-2
                            hover:bg-white hover:ring-slate-300 mx-4 hover:text-indigo-600 ">
                                <FcHome size="2rem" />
                            </button>
                            </Flip>
                        </div>
                    </div>
                </div>
            </nav>

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