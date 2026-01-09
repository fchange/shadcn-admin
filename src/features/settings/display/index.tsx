import { ContentSection } from '../components/content-section'

export function SettingsDisplay() {
  return (
    <ContentSection
      title='Display'
      desc="Turn items on or off to control what's displayed in the app."
    >
      <form className='space-y-4'>
        <div className='form-control'>
          <label className='label cursor-pointer justify-between'>
            <span className='label-text'>Show sidebar shortcuts</span>
            <input type='checkbox' className='toggle' defaultChecked />
          </label>
        </div>
        <div className='form-control'>
          <label className='label cursor-pointer justify-between'>
            <span className='label-text'>Compact tables</span>
            <input type='checkbox' className='toggle' />
          </label>
        </div>
        <div className='form-control'>
          <label className='label cursor-pointer justify-between'>
            <span className='label-text'>Enable animation</span>
            <input type='checkbox' className='toggle' defaultChecked />
          </label>
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
