import toast from 'react-hot-toast'
import { useTheme } from 'next-themes'
import { FiTwitter, FiGithub, FiMail } from 'react-icons/fi'
import { ThemeSwitcher } from './ThemeSwitcher'
import { SocialData } from '../../data/socials'

export const Navbar = () => {
  const { theme } = useTheme()

  const copyEmail = () => {
    navigator.clipboard.writeText(SocialData.EMAIL)
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
          href={SocialData.TWITTER}
          target="_blank"
          className="px-4 py-2.5 cursor-pointer hover:text-indigo-800"
          rel="noreferrer"
        >
          <FiTwitter />
        </a>
        <a
          href={SocialData.GITHUB}
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
      <ThemeSwitcher />
    </nav>
  )
}
