import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { PanelLeftIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useIsMobile } from '@/hooks/use-mobile'

const SIDEBAR_COOKIE_NAME = 'sidebar_state'
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7

type SidebarContextProps = {
  state: 'expanded' | 'collapsed'
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContextProps | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider.')
  }
  return context
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}) {
  const isMobile = useIsMobile()
  const [openMobile, setOpenMobile] = React.useState(false)
  const [_open, _setOpen] = React.useState(defaultOpen)
  const open = openProp ?? _open

  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === 'function' ? value(open) : value
      if (setOpenProp) {
        setOpenProp(openState)
      } else {
        _setOpen(openState)
      }
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
    },
    [setOpenProp, open]
  )

  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((val) => !val) : setOpen((val) => !val)
  }, [isMobile, setOpen, setOpenMobile])

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'b' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        toggleSidebar()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [toggleSidebar])

  const state = open ? 'expanded' : 'collapsed'

  const contextValue = React.useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  )

  return (
    <SidebarContext value={contextValue}>
      <div className={cn('flex min-h-svh w-full', className)} {...props}>
        {children}
      </div>
    </SidebarContext>
  )
}

function Sidebar({
  className,
  children,
  ...props
}: React.ComponentProps<'aside'>) {
  const { state } = useSidebar()
  return (
    <aside
      className={cn(
        'flex h-svh flex-col border-r border-base-200 bg-base-100',
        state === 'collapsed' ? 'w-16' : 'w-64',
        className
      )}
      {...props}
    >
      {children}
    </aside>
  )
}

function SidebarTrigger({
  className,
  onClick,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      type='button'
      className={cn('btn btn-ghost btn-sm', className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeftIcon className='size-4' />
      <span className='sr-only'>Toggle Sidebar</span>
    </button>
  )
}

function SidebarRail({ className, ...props }: React.ComponentProps<'button'>) {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      type='button'
      aria-label='Toggle Sidebar'
      onClick={toggleSidebar}
      className={cn(
        'absolute inset-y-0 -right-2 hidden w-4 items-center justify-center lg:flex',
        className
      )}
      {...props}
    >
      <span className='h-12 w-[2px] rounded-full bg-base-300' />
    </button>
  )
}

function SidebarInset({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('flex min-h-svh w-full flex-col', className)} {...props} />
  )
}

function SidebarHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('px-3 py-4', className)} {...props} />
}

function SidebarContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('flex-1 overflow-y-auto px-2', className)} {...props} />
  )
}

function SidebarFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('px-2 py-4', className)} {...props} />
}

function SidebarGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('mb-4', className)} {...props} />
}

function SidebarGroupLabel({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const { state } = useSidebar()
  return (
    <div
      className={cn(
        'px-2 text-xs font-semibold uppercase text-base-content/60',
        state === 'collapsed' && 'sr-only',
        className
      )}
      {...props}
    />
  )
}

function SidebarMenu({ className, ...props }: React.ComponentProps<'ul'>) {
  return <ul className={cn('menu menu-sm', className)} {...props} />
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<'li'>) {
  return <li className={cn('relative', className)} {...props} />
}

function SidebarMenuButton({
  asChild = false,
  isActive = false,
  className,
  children,
  ...props
}: React.ComponentProps<'button'> & {
  asChild?: boolean
  isActive?: boolean
}) {
  const { state } = useSidebar()
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={cn(
        'flex items-center gap-2 rounded-btn px-2 py-2 text-sm',
        isActive ? 'bg-base-200 font-semibold' : 'hover:bg-base-200',
        state === 'collapsed' && 'justify-center',
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

function SidebarMenuSub({ className, ...props }: React.ComponentProps<'ul'>) {
  return <ul className={cn('menu menu-xs ms-4', className)} {...props} />
}

function SidebarMenuSubItem({
  className,
  ...props
}: React.ComponentProps<'li'>) {
  return <li className={className} {...props} />
}

function SidebarMenuSubButton({
  asChild = false,
  isActive = false,
  className,
  children,
  ...props
}: React.ComponentProps<'button'> & {
  asChild?: boolean
  isActive?: boolean
}) {
  const { state } = useSidebar()
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={cn(
        'flex items-center gap-2 rounded-btn px-2 py-1 text-xs',
        isActive ? 'bg-base-200 font-semibold' : 'hover:bg-base-200',
        state === 'collapsed' && 'justify-center',
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
}
