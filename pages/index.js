import { useEffect } from 'react'
import { useMintCountContext } from '../context/ContextProvider'
import FadeIn from 'react-fade-in'
import Router from 'next/router'
import Image from 'next/image'

import { Navbar } from '../components/Nav/Navbar'

const Home = () => {
  const [mintCount] = useMintCountContext()

  useEffect(() => {
    if (mintCount === 0) {
      Router.push('/mint')
    }
  })

  return (
    <>
      <FadeIn>
        <Navbar />
        <div className="flex flex-col justify-between flex-shrink w-full max-w-full min-w-0 height">
          <div className="flex flex-col px-4 mx-auto mb-20 overflow-hidden lg:flex-row">
            <div className="flex-shrink-0 lg:w-96">
              <div className="mb-6">
                <Image src="/img/smol-spider.png" alt="Smol Spider-Man" width={500} height={500} />
              </div>
              <div className="grid w-full grid-cols-2 gap-2 mb-6 text-sm font-medium">
                <div className="px-3 py-6 border border-gray-300 bg-gray-50 rounded-xl dark:bg-black dark:border-gray-800">Solidity</div>
                <div className="px-3 py-6 border border-gray-300 bg-gray-50 rounded-xl dark:bg-black dark:border-gray-800">JavaScript/TypeScript</div>
                <div className="px-3 py-6 border border-gray-300 bg-gray-50 rounded-xl dark:bg-black dark:border-gray-800">React/Next.js</div>
                <div className="px-3 py-6 border border-gray-300 bg-gray-50 rounded-xl dark:bg-black dark:border-gray-800">Tailwind CSS</div>
                <div className="px-3 py-6 border border-gray-300 bg-gray-50 rounded-xl dark:bg-black dark:border-gray-800">Node.js</div>
                <div className="px-3 py-6 border border-gray-300 bg-gray-50 rounded-xl dark:bg-black dark:border-gray-800">Python</div>
              </div>
            </div>
            <div className="relative flex flex-col items-start flex-shrink w-full min-w-0 ml-0 lg:ml-6">
              <h1 className="text-4xl font-semibold">Patrick Torralba</h1>
              <p className="text-2xl text-gray-500">Buildooor.</p>
            </div>
          </div>
        </div>
      </FadeIn>
    </>
  )
}

export default Home
