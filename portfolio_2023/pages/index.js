import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import { GoMarkGithub } from 'react-icons/go'
import Image from 'next/image'
import pictureOfMe from '../public/pictureofme.jpg'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Stephan D Ramalho Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10">
        <section className="min-h-screen">
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
      </main>
    </div>
  )
}
