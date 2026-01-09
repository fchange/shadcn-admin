import { ContentSection } from '../components/content-section'

export function SettingsAccount() {
  return (
    <ContentSection
      title='Account'
      desc='Update your account settings. Set your preferred language and timezone.'
    >
      <form className='space-y-4'>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Language</span>
          </label>
          <select className='select select-bordered'>
            <option>English</option>
            <option>Spanish</option>
            <option>Japanese</option>
          </select>
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Timezone</span>
          </label>
          <select className='select select-bordered'>
            <option>GMT-05:00</option>
            <option>GMT+01:00</option>
            <option>GMT+08:00</option>
          </select>
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
