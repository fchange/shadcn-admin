import { useNavigate, useLocation } from '@tanstack/react-router'
import { useAuthStore } from '@/stores/auth-store'

interface SignOutDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SignOutDialog({ open, onOpenChange }: SignOutDialogProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const { auth } = useAuthStore()

  const handleSignOut = () => {
    auth.reset()
    const currentPath = location.href
    navigate({
      to: '/sign-in',
      search: { redirect: currentPath },
      replace: true,
    })
  }

  return (
    <div className={`modal ${open ? 'modal-open' : ''}`}>
      <div className='modal-box'>
        <h3 className='text-lg font-semibold'>Sign out</h3>
        <p className='mt-2 text-sm text-base-content/70'>
          Are you sure you want to sign out? You will need to sign in again to
          access your account.
        </p>
        <div className='modal-action'>
          <button
            type='button'
            className='btn btn-ghost'
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </button>
          <button
            type='button'
            className='btn btn-error'
            onClick={() => {
              onOpenChange(false)
              handleSignOut()
            }}
          >
            Sign out
          </button>
        </div>
      </div>
      <button
        type='button'
        className='modal-backdrop'
        onClick={() => onOpenChange(false)}
        aria-label='Close sign out modal'
      />
    </div>
  )
}
