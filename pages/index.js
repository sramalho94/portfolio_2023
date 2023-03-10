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
import battleships from '../public/battleships.png'
import cornhub from '../public/cornhub.png'
import faultsinour from '../public/faultsinourstars.png'
import faults2 from '../public/faults2.png'
import pokepro from '../public/PokePro.png'
import { useState, useRef } from 'react'

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
                  href="https://docs.google.com/document/d/142lWER44BbPiJk_PRyqOpccsorRWrZdhqd8rtPCMcNE/export?format=pdf"
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
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl mx-auto max-w-md dark:text-white">
              A software engineer who loves collaboration, meeting goals, and
              always learning new things. Let's learn together!
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
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 shadow-xl bg-gradient-to-tr from-emerald-200 rounded-lg">
              <Image
                src={battleships}
                className="rounded-lg object-cover w-10 h-10"
                width={'100%'}
                height={'100%'}
                layout="responsive"
              />
              <p className="text-xl font-bold pt-8 pb-2 text-center  dark:text-white">
                Admiral Stephan's BattleShips
              </p>
              <p className="py-2 text-center dark:text-white">
                In this first project, I created a web browser version of the
                classic board game, Battleship. Using only vanilla JavaScript I
                created a fully functional game where the player goes against an
                AI. When either the player or the AI runs out of ships, the game
                is over.
              </p>
              <div className="flex flex-row py-2 justify-center text-purple-600 dark:text-white">
                <a
                  href="https://admiralstephanbattleship.surge.sh/"
                  className="mr-5 font-bold text-xl hover:scale-125 transition-all duration-300"
                >
                  Project Link
                </a>
                <a
                  href="https://github.com/sramalho94/Admiral-Stephan-Battleship-Project"
                  className="mr-5 font-bold text-xl hover:scale-125 transition-all duration-300"
                >
                  Github Link
                </a>
              </div>
              <ul className="flex flex-row justify-center dark:text-white">
                <li>
                  <SiJavascript className="text-4xl text-center mx-auto pr-3" />
                </li>
                <li>
                  <SiCss3 className="text-4xl text-center mx-auto pr-3" />
                </li>
                <li>
                  <IoLogoHtml5 className="text-4xl text-center mx-auto pr-3" />
                </li>
              </ul>
            </div>
            <div className="basis-1/3 flex-1 shadow-xl bg-gradient-to-tr from-emerald-200 rounded-lg">
              <Image
                src={cornhub}
                className="rounded-lg object-cover w-10 h-10"
                width={'100%'}
                height={'100%'}
                layout="responsive"
              />
              <p className="text-xl font-bold pt-8 pb-2 text-center  dark:text-white">
                Corney Island
              </p>
              <p className="py-2 text-center dark:text-white">
                In this group hackathon project, our group created a theme
                parked themed web page. There are a number of themes and
                attractions to navigate through as you explore the page. The
                user also has the capability to add and delete attractions as
                well.
              </p>
              <div className="flex flex-row py-2 justify-center text-purple-600 dark:text-white">
                <a
                  href="https://corney-island2022.herokuapp.com/"
                  className="mr-5 font-bold text-xl hover:scale-125 transition-all duration-300"
                >
                  Project Link
                </a>
                <a
                  href="https://github.com/sramalho94/Corney_Island_Group_Project"
                  className="mr-5 font-bold text-xl hover:scale-125 transition-all duration-300"
                >
                  Github Link
                </a>
              </div>
              <ul className="flex flex-row justify-center dark:text-white">
                <li>
                  <SiJavascript className="text-4xl text-center mx-auto pr-3" />
                </li>
                <li>
                  <SiCss3 className="text-4xl text-center mx-auto pr-3" />
                </li>
                <li>
                  <SiMongodb className="text-4xl text-center mx-auto pr-3" />
                </li>
                <li>
                  <SiExpress className="text-4xl text-center mx-auto pr-3" />
                </li>
                <li>
                  <SiReact className="text-4xl text-center mx-auto pr-3" />
                </li>
                <li>
                  <IoLogoNodejs className="text-4xl text-center mx-auto pr-3" />
                </li>
              </ul>
            </div>
            <div className="basis-1/3 flex-1 shadow-xl bg-gradient-to-tr from-emerald-200 rounded-lg">
              <Image
                src={faults2}
                className="rounded-lg  w-10 h-1"
                width={'100%'}
                height={'100%'}
                layout="responsive"
              />
              <p className="text-xl font-bold pt-8 pb-2 text-center  dark:text-white">
                The Faults In Our Stars
              </p>
              <p className="py-2 text-center dark:text-white">
                The Faults In Our Stars is a hyper-personalized, social
                experience bringing astrology into the 22nd century. Our aim is
                to create social circles revolving around zodiac signs. This
                website will allow you to connect to people that are compatible
                to your zodiac sign and at the same time rate the users based on
                their personalities and sign compatibility; wether good or bad,
                create new social circles, that will improve you work and love
                life.
              </p>
              <div className="flex flex-row py-2 justify-center text-purple-600 dark:text-white">
                <a
                  href="https://starz-app.herokuapp.com/"
                  className="mr-5 font-bold text-xl hover:scale-125 transition-all duration-300"
                >
                  Project Link
                </a>
                <a
                  href="https://github.com/BrianDLara/The-Faults-In-Our-Stars_Frontend"
                  className="mr-5 font-bold text-xl hover:scale-125 transition-all duration-300"
                >
                  Github Link
                </a>
              </div>
              <div>
                <ul className="flex flex-row justify-center dark:text-white">
                  <li>
                    <SiJavascript className="text-4xl text-center mx-auto pr-3" />
                  </li>
                  <li>
                    <SiCss3 className="text-4xl text-center mx-auto pr-3" />
                  </li>
                  <li>
                    <SiPostgresql className="text-4xl text-center mx-auto pr-3" />
                  </li>
                  <li>
                    <SiExpress className="text-4xl text-center mx-auto pr-3" />
                  </li>
                  <li>
                    <SiReact className="text-4xl text-center mx-auto pr-3" />
                  </li>
                  <li>
                    <IoLogoNodejs className="text-4xl text-center mx-auto pr-3" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="basis-1/3 flex-1 shadow-xl bg-gradient-to-tr from-emerald-200 rounded-lg">
              <Image
                src={pokepro}
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
              />
              <p className="text-xl font-bold pt-8 pb-2 text-center  dark:text-white">
                PokePro
              </p>
              <p className="py-2 text-center dark:text-white">
                In this final project for General Assembly's Software
                Engineering Immersive, I made a full stack web application that
                allows users to look up trainers in the base pokemon games and
                see their pokemon team. Suggestions are given on how to beat
                each pokemon based on that Pokemon's type.
              </p>
              <div className="flex flex-row py-2 justify-center text-purple-600 dark:text-white">
                <a
                  href="https://pokepro-frontend.herokuapp.com/"
                  className="mr-5 font-bold text-xl hover:scale-125 transition-all duration-300"
                >
                  Project Link
                </a>
                <a
                  href="https://github.com/sramalho94/PokePro"
                  className="mr-5 font-bold text-xl hover:scale-125 transition-all duration-300"
                >
                  Github Link
                </a>
              </div>
              <div>
                <ul className="flex flex-row justify-center dark:text-white">
                  <li>
                    <SiJavascript className="text-4xl text-center mx-auto pr-3" />
                  </li>
                  <li>
                    <SiCss3 className="text-4xl text-center mx-auto pr-3" />
                  </li>
                  <li>
                    <SiPostgresql className="text-4xl text-center mx-auto pr-3" />
                  </li>
                  <li>
                    <SiExpress className="text-4xl text-center mx-auto pr-3" />
                  </li>
                  <li>
                    <SiReact className="text-4xl text-center mx-auto pr-3" />
                  </li>
                  <li>
                    <IoLogoNodejs className="text-4xl text-center mx-auto pr-3" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-row justify-center  bg-emerald-200 w-screen ">
        <ul className="flex flex-row text-center justify-center ">
          <li className="flex flex-row align-middle justify-center text-purple-600 hover:scale-125 transition-all duration-300">
            <GoMarkGithub className="font-bold my-auto" />
            <a href="https://github.com/sramalho94" className="font-bold">
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
