import { Link } from '@tanstack/react-router'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'

type TopNavProps = React.HTMLAttributes<HTMLElement> & {
  links: {
    title: string
    href: string
    isActive: boolean
    disabled?: boolean
  }[]
}

export function TopNav({ className, links, ...props }: TopNavProps) {
  return (
    <>
      <div className='dropdown lg:hidden'>
        <div tabIndex={0} role='button' className='btn btn-ghost btn-sm'>
          <Menu className='size-4' />
        </div>
        <ul
          tabIndex={0}
          className='menu dropdown-content z-[1] mt-2 w-48 rounded-box bg-base-100 p-2 shadow'
        >
          {links.map(({ title, href, isActive, disabled }) => (
            <li key={`${title}-${href}`}>
              <Link
                to={href}
                className={cn(!isActive && 'text-base-content/70')}
                disabled={disabled}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <nav
        className={cn(
          'hidden items-center gap-4 lg:flex xl:gap-6',
          className
        )}
        {...props}
      >
        {links.map(({ title, href, isActive, disabled }) => (
          <Link
            key={`${title}-${href}`}
            to={href}
            disabled={disabled}
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              !isActive && 'text-base-content/70'
            )}
          >
            {title}
          </Link>
        ))}
      </nav>
    </>
  )
}
