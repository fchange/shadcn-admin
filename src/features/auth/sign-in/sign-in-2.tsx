import { Logo } from '@/assets/logo'
import dashboardLight from './assets/dashboard-light.png'

export function SignIn2() {
  return (
    <div className='min-h-svh lg:grid lg:grid-cols-2'>
      <div className='flex flex-col justify-center px-6 py-12 lg:px-12'>
        <div className='mb-8 flex items-center gap-2'>
          <Logo />
          <span className='text-xl font-semibold'>Shadcn Admin</span>
        </div>
        <div className='card bg-base-100 shadow'>
          <div className='card-body gap-4'>
            <div>
              <h2 className='text-lg font-semibold'>Sign in</h2>
              <p className='text-sm text-base-content/70'>
                Enter your email and password below to log into your account.
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
                Sign in
              </button>
            </form>
            <p className='text-center text-xs text-base-content/60'>
              By clicking sign in, you agree to our Terms of Service and Privacy
              Policy.
            </p>
          </div>
        </div>
      </div>
      <div className='hidden bg-base-200 lg:flex lg:items-center lg:justify-center'>
        <div className='p-8'>
          <img
            src={dashboardLight}
            width={1024}
            height={1151}
            alt='Admin preview'
            className='rounded-box shadow-lg'
          />
        </div>
      </div>
    </div>
  )
}
