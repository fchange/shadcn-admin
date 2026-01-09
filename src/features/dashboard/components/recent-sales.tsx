export function RecentSales() {
  return (
    <div className='space-y-8'>
      <div className='flex items-center gap-4'>
        <div className='avatar'>
          <div className='w-9 rounded-full'>
            <img src='/avatars/01.png' alt='Avatar' />
          </div>
        </div>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-sm leading-none font-medium'>Olivia Martin</p>
            <p className='text-sm text-base-content/60'>
              olivia.martin@email.com
            </p>
          </div>
          <div className='font-medium'>+$1,999.00</div>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <div className='avatar'>
          <div className='w-9 rounded-full'>
            <img src='/avatars/02.png' alt='Avatar' />
          </div>
        </div>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-sm leading-none font-medium'>Jackson Lee</p>
            <p className='text-sm text-base-content/60'>
              jackson.lee@email.com
            </p>
          </div>
          <div className='font-medium'>+$39.00</div>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <div className='avatar'>
          <div className='w-9 rounded-full'>
            <img src='/avatars/03.png' alt='Avatar' />
          </div>
        </div>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-sm leading-none font-medium'>Isabella Nguyen</p>
            <p className='text-sm text-base-content/60'>
              isabella.nguyen@email.com
            </p>
          </div>
          <div className='font-medium'>+$299.00</div>
        </div>
      </div>

      <div className='flex items-center gap-4'>
        <div className='avatar'>
          <div className='w-9 rounded-full'>
            <img src='/avatars/04.png' alt='Avatar' />
          </div>
        </div>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-sm leading-none font-medium'>William Kim</p>
            <p className='text-sm text-base-content/60'>will@email.com</p>
          </div>
          <div className='font-medium'>+$99.00</div>
        </div>
      </div>

      <div className='flex items-center gap-4'>
        <div className='avatar'>
          <div className='w-9 rounded-full'>
            <img src='/avatars/05.png' alt='Avatar' />
          </div>
        </div>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-sm leading-none font-medium'>Sofia Davis</p>
            <p className='text-sm text-base-content/60'>
              sofia.davis@email.com
            </p>
          </div>
          <div className='font-medium'>+$39.00</div>
        </div>
      </div>
    </div>
  )
}
