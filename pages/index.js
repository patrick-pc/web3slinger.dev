import { useEffect, useState } from 'react'
import { useMintCountContext } from '../context/ContextProvider'
import { FiExternalLink } from 'react-icons/fi'
import { GiSwordwoman, GiDiamondsSmile, GiHammerNails, GiSpiderWeb } from 'react-icons/gi'
import FadeIn from 'react-fade-in'
import Router from 'next/router'
import Image from 'next/image'

import { GenericMeta } from '../components/GenericMeta'
import { Navbar } from '../components/Navbar'
import { GitHubActivity } from '../data/github-activity'

import { Projects } from '../components/Projects'

const Home = () => {
  const [mintCount] = useMintCountContext()
  const [selected, setSelected] = useState('projects')

  const getFeed = () => {
    console.log('getFeed')
    GitHubActivity.feed({ username: 'web3slinger', limit: 10, selector: '#gh-feed' })
  }

  const test = () => {
    console.log('test')
  }

  useEffect(() => {
    if (mintCount === 0) {
      Router.push('/mint')
    }
  })

  return (
    <>
      <GenericMeta title="web3slinger.dev" description="Buildooor." />
      <FadeIn>
        <Navbar />
        <div className="flex flex-col justify-between flex-shrink w-full max-w-full min-w-0 height">
          <div className="flex flex-col px-4 mx-auto mb-20 overflow-hidden lg:flex-row">
            <div className="flex-shrink-0 lg:w-96">
              <div className="mb-6">
                <Image src="/img/smol-spider.png" alt="Smol Spider-Man" width={600} height={600} />
              </div>
              <div className="grid w-full grid-cols-2 gap-2 mb-6 text-sm font-medium">
                <div className="px-3 py-6 transition border border-gray-300 bg-gray-50 rounded-xl dark:bg-gray-900 dark:border-gray-800">
                  Solidity
                </div>
                <div className="px-3 py-6 transition border border-gray-300 bg-gray-50 rounded-xl dark:bg-gray-900 dark:border-gray-800">
                  JavaScript/TypeScript
                </div>
                <div className="px-3 py-6 transition border border-gray-300 bg-gray-50 rounded-xl dark:bg-gray-900 dark:border-gray-800">
                  React/Next.js
                </div>
                <div className="px-3 py-6 transition border border-gray-300 bg-gray-50 rounded-xl dark:bg-gray-900 dark:border-gray-800">
                  Tailwind CSS
                </div>
                <div className="px-3 py-6 transition border border-gray-300 bg-gray-50 rounded-xl dark:bg-gray-900 dark:border-gray-800">
                  Node.js
                </div>
                <div className="px-3 py-6 transition border border-gray-300 bg-gray-50 rounded-xl dark:bg-gray-900 dark:border-gray-800">
                  Python
                </div>
              </div>
            </div>
            <div className="relative flex flex-col items-start flex-shrink w-full min-w-0 ml-0 lg:ml-6">
              <div className="flex flex-col mb-6">
                <h1 className="mb-2 text-4xl font-bold transition">Patrick Torralba</h1>
                <p className="text-2xl font-medium text-gray-500 transition">Buildooor.</p>
              </div>
              <div className="flex flex-col w-full mb-6">
                <ul className="flex gap-2 mb-6">
                  <li
                    className={
                      selected === 'projects'
                        ? 'px-4 py-1 text-sm font-semibold text-white bg-gray-700 transition rounded-full cursor-pointer hover:bg-gray-200 hover:dark:bg-gray-600 dark:bg-gray-300 hover:text-gray-500 dark:text-gray-800 hover:dark:text-gray-300'
                        : 'px-4 py-1 text-sm font-semibold text-gray-500 transition rounded-full cursor-pointer hover:bg-gray-200 hover:dark:bg-gray-600 dark:bg-black dark:text-gray-300'
                    }
                    onClick={() => setSelected('projects')}
                  >
                    Projects
                  </li>
                  <li
                    className={
                      selected === 'activity'
                        ? 'px-4 py-1 text-sm font-semibold text-white bg-gray-700 transition rounded-full cursor-pointer hover:bg-gray-200 hover:dark:bg-gray-600 dark:bg-gray-300 hover:text-gray-500 dark:text-gray-800 hover:dark:text-gray-300'
                        : 'px-4 py-1 text-sm font-semibold text-gray-500 transition rounded-full cursor-pointer hover:bg-gray-200 hover:dark:bg-gray-600 dark:bg-black dark:text-gray-300'
                    }
                    onClick={() => (setSelected('activity'), getFeed())}
                  >
                    Activity
                  </li>
                  <li
                    className={
                      selected === 'info'
                        ? 'px-4 py-1 text-sm font-semibold text-white bg-gray-700 transition rounded-full cursor-pointer hover:bg-gray-200 hover:dark:bg-gray-600 dark:bg-gray-300 hover:text-gray-500 dark:text-gray-800 hover:dark:text-gray-300'
                        : 'px-4 py-1 text-sm font-semibold text-gray-500 transition rounded-full cursor-pointer hover:bg-gray-200 hover:dark:bg-gray-600 dark:bg-black dark:text-gray-300'
                    }
                    onClick={() => setSelected('info')}
                  >
                    Info
                  </li>
                </ul>
                {selected === 'projects' ? <Projects /> : null}

                <div id="gh-feed" className={selected !== 'activity' ? 'hidden' : 'relative'}></div>

                {selected === 'info' ? (
                  <div className="text-sm">
                    <div className="flex items-center justify-between mb-3 transition">
                      <div className="text-gray-500">Contract Address</div>
                      <a
                        className="flex items-center gap-2 text-indigo-800"
                        href="https://rinkeby.etherscan.io/address/0x4f4f87E9AD124Da45b34863067DDb1EDd8eCF48c"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="font-medium">0x4f4f...F48c</div>
                        <FiExternalLink />
                      </a>
                    </div>
                    <div className="flex items-center justify-between mb-3 transition">
                      <div className="text-gray-500">Token ID</div>
                      <div className="font-medium">1</div>
                    </div>
                    <div className="flex items-center justify-between mb-3 transition">
                      <div className="text-gray-500">Token Standard</div>
                      <div className="font-medium">ERC721</div>
                    </div>
                    <div className="flex items-center justify-between mb-3 transition">
                      <div className="text-gray-500">Blockchain</div>
                      <div className="font-medium">Ethereum</div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </>
  )
}

export default Home
