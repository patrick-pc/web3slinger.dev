import { useState } from 'react'
import NextLink from 'next/link'
import FadeIn from 'react-fade-in'

const Home = () => {
  const [mintCount, setMintCount] = useState(0)
  const [isMinting, setIsMinting] = useState(false)

  const mint = () => {
    setIsMinting(true)
    setTimeout(() => {
      setMintCount(mintCount + 1)
      setIsMinting(false)
    }, 2000)
  }

  return (
    <FadeIn className="flex flex-col items-center justify-center w-screen h-screen">
      <h1 className="mb-2 text-4xl font-medium">gm ☕️</h1>
      <h2 className="mb-2">{mintCount}/1</h2>
      {mintCount === 0 ? (
        <button
          className="px-8 py-2 transition duration-300 ease-in-out border border-gray-500 rounded hover:scale-110"
          onClick={mint}
          disabled={isMinting}
        >
          {isMinting ? 'Minting...' : 'Mint spidΞy'}
        </button>
      ) : (
        <NextLink href="/about">
          <button
            className="px-8 py-2 transition duration-300 ease-in-out border border-gray-500 rounded hover:scale-110"
            onClick={mint}
            disabled={isMinting}
          >
            View NFT
          </button>
        </NextLink>
      )}
    </FadeIn>
  )
}

export default Home
