import React, { useState } from 'react'
import Fade from 'react-reveal/Fade';
import Blog1 from './BlogImages/Blog1.jpg'
import Blog2 from './BlogImages/Blog2.jpg'
import Blog3 from './BlogImages/Blog3.jpg'
import Blog4 from './BlogImages/Blog4.jpg'
import Blog5 from './BlogImages/Blog5.jpg'
import Blog6 from './BlogImages/Blog6.jpg'
import Blog7 from './BlogImages/Blog7.jpg'
import Blog8 from './BlogImages/Blog8.jpg'
import { SiBlogger } from 'react-icons/si'

function Blog() {
  const [animate, setAnimate] = useState(true);
  setTimeout(() => {
    setAnimate(false)
  }, 500);
  const BlogData = [
    {
      Title: "Glass Effect in React",
      BlogImage: Blog1,
      BlogDate: "2 Feb 2022",
      BlogLink: "https://dev.to/shubhamtiwari909/glass-effect-in-react-36p7"
    },
    {
      Title: "Higher Order Functions in Javascript",
      BlogImage: Blog2,
      BlogDate: "25 Jan 2022",
      BlogLink: "https://dev.to/shubhamtiwari909/higher-order-function-in-javascript-1i5h"
    },
    {
      Title: "Arrow Functions in Javascript",
      BlogImage: Blog3,
      BlogDate: "24 Jan 2022",
      BlogLink: "https://dev.to/shubhamtiwari909/arrow-function-in-javascript-46gd"
    },
    {
      Title: "Introduction to Tailwind Best CSS Framework",
      BlogImage: Blog4,
      BlogDate: "6 Jan 2022",
      BlogLink: "https://dev.to/shubhamtiwari909/introduction-to-tailwind-best-css-framework-1gdj"
    },
    {
      Title: "Text-to-speech in React",
      BlogImage: Blog5,
      BlogDate: "22 Dec 2021",
      BlogLink: "https://dev.to/shubhamtiwari909/text-to-speech-in-reactjs-52ml"
    },
    {
      Title: "Helpful Websites for Frontend Web Development",
      BlogImage: Blog6,
      BlogDate: "4 Dec 2021",
      BlogLink: "https://dev.to/shubhamtiwari909/helpful-websites-for-frontend-web-development-55a8"
    },
    {
      Title: "Bubble Sort Algorithm",
      BlogImage: Blog7,
      BlogDate: "18 Nov 2021",
      BlogLink: "https://dev.to/shubhamtiwari909/bubble-sort-algorithm-1o5e"
    },
    {
      Title: "Best VSCode Extensions for Web Development",
      BlogImage: Blog8,
      BlogDate: "19 Dec 2021",
      BlogLink: "https://dev.to/shubhamtiwari909/best-vs-code-extensions-for-web-development-2lk3"
    }
  ]

  const styling = `grid grid-cols-1 place-items-center bg-neutral-900
   my-8 pb-10 mx-10 rounded-br-lg rounded-tl-lg shadow-xl shadow-slate-800 ${animate ? 'animate-spin' : ""}`
  return (
    <div className='bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-400'>
      <h1 className='flex justify-center text-3xl text-slate-200 font-semibold bg-gradient-to-r from-slate-700 to-slate-900
      py-5 mt-5 border-y-4 border-y-violet-600'>
        <p className='bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200'>Blog</p>  
        <SiBlogger size='2.5rem' style={{ margin: "0 1rem" }} />
      </h1>
      <h1 className='mx-5 text-slate-600 font-semibold my-10 text-2xl'>I write Blogs on a Platform named
        <a href='https://dev.to/' target='_blank' rel="noreferrer" className='text-blue-600 font-semibold'> Dev Community</a>
        , it is a Blogging Platform where we write blogs only related to Coding and Progamming
        and is similar to a Social Media App where we can get likes , views , comments , saves etc.
        Some of my Blogs are mentioned below.</h1>

      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 place-items-center my-5 py-5'>
        {BlogData.map(item => {
          return (
            <Fade bottom>
              <div key={item.Title} className={styling}>
                <img src={item.BlogImage} alt="Blogs Thumbnail" className='w-full' />
                <h1 className='text-slate-200 text-md lg:text-lg md:text-lg text-center font-mono font-semibold py-6 border-b-2 border-solid border-indigo-300'>{item.Title}</h1>
                <a href={item.BlogLink} target='_blank' rel="noreferrer"
                  className='ring-2 ring-indigo-300 rounded-md bg-gradient-to-r from-indigo-500 via-purple-700 to pink-800 
              py-2 px-5 my-10 text-slate-200 font-bold'>Read Blog</a>
                <h2 className='text-slate-200 py-6'>Date Published : {item.BlogDate}</h2>
              </div>
            </Fade>
          )
        })
        }
      </div>
    </div>
  )
}

export default Blog