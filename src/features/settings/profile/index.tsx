import { ContentSection } from '../components/content-section'

export function SettingsProfile() {
  return (
    <ContentSection
      title='Profile'
      desc='This is how others will see you on the site.'
    >
      <form className='space-y-4'>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Username</span>
          </label>
          <input className='input input-bordered' placeholder='shadcn' />
          <p className='text-xs text-base-content/60'>
            This is your public display name.
          </p>
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Email</span>
          </label>
          <select className='select select-bordered'>
            <option>m@example.com</option>
            <option>m@google.com</option>
            <option>m@support.com</option>
          </select>
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Bio</span>
          </label>
          <textarea
            className='textarea textarea-bordered'
            placeholder='Tell us about yourself'
          />
        </div>
        <div className='flex gap-2'>
          <button type='button' className='btn btn-ghost'>
            Cancel
          </button>
          <button type='button' className='btn btn-primary'>
            Save changes
          </button>
        </div>
      </form>
    </ContentSection>
  )
}
