import useSound from 'use-sound'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const [playOn] = useSound('/sound/switch-on.mp3')
  const [playOff] = useSound('/sound/switch-off.mp3')

  const toggle = () => {
    if (theme === 'dark') {
      setTheme('light')
      playOn()
    } else {
      setTheme('dark')
      playOff()
    }
  }

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex items-center justify-center w-8 h-8 p-3 bg-gray-200 rounded-lg focus:outline-none bg-none dark:bg-gray-800"
      onClick={() => toggle()}
    >
      <div className="w-4 h-4 text-gray-800 dark:text-gray-200">
        {theme === 'light' ? <FiMoon /> : <FiSun />}
      </div>
    </button>
  )
}
