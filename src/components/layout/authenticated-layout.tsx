import { Outlet } from '@tanstack/react-router'
import { getCookie } from '@/lib/cookies'
import { cn } from '@/lib/utils'
import { LayoutProvider } from '@/context/layout-provider'
import { SearchProvider } from '@/context/search-provider'
import { SidebarInset, SidebarProvider, useSidebar } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/layout/app-sidebar'
import { SkipToMain } from '@/components/skip-to-main'

type AuthenticatedLayoutProps = {
  children?: React.ReactNode
}

export function AuthenticatedLayout({ children }: AuthenticatedLayoutProps) {
  const defaultOpen = getCookie('sidebar_state') !== 'false'
  return (
    <SearchProvider>
      <LayoutProvider>
        <SidebarProvider defaultOpen={defaultOpen}>
          <SkipToMain />
          <AuthenticatedShell>{children ?? <Outlet />}</AuthenticatedShell>
        </SidebarProvider>
      </LayoutProvider>
    </SearchProvider>
  )
}

function AuthenticatedShell({ children }: { children: React.ReactNode }) {
  const { openMobile, setOpenMobile } = useSidebar()

  return (
    <div className='drawer lg:drawer-open'>
      <input
        id='app-drawer'
        type='checkbox'
        className='drawer-toggle'
        checked={openMobile}
        onChange={(event) => setOpenMobile(event.target.checked)}
      />
      <div className='drawer-content'>
        <SidebarInset
          className={cn(
            '@container/content',
            'has-data-[layout=fixed]:h-svh'
          )}
        >
          {children}
        </SidebarInset>
      </div>
      <div className='drawer-side z-40'>
        <label htmlFor='app-drawer' className='drawer-overlay' />
        <AppSidebar />
      </div>
    </div>
  )
}
