import { useState } from 'react'
import { useTheme } from 'next-themes'
import { useMintCountContext } from '../context/ContextProvider'
import { GenericMeta } from '../components/GenericMeta'
import { Orbit } from '@uiball/loaders'
import FadeIn from 'react-fade-in'
import NextLink from 'next/link'

const Mint = () => {
  const { theme } = useTheme()
  const [mintCount, setMintCount] = useMintCountContext()
  const [isMinting, setIsMinting] = useState(false)

  const mint = () => {
    setIsMinting(true)
    setTimeout(() => {
      setMintCount(1)
      setIsMinting(false)
    }, 1500)
  }

  return (
    <>
      <GenericMeta title="web3slinger.dev | mint" description="Mint web3slinger." />

      <FadeIn className="flex flex-col items-center justify-center w-screen h-screen">
        <h1 className="mb-2 text-4xl font-medium">Gm ☕️</h1>
        <h2 className="mb-2 text-lg">{mintCount}/1</h2>
        {mintCount === 0 ? (
          isMinting ? (
            <div className="px-8 py-1">
              <Orbit size={34} color={theme === 'dark' ? '#ffffff' : '#000000'} />
            </div>
          ) : (
            <button
              className="px-8 py-2 border border-gray-300 dark:border-gray-800 rounded-md focus:outline-none transition duration-300 ease-in-out transform hover:scale-110 w-36"
              onClick={mint}
              disabled={isMinting}
            >
              Mint
            </button>
          )
        ) : (
          <NextLink href="/">
            <button
              className="px-8 py-2 border border-gray-300 dark:border-gray-800 rounded-md focus:outline-none transition duration-300 ease-in-out transform hover:scale-110 w-36"
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
