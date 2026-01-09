import { Link } from '@tanstack/react-router'
import { AuthLayout } from '../auth-layout'

export function SignUp() {
  return (
    <AuthLayout>
      <div className='card bg-base-100 shadow'>
        <div className='card-body gap-4'>
          <div>
            <h2 className='text-lg font-semibold'>Create an account</h2>
            <p className='text-sm text-base-content/70'>
              Enter your email and password to create an account. Already have
              an account?{' '}
              <Link to='/sign-in' className='link link-primary'>
                Sign In
              </Link>
            </p>
          </div>
          <form className='space-y-3'>
            <input
              type='email'
              placeholder='name@example.com'
              className='input input-bordered w-full'
            />
            <input
              type='password'
              placeholder='********'
              className='input input-bordered w-full'
            />
            <button type='button' className='btn btn-primary w-full'>
              Create account
            </button>
          </form>
          <p className='text-center text-xs text-base-content/60'>
            By creating an account, you agree to our Terms of Service and
            Privacy Policy.
          </p>
        </div>
      </div>
    </AuthLayout>
  )
}
