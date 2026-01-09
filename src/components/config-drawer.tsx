import { useState } from 'react'
import { Settings } from 'lucide-react'
import { useLayout } from '@/context/layout-provider'
import { useTheme } from '@/context/theme-provider'
import { useSidebar } from '@/components/ui/sidebar'

export function ConfigDrawer() {
  const { setOpen } = useSidebar()
  const { theme, setTheme } = useTheme()
  const { collapsible, setCollapsible, variant, setVariant, resetLayout } =
    useLayout()
  const [open, setOpenState] = useState(false)

  const handleReset = () => {
    setOpen(true)
    setTheme('system')
    resetLayout()
  }

  return (
    <div className='drawer drawer-end'>
      <input
        id='config-drawer'
        type='checkbox'
        className='drawer-toggle'
        checked={open}
        onChange={(event) => setOpenState(event.target.checked)}
      />
      <div className='drawer-content'>
        <label
          htmlFor='config-drawer'
          className='btn btn-ghost btn-sm rounded-full'
          aria-label='Open theme settings'
        >
          <Settings className='size-4' />
        </label>
      </div>
      <div className='drawer-side z-50'>
        <label htmlFor='config-drawer' className='drawer-overlay' />
        <div className='menu min-h-full w-80 bg-base-100 p-4'>
          <div className='mb-4'>
            <h3 className='text-lg font-semibold'>Theme Settings</h3>
            <p className='text-sm text-base-content/70'>
              Adjust the appearance and layout to suit your preferences.
            </p>
          </div>
          <div className='space-y-6'>
            <div className='space-y-2'>
              <p className='text-xs font-semibold uppercase text-base-content/60'>
                Theme
              </p>
              <div className='grid grid-cols-3 gap-2'>
                {['system', 'light', 'dark'].map((value) => (
                  <button
                    key={value}
                    type='button'
                    className={`btn btn-sm ${theme === value ? 'btn-primary' : 'btn-outline'}`}
                    onClick={() => setTheme(value as typeof theme)}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
            <div className='space-y-2'>
              <p className='text-xs font-semibold uppercase text-base-content/60'>
                Sidebar
              </p>
              <div className='grid grid-cols-3 gap-2'>
                {(['icon', 'offcanvas', 'none'] as const).map((value) => (
                  <button
                    key={value}
                    type='button'
                    className={`btn btn-sm ${collapsible === value ? 'btn-primary' : 'btn-outline'}`}
                    onClick={() => setCollapsible(value)}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
            <div className='space-y-2'>
              <p className='text-xs font-semibold uppercase text-base-content/60'>
                Layout
              </p>
              <div className='grid grid-cols-3 gap-2'>
                {(['inset', 'floating', 'sidebar'] as const).map((value) => (
                  <button
                    key={value}
                    type='button'
                    className={`btn btn-sm ${variant === value ? 'btn-primary' : 'btn-outline'}`}
                    onClick={() => setVariant(value)}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className='mt-6'>
            <button
              type='button'
              className='btn btn-error btn-sm w-full'
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
