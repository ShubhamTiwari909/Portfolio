import React from "react";
import Myself from './Aboutmages/Myself.png'
import Skills from './Aboutmages/Skills.png'
import Education from './Aboutmages/Educations.png'
import Hobbies from './Aboutmages/Hobbies.png'
import { FcAbout } from 'react-icons/fc'
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <div classNameName='bg-neutral-100'>

            <h1 className='flex justify-center text-3xl text-slate-200 font-semibold bg-gradient-to-r from-slate-700 to-slate-900
                    py-5 my-5 border-y-4 border-y-violet-600'>
                <p className='bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200'>About</p>
                <div>
                    <FcAbout />
                </div>
            </h1>
            <Fade left>
                <section className="overflow-hidden text-gray-700">
                    <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-24">
                        <div className="flex flex-wrap -m-1 md:-m-2">
                            <div className="flex flex-wrap w-full">
                                <div className="w-full md:w-1/2 p-1 md:p-2 my-4">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg border-2 border-green-400"
                                        src={Education} />
                                </div>

                                <div className="w-full md:w-1/2 p-1 md:p-2 my-4">
                                    <img alt="gallery" className="block object-fit object-center w-full h-full rounded-lg border-2 border-green-400"
                                        src={Myself} />
                                </div>
                            </div>
                            <div className="flex flex-wrap w-full">
                                <div className="w-full md:w-1/2 p-1 md:p-2 my-4">
                                    <img alt="gallery" className="block object-fit object-center w-full h-full rounded-lg border-2 border-green-400"
                                        src={Skills} />
                                </div>
                                <div className="w-full md:w-1/2 p-1 md:p-2 my-4">
                                    <img alt="gallery" className="block object-fit object-center w-full h-full rounded-lg border-2 border-green-400"
                                        src={Hobbies} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fade>
        </div>

    );
};
export default About