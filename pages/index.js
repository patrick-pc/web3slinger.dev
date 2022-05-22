import { useEffect, useState } from 'react'
import { useMintCountContext } from '../context/ContextProvider'
import FadeIn from 'react-fade-in'
import Router from 'next/router'
import Image from 'next/image'

import { GenericMeta } from '../components/GenericMeta'
import { Navbar } from '../components/Navbar'
import { Skills } from '../components/Skills'
import { Projects } from '../components/Projects'
import { Activity } from '../components/Activity'
import { Info } from '../components/Info'
import { SocialData } from '../data/socials'

const Home = () => {
  const [mintCount] = useMintCountContext()
  const [selected, setSelected] = useState('Projects')

  const ListItem = ({ item }) => {
    return (
      <li
        className={`px-4 py-1 rounded-full text-sm font-semibold cursor-pointer transition hover:text-gray-500 hover:bg-gray-200 
            ${
              selected.toLowerCase() === item.toLowerCase()
                ? 'text-white bg-gray-700 dark:text-gray-800 dark:bg-gray-300 hover:dark:bg-gray-600 hover:dark:text-gray-300'
                : 'text-gray-500 bg-white dark:text-gray-300 dark:bg-black hover:dark:bg-gray-600 hover:dark:text-gray-300'
            }`}
        onClick={() => setSelected(item)}
      >
        {item}
      </li>
    )
  }

  const DisplayComponent = ({ component }) => {
    if (component === 'Projects') {
      return <Projects />
    } else if (component === 'Activity') {
      return <Activity />
    } else {
      return <Info />
    }
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
        <div className="flex justify-between w-full h-full">
          <div className="flex flex-col px-4 mx-auto mb-20 overflow-hidden lg:flex-row">
            <div className="flex flex-col shrink-0 lg:w-96">
              <div className="mb-6">
                <Image src="/img/smol-spider.png" alt="Smol Spider-Man" width={600} height={600} />
              </div>
              <div className="grid w-full grid-cols-2 gap-2 mb-6 text-sm font-medium">
                <Skills />
              </div>
            </div>
            <div className="flex flex-col lg:ml-6">
              <div className="flex flex-col mb-6 transition">
                <h1 className="mb-2 text-4xl font-bold">{SocialData.NAME}</h1>
                <p className="text-2xl font-medium text-gray-500">{SocialData.TITLE}</p>
              </div>
              <div className="flex flex-col w-full mb-6">
                <ul className="flex gap-2 mb-6">
                  <ListItem item="Projects" />
                  <ListItem item="Activity" />
                  <ListItem item="Info" />
                </ul>
                <DisplayComponent component={selected} />
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </>
  )
}

export default Home
