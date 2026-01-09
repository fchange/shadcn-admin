import { useState } from 'react'
import { useLocation, useNavigate, Link } from '@tanstack/react-router'
import { cn } from '@/lib/utils'

type SidebarNavProps = React.HTMLAttributes<HTMLElement> & {
  items: {
    href: string
    title: string
    icon: React.ReactNode
  }[]
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [val, setVal] = useState(pathname ?? '/settings')

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setVal(event.target.value)
    navigate({ to: event.target.value })
  }

  return (
    <>
      <div className='p-1 md:hidden'>
        <select
          className='select select-bordered w-full'
          value={val}
          onChange={handleSelect}
        >
          {items.map((item) => (
            <option key={item.href} value={item.href}>
              {item.title}
            </option>
          ))}
        </select>
      </div>

      <nav
        className={cn(
          'hidden w-full min-w-40 flex-col gap-1 rounded-box border border-base-200 bg-base-100 p-2 md:flex',
          className
        )}
        {...props}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              'flex items-center gap-2 rounded-btn px-3 py-2 text-sm',
              pathname === item.href
                ? 'bg-base-200 font-medium'
                : 'hover:bg-base-200'
            )}
          >
            <span className='text-base-content/70'>{item.icon}</span>
            {item.title}
          </Link>
        ))}
      </nav>
    </>
  )
}
