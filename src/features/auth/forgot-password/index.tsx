import { Link } from '@tanstack/react-router'
import { AuthLayout } from '../auth-layout'

export function ForgotPassword() {
  return (
    <AuthLayout>
      <div className='card bg-base-100 shadow'>
        <div className='card-body gap-4'>
          <div>
            <h2 className='text-lg font-semibold'>Forgot password</h2>
            <p className='text-sm text-base-content/70'>
              We&apos;ll send you a reset link if the email exists.
            </p>
          </div>
          <form className='space-y-3'>
            <input
              type='email'
              placeholder='name@example.com'
              className='input input-bordered w-full'
            />
            <button type='button' className='btn btn-primary w-full'>
              Send reset link
            </button>
          </form>
          <Link to='/sign-in' className='link link-primary text-sm'>
            Back to sign in
          </Link>
        </div>
      </div>
    </AuthLayout>
  )
}
