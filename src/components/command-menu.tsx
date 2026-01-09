import { useMemo, useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { Laptop, Moon, SearchIcon, Sun } from 'lucide-react'
import { useSearch } from '@/context/search-provider'
import { useTheme } from '@/context/theme-provider'
import { sidebarData } from './layout/data/sidebar-data'

export function CommandMenu() {
  const navigate = useNavigate()
  const { setTheme } = useTheme()
  const { open, setOpen } = useSearch()
  const [query, setQuery] = useState('')

  const items = useMemo(() => {
    const rawItems = sidebarData.navGroups.flatMap((group) =>
      group.items.flatMap((navItem) => {
        if (navItem.url) {
          return [{ title: navItem.title, url: navItem.url }]
        }
        return (
          navItem.items?.map((sub) => ({
            title: `${navItem.title} / ${sub.title}`,
            url: sub.url,
          })) ?? []
        )
      })
    )

    return rawItems.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    )
  }, [query])

  return (
    <div className={`modal ${open ? 'modal-open' : ''}`}>
      <div className='modal-box'>
        <div className='flex items-center gap-2'>
          <SearchIcon className='size-4 text-base-content/60' />
          <input
            type='text'
            placeholder='Type a command or search...'
            className='input input-bordered input-sm w-full'
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div className='mt-4 space-y-2'>
          <p className='text-xs font-semibold uppercase text-base-content/60'>
            Navigation
          </p>
          <ul className='menu rounded-box bg-base-200/40'>
            {items.length === 0 && (
              <li className='px-2 py-1 text-sm text-base-content/60'>
                No results found.
              </li>
            )}
            {items.map((item) => (
              <li key={item.url}>
                <button
                  type='button'
                  onClick={() => {
                    setOpen(false)
                    navigate({ to: item.url })
                  }}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className='mt-4 space-y-2'>
          <p className='text-xs font-semibold uppercase text-base-content/60'>
            Theme
          </p>
          <div className='flex flex-wrap gap-2'>
            <button
              type='button'
              className='btn btn-outline btn-sm'
              onClick={() => setTheme('light')}
            >
              <Sun className='size-4' />
              Light
            </button>
            <button
              type='button'
              className='btn btn-outline btn-sm'
              onClick={() => setTheme('dark')}
            >
              <Moon className='size-4' />
              Dark
            </button>
            <button
              type='button'
              className='btn btn-outline btn-sm'
              onClick={() => setTheme('system')}
            >
              <Laptop className='size-4' />
              System
            </button>
          </div>
        </div>
        <div className='modal-action'>
          <button
            type='button'
            className='btn btn-ghost btn-sm'
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>
      </div>
      <button
        type='button'
        className='modal-backdrop'
        onClick={() => setOpen(false)}
        aria-label='Close search modal'
      />
    </div>
  )
}
