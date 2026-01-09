import { useEffect } from 'react'
import { Check, Moon, Sun, Laptop } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTheme } from '@/context/theme-provider'

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme()

  /* Update theme-color meta tag
   * when theme is updated */
  useEffect(() => {
    const themeColor = theme === 'dark' ? '#020817' : '#fff'
    const metaThemeColor = document.querySelector("meta[name='theme-color']")
    if (metaThemeColor) metaThemeColor.setAttribute('content', themeColor)
  }, [theme])

  return (
    <div className='dropdown dropdown-end'>
      <button
        type='button'
        className='btn btn-ghost btn-sm rounded-full'
        aria-label='Toggle theme'
      >
        <Sun className='size-4' />
      </button>
      <ul className='menu dropdown-content z-[1] mt-2 w-40 rounded-box bg-base-100 p-2 shadow'>
        <li>
          <button type='button' onClick={() => setTheme('light')}>
            <Sun className='size-4' />
            Light
            <Check
              size={14}
              className={cn('ms-auto', theme !== 'light' && 'hidden')}
            />
          </button>
        </li>
        <li>
          <button type='button' onClick={() => setTheme('dark')}>
            <Moon className='size-4' />
            Dark
            <Check
              size={14}
              className={cn('ms-auto', theme !== 'dark' && 'hidden')}
            />
          </button>
        </li>
        <li>
          <button type='button' onClick={() => setTheme('system')}>
            <Laptop className='size-4' />
            System
            <Check
              size={14}
              className={cn('ms-auto', theme !== 'system' && 'hidden')}
            />
          </button>
        </li>
      </ul>
    </div>
  )
}
