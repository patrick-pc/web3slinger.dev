import toast from 'react-hot-toast'
import { useTheme } from 'next-themes'
import { FiTwitter, FiGithub, FiMail } from 'react-icons/fi'
import { ThemeSwitcher } from './ThemeSwitcher'

export const Navbar = () => {
  const TWITTER_URL = 'https://twitter.com/web3slinger'
  const GITHUB_URL = 'https://github.com/web3slinger'
  const EMAIL = 'web3slinger@gmail.com'

  const { theme } = useTheme()

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL)
    theme === 'dark'
      ? toast.success('Copied email to clipboard!', {
          style: {
            background: '#333',
            color: '#fff',
          },
        })
      : toast.success('Copied email to clipboard!')
  }

  return (
    <nav className="flex items-center justify-between w-full max-w-4xl pr-4 mx-auto my-20 z-99">
      <div className="flex text-xl">
        <a
          href={TWITTER_URL}
          target="_blank"
          className="px-4 py-2.5 cursor-pointer hover:text-indigo-800"
          rel="noreferrer"
        >
          <FiTwitter />
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          className="px-4 py-2.5 cursor-pointer hover:text-indigo-800"
          rel="noreferrer"
        >
          <FiGithub />
        </a>
        <a onClick={() => copyEmail()} className="px-4 py-2.5 cursor-pointer hover:text-indigo-800">
          <FiMail />
        </a>
      </div>
      <div className="flex ml-auto">
        <ThemeSwitcher />
      </div>
    </nav>
  )
}
