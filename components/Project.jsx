import React from 'react'
import Image from 'next/image'
import {
  SiCss3,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { IoLogoHtml5, IoLogoNodejs } from 'react-icons/io'
const Project = ({
  name,
  image,
  description,
  projectLink,
  githubLink,
  technologies
}) => {
  const techIcon = {
    javascript: <SiJavascript className="text-4xl text-center mx-auto pr-3" />,
    css: <SiCss3 className="text-4xl text-center mx-auto pr-3" />,
    postgres: <SiPostgresql className="text-4xl text-center mx-auto pr-3" />,
    express: <SiExpress className="text-4xl text-center mx-auto pr-3" />,
    react: <SiReact className="text-4xl text-center mx-auto pr-3" />,
    node: <IoLogoNodejs className="text-4xl text-center mx-auto pr-3" />,
    tailwind: <SiTailwindcss className="text-4xl text-center mx-auto pr-3" />,
    mongodb: <SiMongodb className="text-4xl text-center mx-auto pr-3" />,
    next: <SiNextdotjs className="text-4xl text-center mx-auto pr-3" />,
    aws: <FaAws className="text-4xl text-center mx-auto pr-3" />,
    html: <IoLogoHtml5 className="text-4xl text-center mx-auto pr-3" />
  }

  return (
    <div className="bg-purple-400  bg-gradient-to-tr from-emerald-200 flex flex-col justify-center align-middle  rounded-xl mx-2 my-2 dark:bg-black">
      <div className="relative h-72 w-full flex flex-row justify-center">
        <Image src={image} className="rounded-lg shadow-xl" fill />
      </div>
      <h3 className="text-xl font-bold pt-8 pb-2 text-center dark:text-white">
        {name}
      </h3>
      <p className="py-2 text-center max-w-md dark:text-white">{description}</p>
      <div className="flex flex-row py-2 justify-center text-purple-600 dark:text-white">
        <a
          href={projectLink}
          className="mr-5 font-bold text-xl hover:scale-125 transition-all duration-300"
        >
          Project Link
        </a>
        <a
          href={githubLink}
          className="mr-5 font-bold text-xl hover:scale-125 transition-all duration-300"
        >
          Github Link
        </a>
      </div>
      <div className="flex flex-col">
        <p className="text-xl font-bold pt-8 pb-2 text-center dark:text-white">
          {' '}
          Technologies Used:
        </p>
        <div className="flex flex-row justify-center">
          {technologies.map((tech) => (
            <div key={tech} className="dark:text-white">
              {techIcon[tech]}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project
