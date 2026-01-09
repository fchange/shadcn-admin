import { ContentSection } from '../components/content-section'

export function SettingsAppearance() {
  return (
    <ContentSection
      title='Appearance'
      desc='Customize the appearance of the app. Automatically switch between day and night themes.'
    >
      <form className='space-y-4'>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Theme</span>
          </label>
          <div className='join'>
            <button type='button' className='btn join-item'>
              Light
            </button>
            <button type='button' className='btn join-item'>
              Dark
            </button>
            <button type='button' className='btn join-item'>
              System
            </button>
          </div>
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Font size</span>
          </label>
          <input type='range' min='12' max='18' className='range' />
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
