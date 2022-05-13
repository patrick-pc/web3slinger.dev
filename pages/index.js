import { useEffect } from 'react'
import { useMintCountContext } from '../context/ContextProvider'
import FadeIn from 'react-fade-in'
import Router from 'next/router'

const Home = () => {
  const [mintCount] = useMintCountContext()

  useEffect(() => {
    if (mintCount === 0) {
      Router.push('/mint')
    }
  })

  return (
    <FadeIn className="flex flex-col items-center justify-center w-screen h-screen">
      web3slinger
    </FadeIn>
  )
}

export default Home
