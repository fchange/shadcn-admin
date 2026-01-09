import { Link } from '@tanstack/react-router'
import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from 'lucide-react'
import useDialogState from '@/hooks/use-dialog-state'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { SignOutDialog } from '@/components/sign-out-dialog'

type NavUserProps = {
  user: {
    name: string
    email: string
    avatar: string
  }
}

export function NavUser({ user }: NavUserProps) {
  const [open, setOpen] = useDialogState()

  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <div className='dropdown dropup w-full'>
            <SidebarMenuButton
              asChild
              className='w-full justify-between rounded-lg bg-base-200/60 px-3 py-2'
            >
              <button type='button' className='w-full'>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='w-8 rounded-lg'>
                      <img src={user.avatar} alt={user.name} />
                    </div>
                  </div>
                  <div className='grid flex-1 text-start text-sm leading-tight'>
                    <span className='truncate font-semibold'>{user.name}</span>
                    <span className='truncate text-xs text-base-content/70'>
                      {user.email}
                    </span>
                  </div>
                  <ChevronsUpDown className='ms-auto size-4 opacity-70' />
                </div>
              </button>
            </SidebarMenuButton>
            <ul className='menu dropdown-content z-[1] mb-2 w-60 rounded-box bg-base-100 p-2 shadow'>
              <li className='menu-title text-xs'>Account</li>
              <li>
                <button type='button' className='flex items-center gap-2'>
                  <Sparkles className='size-4' />
                  Upgrade to Pro
                </button>
              </li>
              <li className='mt-1 border-t border-base-200 pt-1'>
                <Link to='/settings/account' className='flex items-center gap-2'>
                  <BadgeCheck className='size-4' />
                  Account
                </Link>
              </li>
              <li>
                <Link to='/settings' className='flex items-center gap-2'>
                  <CreditCard className='size-4' />
                  Billing
                </Link>
              </li>
              <li>
                <Link
                  to='/settings/notifications'
                  className='flex items-center gap-2'
                >
                  <Bell className='size-4' />
                  Notifications
                </Link>
              </li>
              <li className='mt-1 border-t border-base-200 pt-1'>
                <button
                  type='button'
                  className='flex items-center gap-2 text-error'
                  onClick={() => setOpen(true)}
                >
                  <LogOut className='size-4' />
                  Sign out
                </button>
              </li>
            </ul>
          </div>
        </SidebarMenuItem>
      </SidebarMenu>

      <SignOutDialog open={!!open} onOpenChange={setOpen} />
    </>
  )
}
