import { Link } from '@tanstack/react-router'
import useDialogState from '@/hooks/use-dialog-state'
import { SignOutDialog } from '@/components/sign-out-dialog'

export function ProfileDropdown() {
  const [open, setOpen] = useDialogState()

  return (
    <>
      <div className='dropdown dropdown-end'>
        <button type='button' className='btn btn-ghost btn-sm rounded-full'>
          <div className='avatar'>
            <div className='w-8 rounded-full'>
              <img src='/avatars/01.png' alt='@shadcn' />
            </div>
          </div>
        </button>
        <ul className='menu dropdown-content z-[1] mt-2 w-56 rounded-box bg-base-100 p-2 shadow'>
          <li className='menu-title text-xs'>Account</li>
          <li>
            <Link to='/settings'>Profile</Link>
          </li>
          <li>
            <Link to='/settings'>Billing</Link>
          </li>
          <li>
            <Link to='/settings'>Settings</Link>
          </li>
          <li>
            <button type='button' onClick={() => setOpen(true)}>
              Sign out
            </button>
          </li>
        </ul>
      </div>

      <SignOutDialog open={!!open} onOpenChange={setOpen} />
    </>
  )
}
