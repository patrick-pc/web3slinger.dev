import { useState } from 'react'
import { useMintCountContext } from '../context/ContextProvider'
import FadeIn from 'react-fade-in'
import NextLink from 'next/link'
import { GenericMeta } from '../components/GenericMeta'

const Mint = () => {
  const [mintCount, setMintCount] = useMintCountContext()
  const [isMinting, setIsMinting] = useState(false)

  const mint = () => {
    setIsMinting(true)
    setTimeout(() => {
      setMintCount(1)
      setIsMinting(false)
    }, 2000)
  }

  return (
    <>
      <GenericMeta title="web3slinger.dev | mint" description="Mint web3slinger." />

      <FadeIn className="flex flex-col items-center justify-center w-screen h-screen">
        <h1 className="mb-2 text-4xl font-medium">gm ☕️</h1>
        <h2 className="mb-2 text-lg">{mintCount}/1</h2>
        {mintCount === 0 ? (
          <button
            className="px-8 py-2 transition duration-300 ease-in-out border border-gray-500 rounded hover:scale-110"
            onClick={mint}
            disabled={isMinting}
          >
            {isMinting ? 'Minting...' : 'Mint'}
          </button>
        ) : (
          <NextLink href="/">
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
    </>
  )
}

export default Mint
