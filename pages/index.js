import { useEffect, useState } from 'react'
import { useMintCountContext } from '../context/ContextProvider'
import { FiExternalLink } from 'react-icons/fi'
import { GiSwordwoman, GiDiamondsSmile, GiHammerNails, GiSpiderWeb } from 'react-icons/gi'
import FadeIn from 'react-fade-in'
import Router from 'next/router'
import Image from 'next/image'

import { Navbar } from '../components/Nav/Navbar'

const Home = () => {
  const [mintCount] = useMintCountContext()
  const [selected, setSelected] = useState('projects')

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
                <div className="px-3 py-6 transition border border-gray-300 bg-gray-50 rounded-xl dark:bg-black dark:border-gray-800">
                  Solidity
                </div>
                <div className="px-3 py-6 transition border border-gray-300 bg-gray-50 rounded-xl dark:bg-black dark:border-gray-800">
                  JavaScript/TypeScript
                </div>
                <div className="px-3 py-6 transition border border-gray-300 bg-gray-50 rounded-xl dark:bg-black dark:border-gray-800">
                  React/Next.js
                </div>
                <div className="px-3 py-6 transition border border-gray-300 bg-gray-50 rounded-xl dark:bg-black dark:border-gray-800">
                  Tailwind CSS
                </div>
                <div className="px-3 py-6 transition border border-gray-300 bg-gray-50 rounded-xl dark:bg-black dark:border-gray-800">
                  Node.js
                </div>
                <div className="px-3 py-6 transition border border-gray-300 bg-gray-50 rounded-xl dark:bg-black dark:border-gray-800">
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
                        ? 'px-4 py-1 text-sm font-semibold text-white bg-gray-700 transition rounded-full cursor-pointer hover:bg-gray-200 hover:dark:bg-gray-600 dark:bg-gray-300 hover:text-gray-500 dark:text-gray-800'
                        : 'px-4 py-1 text-sm font-semibold text-gray-500 transition rounded-full cursor-pointer hover:bg-gray-200 hover:dark:bg-gray-600 dark:bg-black dark:text-gray-300'
                    }
                    onClick={() => setSelected('projects')}
                  >
                    Projects
                  </li>
                  <li
                    className={
                      selected === 'info'
                        ? 'px-4 py-1 text-sm font-semibold text-white bg-gray-700 transition rounded-full cursor-pointer hover:bg-gray-200 hover:dark:bg-gray-600 dark:bg-gray-300 hover:text-gray-500 dark:text-gray-800'
                        : 'px-4 py-1 text-sm font-semibold text-gray-500 transition rounded-full cursor-pointer hover:bg-gray-200 hover:dark:bg-gray-600 dark:bg-black dark:text-gray-300'
                    }
                    onClick={() => setSelected('info')}
                  >
                    Info
                  </li>
                </ul>
                {selected === 'projects' ? (
                  <div className="grid gap-6">
                    <a
                      className="flex flex-col sm:flex-row text-center sm:text-left px-8 sm:px-6 py-6 rounded-md border border-gray-300 dark:border-gray-800 max-w-2xl cursor-pointer focus:outline-none transition duration-300 ease-in-out transform hover:scale-102.5"
                      href="https://web3slinger-metaverse-slayer.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex items-center justify-center w-full mb-4 mr-6 text-4xl sm:w-1/12 sm:mb-0">
                        <div>
                          <GiSwordwoman />
                        </div>
                      </div>
                      <div className="flex flex-col items-center w-full sm:items-start sm:w-11/12">
                        <div className="flex items-center gap-2">
                          <div className="font-semibold">Metaverse Slayer</div>
                          <FiExternalLink />
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          Turn-based NFT browser game.
                        </div>
                      </div>
                    </a>
                    <a
                      className="flex flex-col sm:flex-row text-center sm:text-left px-8 sm:px-6 py-6 rounded-md border border-gray-300 dark:border-gray-800 max-w-2xl cursor-pointer focus:outline-none transition duration-300 ease-in-out transform hover:scale-102.5"
                      href="https://web3slinger-epic-nfts.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex items-center justify-center w-full mb-4 mr-6 text-4xl sm:w-1/12 sm:mb-0">
                        <div>
                          <GiDiamondsSmile />
                        </div>
                      </div>
                      <div className="flex flex-col items-center w-full sm:items-start sm:w-11/12">
                        <div className="flex items-center gap-2">
                          <div className="font-semibold">Epic NFTs</div>
                          <FiExternalLink />
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          3 word epic NFTs that makes you laugh.
                        </div>
                      </div>
                    </a>
                    <a
                      className="flex flex-col sm:flex-row text-center sm:text-left px-8 sm:px-6 py-6 rounded-md border border-gray-300 dark:border-gray-800 max-w-2xl cursor-pointer focus:outline-none transition duration-300 ease-in-out transform hover:scale-102.5"
                      href="https://daedalus-dao.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex items-center justify-center w-full mb-4 mr-6 text-4xl sm:w-1/12 sm:mb-0">
                        <div>
                          <GiHammerNails />
                        </div>
                      </div>
                      <div className="flex flex-col items-center w-full sm:items-start sm:w-11/12">
                        <div className="flex items-center gap-2">
                          <div className="font-semibold">Daedalus DAO</div>
                          <FiExternalLink />
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          Community for builders using thirdweb.
                        </div>
                      </div>
                    </a>
                    <a
                      className="flex flex-col sm:flex-row text-center sm:text-left px-8 sm:px-6 py-6 rounded-md border border-gray-300 dark:border-gray-800 max-w-2xl cursor-pointer focus:outline-none transition duration-300 ease-in-out transform hover:scale-102.5"
                      href="https://github.com/web3slinger/web3slinger.dev"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex items-center justify-center w-full mb-4 mr-6 text-4xl sm:w-1/12 sm:mb-0">
                        <div>
                          <GiSpiderWeb />
                        </div>
                      </div>
                      <div className="flex flex-col items-center w-full sm:items-start sm:w-11/12">
                        <div className="flex items-center gap-2">
                          <div className="font-semibold">web3slinger.dev</div>
                          <FiExternalLink />
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          The website you're currently on! Made with Next.js and Tailwind CSS.
                        </div>
                      </div>
                    </a>
                  </div>
                ) : null}
                {selected === 'info' ? (
                  <div className="text-sm">
                    <div className="flex items-center justify-between mb-3 transition">
                      <div className="text-gray-500">Contract Address</div>
                      <a
                        className="flex items-center gap-2 text-purple-800"
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
