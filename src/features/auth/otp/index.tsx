import { AuthLayout } from '../auth-layout'

export function Otp() {
  return (
    <AuthLayout>
      <div className='card bg-base-100 shadow'>
        <div className='card-body gap-4 text-center'>
          <div>
            <h2 className='text-lg font-semibold'>Enter OTP</h2>
            <p className='text-sm text-base-content/70'>
              We&apos;ve sent a one-time password to your email.
            </p>
          </div>
          <div className='flex justify-center gap-2'>
            {Array.from({ length: 6 }).map((_, index) => (
              <input
                key={index}
                className='input input-bordered w-10 text-center'
                placeholder='•'
              />
            ))}
          </div>
          <button type='button' className='btn btn-primary'>
            Verify
          </button>
        </div>
      </div>
    </AuthLayout>
  )
}
