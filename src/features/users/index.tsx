import { useMemo, useState } from 'react'
import { ConfigDrawer } from '@/components/config-drawer'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { users } from './data/users'

export function Users() {
  const [openInvite, setOpenInvite] = useState(false)
  const [openFilter, setOpenFilter] = useState(false)
  const visibleUsers = useMemo(() => users.slice(0, 8), [])

  return (
    <>
      <Header fixed>
        <Search />
        <div className='ms-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <ConfigDrawer />
          <ProfileDropdown />
        </div>
      </Header>

      <Main className='flex flex-1 flex-col gap-4 sm:gap-6'>
        <div className='flex flex-wrap items-end justify-between gap-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>User List</h2>
            <p className='text-base-content/70'>
              Manage your users and their roles here.
            </p>
          </div>
          <div className='flex flex-wrap gap-2'>
            <button
              type='button'
              className='btn btn-outline btn-sm'
              onClick={() => setOpenFilter(true)}
            >
              Filters
            </button>
            <button
              type='button'
              className='btn btn-primary btn-sm'
              onClick={() => setOpenInvite(true)}
            >
              Invite User
            </button>
          </div>
        </div>
        <div className='overflow-x-auto rounded-box border border-base-200'>
          <table className='table'>
            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Status</th>
                <th>Company</th>
                <th>Joined</th>
              </tr>
            </thead>
            <tbody>
              {visibleUsers.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className='flex items-center gap-3'>
                      <div className='avatar'>
                        <div className='w-8 rounded-full'>
                          <img src='/avatars/01.png' alt={user.firstName} />
                        </div>
                      </div>
                      <div>
                        <div className='font-medium'>
                          {user.firstName} {user.lastName}
                        </div>
                        <div className='text-xs text-base-content/60'>
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{user.role}</td>
                  <td>
                    <span className='badge badge-outline'>{user.status}</span>
                  </td>
                  <td>Acme Inc.</td>
                  <td>{user.createdAt.toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Main>

      <div className={`modal ${openInvite ? 'modal-open' : ''}`}>
        <div className='modal-box'>
          <h3 className='text-lg font-semibold'>Invite user</h3>
          <p className='mt-2 text-sm text-base-content/70'>
            Send an invitation to a new teammate.
          </p>
          <div className='mt-4 space-y-3'>
            <input
              className='input input-bordered w-full'
              placeholder='Email address'
            />
            <select className='select select-bordered w-full'>
              <option>Admin</option>
              <option>Editor</option>
              <option>Viewer</option>
            </select>
          </div>
          <div className='modal-action'>
            <button
              type='button'
              className='btn btn-ghost'
              onClick={() => setOpenInvite(false)}
            >
              Cancel
            </button>
            <button
              type='button'
              className='btn btn-primary'
              onClick={() => setOpenInvite(false)}
            >
              Send Invite
            </button>
          </div>
        </div>
        <button
          type='button'
          className='modal-backdrop'
          onClick={() => setOpenInvite(false)}
          aria-label='Close invite modal'
        />
      </div>

      <div className={`modal ${openFilter ? 'modal-open' : ''}`}>
        <div className='modal-box'>
          <h3 className='text-lg font-semibold'>Filter users</h3>
          <p className='mt-2 text-sm text-base-content/70'>
            Narrow down the list by role or status.
          </p>
          <div className='mt-4 space-y-3'>
            <select className='select select-bordered w-full'>
              <option>All roles</option>
              <option>Admin</option>
              <option>Editor</option>
              <option>Viewer</option>
            </select>
            <select className='select select-bordered w-full'>
              <option>All statuses</option>
              <option>Active</option>
              <option>Pending</option>
              <option>Suspended</option>
            </select>
          </div>
          <div className='modal-action'>
            <button
              type='button'
              className='btn btn-ghost'
              onClick={() => setOpenFilter(false)}
            >
              Close
            </button>
            <button
              type='button'
              className='btn btn-primary'
              onClick={() => setOpenFilter(false)}
            >
              Apply Filters
            </button>
          </div>
        </div>
        <button
          type='button'
          className='modal-backdrop'
          onClick={() => setOpenFilter(false)}
          aria-label='Close filter modal'
        />
      </div>
    </>
  )
}
