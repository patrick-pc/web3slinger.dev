import { useEffect } from 'react'
import { useMintCountContext } from '../context/ContextProvider'
import FadeIn from 'react-fade-in'
import Router from 'next/router'

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
        <div className="flex flex-col items-center justify-center">web3slinger</div>
      </FadeIn>
    </>
  )
}

export default Home
