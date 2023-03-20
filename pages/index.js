import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import { GoMarkGithub } from 'react-icons/go'
import {
  SiJavascript,
  SiCss3,
  SiSequelize,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiFlask,
  SiPostgresql,
  SiMongodb
} from 'react-icons/si'
import { IoLogoPython, IoLogoHtml5, IoLogoNodejs } from 'react-icons/io'
import { RiVuejsFill } from 'react-icons/ri'
import Image from 'next/image'
import pictureOfMe from '../public/pictureofme.jpg'
import design from '../public/design.png'
import code from '../public/code.png'
import { useState, useRef } from 'react'
import Project from '@/components/Project'
import projects from '../projectsData'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  const targetRef1 = useRef(null)
  const targetRef2 = useRef(null)
  const targetRef3 = useRef(null)

  const handleClickAboutMe = (event) => {
    event.preventDefault()
    window.scrollTo({
      top: targetRef1.current.offsetTop - 40,
      behavior: 'smooth'
    })
  }

  const handleClickMySkills = (event) => {
    event.preventDefault()
    window.scrollTo({
      top: targetRef2.current.offsetTop - 40,
      behavior: 'smooth'
    })
  }

  const handleClickPortfolio = (event) => {
    event.preventDefault()
    window.scrollTo({
      top: targetRef3.current.offsetTop - 40,
      behavior: 'smooth'
    })
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Stephan D Ramalho Portfolio</title>
        <meta name="description" content="Stephan D Ramalho Portfolio 2023" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="bg-purple-200 px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <header className=" flex flex-row justify-center mx-auto bg-emerald-200 fixed top-0 inset-x-0 z-50">
          <ul className="flex flex-row">
            <li>
              <a
                href="#"
                className="mr-10 font-bold text-purple-500"
                onClick={handleClickAboutMe}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#"
                className="mr-10 font-bold text-purple-500"
                onClick={handleClickMySkills}
              >
                My Skills
              </a>
            </li>
            <li>
              <a
                href="#"
                className="mr-10 font-bold text-purple-500"
                onClick={handleClickPortfolio}
              >
                Portfolio
              </a>
            </li>
          </ul>
        </header>
        <section className="mb-20 ">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">
              sramalho@fordham.edu
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-xl dark:text-white hover:scale-150 transition-all duration-300"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://docs.google.com/document/d/1qUU8qrM5QRt43vvQsLlP9WlA3HbnpUfFIirALzvLK_A/export?format=pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10" ref={targetRef1}>
            <h2 className="text-5xl py-2 text-purple-600 font-medium md:text-6xl">
              Stephan D. Ramalho
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Web Developer
            </h3>
            <p className="text-lg py-5 leading-8 text-gray-800 md:text-xl mx-auto max-w-md dark:text-white">
              A software engineer who loves collaboration, meeting goals, and
              always learning new things. Born and raised New Yorker, so I love
              a good slice of pizza and the subway. (when it runs on time) I let
              my passion for gaming and computer building lead me down the path
              of software engineering. I love learning and working on both
              Front-end and Back-end projects. Let's learn together!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
            <a
              href="http://www.linkedin.com/in/stephan-ramalho"
              className="hover:scale-150 transition-all duration-300"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/sramalho94"
              className="hover:scale-150 transition-all duration-300"
            >
              <GoMarkGithub />
            </a>
            <a
              href="mailto:sramalho@fordham.edu"
              className="hover:scale-150 transition-all duration-300"
            >
              <AiOutlineMail />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96  md:w-96">
            <Image src={pictureOfMe} fill={true} objectFit="cover" />
          </div>
        </section>
        <section ref={targetRef2}>
          <div className="text-center">
            <span className="text-purple-500 text-5xl font-bold">
              My Skills
            </span>

            <p className="text-xl font-bold py-5 leading-8 text-gray-800 dark:text-white">
              I strive to constantly expand my knowledge base. This list will be
              frequently updated.
            </p>
          </div>
          <ul
            className="flex flex-wrap  md:flex-row sm:w-screen  md:w-auto px-2 mx-5 py-5 align-middle rounded-lg justify-center shadow-2xl dark:text-white
            "
          >
            <li className="flex flex-col justify-center px-3">
              <SiJavascript className="text-4xl text-center mx-auto" />
              <p>JavaScript</p>
            </li>
            <li className="flex flex-col justify-center px-3">
              <IoLogoPython className="text-4xl text-center mx-auto" />
              <p>Python</p>
            </li>
            <li className="flex flex-col justify-center px-3">
              <IoLogoHtml5 className="text-4xl text-center mx-auto" />
              <p>Html5</p>
            </li>
            <li className="flex flex-col justify-center px-3">
              <SiCss3 className="text-4xl text-center mx-auto" />
              <p>CSS3</p>
            </li>
            <li className="flex flex-col justify-center px-3">
              <SiSequelize className="text-4xl text-center mx-auto" />
              <p>SQL</p>
            </li>
          </ul>
          <div className="lg:flex gap-20 mx-0">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gradient-to-r from-teal-600">
              <Image
                src={design}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-3xl font-bold pt-8 pb-2 dark:text-white">
                Responsive Front-end Projects
              </h3>
              <p className="py-2 dark:text-white">
                Creating elegant designs suited for your website and business
                needs.
              </p>
              <h4 className="py-4 font-bold text-xl text-purple-600">
                Front-End Development Skills
              </h4>
              <ul className="flex flex-row justify-center dark:text-white">
                <li className="flex flex-col justify-center px-3">
                  <SiReact className="text-4xl text-center mx-auto" />
                  <p>React.js</p>
                </li>
                <li className="flex flex-col justify-center px-3">
                  <RiVuejsFill className="text-4xl text-center mx-auto" />
                  <p>Vue.js</p>
                </li>
                <li className="flex flex-col justify-center px-3">
                  <SiNextdotjs className="text-4xl text-center mx-auto" />
                  <p>Next.js</p>
                </li>
                <li className="flex flex-col justify-center px-3">
                  <SiTailwindcss className="text-4xl text-center mx-auto" />
                  <p>Tailwind</p>
                </li>
              </ul>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gradient-to-l from-teal-600">
              <Image
                id="wrong"
                src={code}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-3xl font-bold pt-8 pb-2 dark:text-white">
                Intelligent Back-end Design
              </h3>
              <p className="py-2 dark:text-white">
                Whether it be SQL or nonSQL databases, I have experience
                creating complex associations between entities that allow you to
                easily access your business' data.
              </p>
              <h4 className="py-4 font-bold text-xl text-purple-600">
                Back-end Development Skills
              </h4>
              <ul className="grid grid-cols-2 md:flex md:flex-row justify-center dark:text-white ">
                <li className="flex flex-col justify-center px-3">
                  <IoLogoNodejs className="text-4xl text-center mx-auto" />
                  <p>Node.js</p>
                </li>
                <li className="flex flex-col justify-center px-3">
                  <SiExpress className="text-4xl text-center mx-auto" />
                  <p>Express.js</p>
                </li>
                <li className="flex flex-col justify-center px-3">
                  <SiFlask className="text-4xl text-center mx-auto" />
                  <p>Flask</p>
                </li>
                <li className="flex flex-col justify-center px-3">
                  <SiPostgresql className="text-4xl text-center mx-auto" />
                  <p>PostgreSQL</p>
                </li>
                <li className="flex flex-col justify-center px-3">
                  <SiMongodb className="text-4xl text-center mx-auto" />
                  <p>PostgreSQL</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section ref={targetRef3}>
          <div>
            <h3 className="text-5xl font-bold py-1 dark:text-white text-center m-auto text-purple-500">
              Portfolio
            </h3>
            <p className="py-2 text-center dark:text-white">
              An ever-growing list of the projects I have created and worked on
            </p>
          </div>
          <div className="flex flex-wrap">
            {projects.map((project) => (
              <div key={project.name} className="mx-auto">
                <Project
                  name={project.name}
                  image={project.image}
                  description={project.description}
                  projectLink={project.projectLink}
                  githubLink={project.githubLink}
                  technologies={project.technologies}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="flex flex-row justify-center  bg-emerald-200 w-screen ">
        <ul className="flex flex-row text-center justify-center ">
          <li className="flex flex-row align-middle justify-center text-purple-600 hover:scale-125 transition-all duration-300">
            <GoMarkGithub className="font-bold my-auto" />
            <a
              href="https://github.com/sramalho94/portfolio_2023"
              className="font-bold"
            >
              Github Repo
            </a>
          </li>
          <li className="flex flex-row pl-4">
            <p>Built Using: Next.js, Tailwindcss</p>
          </li>
        </ul>
      </footer>
    </div>
  )
}
