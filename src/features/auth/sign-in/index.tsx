import { useState } from 'react'
import { useSearch, useNavigate } from '@tanstack/react-router'
import { AuthLayout } from '../auth-layout'
import { useAuthStore } from '@/stores/auth-store'

export function SignIn() {
  const { redirect } = useSearch({ from: '/(auth)/sign-in' })
  const navigate = useNavigate()
  const { auth } = useAuthStore()
  const [loading, setLoading] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    const formData = new FormData(event.currentTarget)
    const email = String(formData.get('email') || '')

    setTimeout(() => {
      auth.setUser({
        accountNo: 'ACC001',
        email,
        role: ['user'],
        exp: Date.now() + 24 * 60 * 60 * 1000,
      })
      auth.setAccessToken('mock-access-token')
      navigate({ to: redirect || '/', replace: true })
      setLoading(false)
    }, 800)
  }

  return (
    <AuthLayout>
      <div className='card bg-base-100 shadow'>
        <div className='card-body gap-4'>
          <div>
            <h2 className='text-lg font-semibold'>Sign in</h2>
            <p className='text-sm text-base-content/70'>
              Enter your email and password below to log into your account.
            </p>
          </div>
          <form className='space-y-3' onSubmit={handleSubmit}>
            <input
              name='email'
              type='email'
              placeholder='name@example.com'
              className='input input-bordered w-full'
              required
            />
            <input
              name='password'
              type='password'
              placeholder='********'
              className='input input-bordered w-full'
              required
            />
            <button type='submit' className='btn btn-primary w-full'>
              {loading ? 'Signing in…' : 'Sign in'}
            </button>
            <div className='divider text-xs'>Or continue with</div>
            <div className='grid grid-cols-2 gap-2'>
              <button type='button' className='btn btn-outline btn-sm'>
                GitHub
              </button>
              <button type='button' className='btn btn-outline btn-sm'>
                Facebook
              </button>
            </div>
          </form>
          <p className='text-center text-xs text-base-content/60'>
            By clicking sign in, you agree to our Terms of Service and Privacy
            Policy.
          </p>
        </div>
      </div>
    </AuthLayout>
  )
}
