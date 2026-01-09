import { ContentSection } from '../components/content-section'

export function SettingsNotifications() {
  return (
    <ContentSection
      title='Notifications'
      desc='Configure how you receive notifications.'
    >
      <form className='space-y-4'>
        <div className='form-control'>
          <label className='label cursor-pointer justify-between'>
            <span className='label-text'>Product updates</span>
            <input type='checkbox' className='toggle' defaultChecked />
          </label>
        </div>
        <div className='form-control'>
          <label className='label cursor-pointer justify-between'>
            <span className='label-text'>Security alerts</span>
            <input type='checkbox' className='toggle' defaultChecked />
          </label>
        </div>
        <div className='form-control'>
          <label className='label cursor-pointer justify-between'>
            <span className='label-text'>Marketing emails</span>
            <input type='checkbox' className='toggle' />
          </label>
        </div>
        <div className='flex gap-2'>
          <button type='button' className='btn btn-ghost'>
            Cancel
          </button>
          <button type='button' className='btn btn-primary'>
            Save preferences
          </button>
        </div>
      </form>
    </ContentSection>
  )
}
