import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import { GoMarkGithub } from 'react-icons/go'
import { SiJavascript, SiCss3, SiSequelize } from 'react-icons/si'
import { IoLogoPython, IoLogoHtml5 } from 'react-icons/io'
import Image from 'next/image'
import pictureOfMe from '../public/pictureofme.jpg'
import design from '../public/design.png'
import code from '../public/code.png'
import battleships from '../public/battleships.png'
import cornhub from '../public/cornhub.png'
import faultsinour from '../public/faultsinourstars.png'
import pokepro from '../public/PokePro.png'
import { useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Stephan D Ramalho Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-teal-100 px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="mb-20">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">
              sramalho@fordham.edu
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-xl dark:text-white"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href=""
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Stephan D. Ramalho
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Web Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl mx-auto max-w-md dark:text-white">
              A software engineer who prizes collaboration, meeting goals, and
              always learning new things. Let's learn together!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
            <a href="http://www.linkedin.com/in/stephan-ramalho">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/sramalho94">
              <GoMarkGithub />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={pictureOfMe} fill={true} objectFit="cover" />
          </div>
        </section>
        <section>
          <div className="text-center">
            <h3 className="text-3xl py-1 dark:text-white">My Skills</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Front End: React, Vue, Next, Tailwind
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Back End: MongoDB, Sequelize, Express
            </p>
            <span className="text-teal-500">Coding Languages:</span>
            {/* <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              JavaScript, HTML, CSS, Python, C
            </p> */}
            <ul
              className="flex flex-row px-2 mx-5 py-5 justify-center shadow-2xl dark:text-white
            "
            >
              <li className="flex flex-col text-center justify-center align-middle px-auto pr-5">
                <SiJavascript className="flex flex-row justify-center align-middle text-4xl text-center px-auto" />
                <p>JavaScript</p>
              </li>
              <li className="flex flex-col text-center justify-center align-middle px-auto pr-5">
                <IoLogoPython className="flex flex-row justify-center align-middle text-4xl text-center px-auto" />
                <p>Python</p>
              </li>
              <li className="flex flex-col text-center justify-center align-middle px-auto pr-5">
                <IoLogoHtml5 className="flex flex-row justify-center align-middle text-4xl text-center px-auto" />
                <p>Html5</p>
              </li>
              <li className="flex flex-col text-center justify-center align-middle px-auto pr-5">
                <SiCss3 className="flex flex-row justify-center align-middle text-4xl text-center px-auto" />
                <p>CSS3</p>
              </li>
              <li className="flex flex-col text-center justify-center align-middle px-auto pr-5">
                <SiSequelize className="flex flex-row justify-center align-middle text-4xl text-center px-auto" />
                <p>SQL</p>
              </li>
            </ul>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              I strive to constantly expand my knowledge base. This list will be
              frequently updated.
            </p>
          </div>

          <div className="lg:flex gap-20 mx-0">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gradient-to-r from-teal-600">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-md pt-8 pb-2 dark:text-white">
                Responsive Frontend Projects
              </h3>
              <p className="py-2 dark:text-white">
                Creating elegant designs suited for your website and business
                needs.
              </p>
              <h4 className="py-4 text-teal-600">
                Development and Design Tools I use
              </h4>
              <p className="text-gray-800 py-1 dark:text-white">PhotoShop</p>
              <p className="text-gray-800 py-1 dark:text-white">Figma</p>
              <p className="text-gray-800 py-1 dark:text-white">React</p>
              <p className="text-gray-800 py-1 dark:text-white">Vue</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gradient-to-l from-teal-600">
              <Image id="wrong" src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  dark:text-white">
                Intelligent Backend Design
              </h3>
              <p className="py-2 dark:text-white">
                Whether it be SQL or nonSQL databases, I have experience
                creating complex associations between entities that allow you to
                easily access your business' data.
              </p>
              <h4 className="py-4 text-teal-600 ">Backend Tools I Use</h4>
              <p className="text-gray-800 py-1 dark:text-white">Sequelize</p>
              <p className="text-gray-800 py-1 dark:text-white">
                MongoDB/Mongoose
              </p>
              <p className="text-gray-800 py-1 dark:text-white">Postico</p>
              <p className="text-gray-800 py-1 dark:text-white">Insomnia</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white text-center">
              Portfolio
            </h3>
            <p className="py-2 text-center dark:text-white">
              An ever-growing list of the projects I have created and worked on
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={battleships}
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
              />
              <p className="text-lg font-medium pt-8 pb-2 text-center  dark:text-white">
                Admiral Stephan's BattleShips
              </p>
              <p className="py-2 text-center dark:text-white">
                In this first project, I created a web browser version of the
                classic board game, Battleship. Using only vanilla JavaScript I
                created a fully functional game where the player goes against an
                AI. When either the player or the AI runs out of ships, the game
                is over.
              </p>
              <div className="flex flex-row py-2 justify-center text-teal-600 dark:text-white">
                <a
                  href="https://admiralstephanbattleship.surge.sh/"
                  className="mr-5"
                >
                  Project Link
                </a>
                <a href="https://github.com/sramalho94/Admiral-Stephan-Battleship-Project">
                  Github Link
                </a>
              </div>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={cornhub}
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
              />
              <p className="text-lg font-medium pt-8 pb-2 text-center  dark:text-white">
                Corney Island
              </p>
              <p className="py-2 text-center dark:text-white">
                In this group hackathon project, our group created a theme
                parked themed web page. There are a number of themes and
                attractions to navigate through as you explore the page. The
                user also has the capability to add and delete attractions as
                well.
              </p>
              <div className="flex flex-row py-2 justify-center text-teal-600 dark:text-white">
                <a
                  href="https://corney-island2022.herokuapp.com/"
                  className="mr-5"
                >
                  Project Link
                </a>
                <a href="https://github.com/sramalho94/Corney_Island_Group_Project">
                  Github Link
                </a>
              </div>
              <div>
                <a href=""></a>
                <a href=""></a>
              </div>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={faultsinour}
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
              />
              <p className="text-lg font-medium pt-8 pb-2  dark:text-white text-center">
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
              <div className="flex flex-row py-2 justify-center text-teal-600 dark:text-white">
                <a href="https://starz-app.herokuapp.com/" className="mr-5">
                  Project Link
                </a>
                <a href="https://github.com/BrianDLara/The-Faults-In-Our-Stars_Frontend">
                  Github Link
                </a>
              </div>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={pokepro}
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
              />
              <p className="text-lg font-medium pt-8 pb-2 text-center  dark:text-white">
                PokePro
              </p>
              <p className="py-2 text-center dark:text-white">
                In this final project for General Assembly's Software
                Engineering Immersive, I made a full stack web application that
                allows users to look up trainers in the base pokemon games and
                see their pokemon team. Suggestions are given on how to beat
                each pokemon based on that Pokemon's type.
              </p>
              <div className="flex flex-row py-2 justify-center text-teal-600 dark:text-white">
                <a
                  href="https://pokepro-frontend.herokuapp.com/"
                  className="mr-5"
                >
                  Project Link
                </a>
                <a href="https://github.com/sramalho94/PokePro">Github Link</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
