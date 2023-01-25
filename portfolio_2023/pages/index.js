import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import { GoMarkGithub } from 'react-icons/go'
import Image from 'next/image'
import pictureOfMe from '../public/pictureofme.jpg'
import design from '../public/design.png'
import code from '../public/code.png'
import battleships from '../public/battleships.png'
import cornhub from '../public/cornhub.png'
import faultsinour from '../public/faultsinourstars.png'
import pokepro from '../public/PokePro.png'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Stephan D Ramalho Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 min-h-screen">
        <section className="">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">sramalho94</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-xl" />
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
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Stephan D. Ramalho
            </h2>
            <h3 className="text-2xl py-2">Developer and Designer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              A software engineer who prizes collaboration, meeting goals, and
              always learning new things. Let's learn together!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="http://www.linkedin.com/in/stephan-ramalho">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/sramalho94">
              <GoMarkGithub />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image
              className=" pt-4 mx-auto h-60 w-60 rounded-full"
              src={pictureOfMe}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Skills I have</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Front End: React, Vue, Next, Tailwind
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              Back End: MongoDB, Sequelize, Express
            </p>
            <span className="text-teal-500">Coding Languages:</span>
            <p className="text-md py-2 leading-8 text-gray-800">
              JavaScript, HTML, CSS, Python, C
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              I strive to constantly expand my knowledge base. This list will be
              frequently updated.
            </p>
          </div>

          <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-md pt-8 pb-2">Responsive Designs</h3>
              <p className="py-2 ">
                Creating elegant designs suited for your website and business
                needs.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I use</h4>
              <p className="text-gray-800 py-1">PhotoShop</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Vue</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image id="wrong" src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Intelligent Backend Design
              </h3>
              <p className="py-2">
                Whether it be SQL or nonSQL databases, I have experience
                creating complex associations between entities that allow you to
                easily access your business' data.
              </p>
              <h4 className="py-4 text-teal-600">Backend Tools I Use</h4>
              <p className="text-gray-800 py-1">Sequelize</p>
              <p className="text-gray-800 py-1">MongoDB/Mongoose</p>
              <p className="text-gray-800 py-1">Postico</p>
              <p className="text-gray-800 py-1">Insomnia</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="py-2 ">
              An ever-growing list of the projects I have created and worked on
            </p>
          </div>
          <div>
            <div>
              <Image src />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
