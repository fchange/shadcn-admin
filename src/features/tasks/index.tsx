import { useMemo, useState } from 'react'
import { ConfigDrawer } from '@/components/config-drawer'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { tasks } from './data/tasks'

export function Tasks() {
  const [openCreate, setOpenCreate] = useState(false)
  const [openImport, setOpenImport] = useState(false)
  const visibleTasks = useMemo(() => tasks.slice(0, 8), [])

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
            <h2 className='text-2xl font-bold tracking-tight'>Tasks</h2>
            <p className='text-base-content/70'>
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <div className='flex flex-wrap gap-2'>
            <button
              type='button'
              className='btn btn-outline btn-sm'
              onClick={() => setOpenImport(true)}
            >
              Import
            </button>
            <button
              type='button'
              className='btn btn-primary btn-sm'
              onClick={() => setOpenCreate(true)}
            >
              New Task
            </button>
          </div>
        </div>
        <div className='overflow-x-auto rounded-box border border-base-200'>
          <table className='table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Assignee</th>
                <th>Due</th>
              </tr>
            </thead>
            <tbody>
              {visibleTasks.map((task) => (
                <tr key={task.id}>
                  <td className='font-mono text-xs'>{task.id}</td>
                  <td>{task.title}</td>
                  <td>
                    <span className='badge badge-outline'>{task.status}</span>
                  </td>
                  <td>
                    <span className='badge badge-ghost'>{task.priority}</span>
                  </td>
                  <td>{task.assignee}</td>
                  <td>{task.dueDate.toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Main>

      <div className={`modal ${openCreate ? 'modal-open' : ''}`}>
        <div className='modal-box'>
          <h3 className='text-lg font-semibold'>Create task</h3>
          <p className='mt-2 text-sm text-base-content/70'>
            This is a demo form for creating a new task.
          </p>
          <div className='mt-4 space-y-3'>
            <input className='input input-bordered w-full' placeholder='Title' />
            <textarea
              className='textarea textarea-bordered w-full'
              placeholder='Description'
            />
          </div>
          <div className='modal-action'>
            <button
              type='button'
              className='btn btn-ghost'
              onClick={() => setOpenCreate(false)}
            >
              Cancel
            </button>
            <button
              type='button'
              className='btn btn-primary'
              onClick={() => setOpenCreate(false)}
            >
              Save Task
            </button>
          </div>
        </div>
        <button
          type='button'
          className='modal-backdrop'
          onClick={() => setOpenCreate(false)}
          aria-label='Close create task modal'
        />
      </div>

      <div className={`modal ${openImport ? 'modal-open' : ''}`}>
        <div className='modal-box'>
          <h3 className='text-lg font-semibold'>Import tasks</h3>
          <p className='mt-2 text-sm text-base-content/70'>
            Drop a CSV file here to populate your tasks list.
          </p>
          <div className='mt-4'>
            <input type='file' className='file-input file-input-bordered w-full' />
          </div>
          <div className='modal-action'>
            <button
              type='button'
              className='btn btn-ghost'
              onClick={() => setOpenImport(false)}
            >
              Close
            </button>
            <button
              type='button'
              className='btn btn-primary'
              onClick={() => setOpenImport(false)}
            >
              Start Import
            </button>
          </div>
        </div>
        <button
          type='button'
          className='modal-backdrop'
          onClick={() => setOpenImport(false)}
          aria-label='Close import tasks modal'
        />
      </div>
    </>
  )
}
