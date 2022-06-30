import React from 'react'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import Project1 from './images/Project1.png'
import Project2 from './images/Project2.png'
import Tada from 'react-reveal/Tada';

function Project() {
  const ProjectData = [
    {
      ProjectTitle: "Photo Globe",
      ProjectLink: "https://relaxed-wright-c3ff59.netlify.app/",
      ProjectImage: Project2,
      Date: "December 2021",
      LanguagesUsed: ["HTML5", "CSS3", "JAVASCRIPT(ES6)", "TAILWIND", "REACT JS"],
      ProjectDescription: "This Project is related to Image searching and Downloading using unsplash Api. The searching is Done without Reloading the Page and it is responsive Design too"
    },
    {
      ProjectTitle: "Knowledge Earth",
      ProjectLink: "https://knowledge-earth2k99.netlify.app/",
      ProjectImage: Project1,
      Date: "January 2022",
      LanguagesUsed: ["HTML5", "CSS3", "JAVASCRIPT(ES6)", "TAILWIND", "REACT JS"],
      ProjectDescription: "This Project is related to Wikipedia searching Api where a user can search things and then can read the whole content by redirecting to that wikipedia page and it also has a voice assistance"
    }
  ]
  return (
    <div className='bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-400'>
      <h1 className='flex justify-center text-3xl text-slate-200 font-semibold bg-gradient-to-r from-slate-700 to-slate-900
      py-5 mt-5 border-y-4 border-y-violet-600'>
        <p className='bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200'>Projects</p>
        <AiOutlineFundProjectionScreen size='2.5rem' style={{ margin: "0 1rem" }} />
      </h1>


      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 place-items-center my-5 py-5'>
        {ProjectData.map(item => {
          return (
            <Tada>
              <div class="max-w-sm mx-5 bg-neutral-800 rounded-lg overflow-hidden shadow-2xl shadow-slate-800 my-8">
                <img class="w-full" src={item.ProjectImage} alt="Blogs Thumbnail" />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 text-indigo-100">{item.ProjectTitle}</div>
                  <p class="text-indigo-200 text-base">
                    {item.ProjectDescription}
                  </p>
                </div>
                <div class="text-center my-3 px-6 py-4">
                  <a href={item.ProjectLink} target='_blank' rel="noreferrer"
                    className='bg-gradient-to-tr from-gray-900 via-purple-900 to-violet-600 ring-2 ring-indigo-600 rounded-md
              py-2 px-5 my-10 text-slate-200 font-bold'>Open Project</a>
                  <h2 className='text-slate-200 py-6'>Date Published : {item.Date}</h2>
                </div>
                <div class="px-6 pb-2 flex flex-wrap">
                  {item.LanguagesUsed.map(language => {
                    return (
                      <span class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{language}</span>
                    )
                  })}
                </div>
              </div>
            </Tada>
          )
        })
        }
      </div>

    </div>
  )
}

export default Project