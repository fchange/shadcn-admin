import { ConfigDrawer } from '@/components/config-drawer'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { TopNav } from '@/components/layout/top-nav'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { Analytics } from './components/analytics'
import { Overview } from './components/overview'
import { RecentSales } from './components/recent-sales'

export function Dashboard() {
  return (
    <>
      {/* ===== Top Heading ===== */}
      <Header>
        <TopNav links={topNav} />
        <div className='ms-auto flex items-center space-x-4'>
          <Search />
          <ThemeSwitch />
          <ConfigDrawer />
          <ProfileDropdown />
        </div>
      </Header>

      {/* ===== Main ===== */}
      <Main>
        <div className='mb-2 flex items-center justify-between space-y-2'>
          <h1 className='text-2xl font-bold tracking-tight'>Dashboard</h1>
          <div className='flex items-center space-x-2'>
            <button type='button' className='btn btn-primary btn-sm'>
              Download
            </button>
          </div>
        </div>
        <div role='tablist' className='tabs tabs-bordered'>
          <a role='tab' className='tab tab-active'>
            Overview
          </a>
          <a role='tab' className='tab'>
            Analytics
          </a>
          <a role='tab' className='tab tab-disabled'>
            Reports
          </a>
          <a role='tab' className='tab tab-disabled'>
            Notifications
          </a>
        </div>
        <div className='mt-4 space-y-4'>
          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            {[
              {
                title: 'Total Revenue',
                value: '$45,231.89',
                change: '+20.1% from last month',
              },
              {
                title: 'Subscriptions',
                value: '+2350',
                change: '+180.1% from last month',
              },
              {
                title: 'Sales',
                value: '+12,234',
                change: '+19% from last month',
              },
              {
                title: 'Active Now',
                value: '+573',
                change: '+201 since last hour',
              },
            ].map((stat) => (
              <div key={stat.title} className='card bg-base-100 shadow'>
                <div className='card-body gap-1'>
                  <p className='text-sm text-base-content/70'>{stat.title}</p>
                  <p className='text-2xl font-bold'>{stat.value}</p>
                  <p className='text-xs text-base-content/60'>{stat.change}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='grid grid-cols-1 gap-4 lg:grid-cols-7'>
            <div className='card col-span-1 bg-base-100 shadow lg:col-span-4'>
              <div className='card-body'>
                <h3 className='card-title text-base'>Overview</h3>
                <div className='mt-2'>
                  <Overview />
                </div>
              </div>
            </div>
            <div className='card col-span-1 bg-base-100 shadow lg:col-span-3'>
              <div className='card-body'>
                <h3 className='card-title text-base'>Recent Sales</h3>
                <p className='text-sm text-base-content/70'>
                  You made 265 sales this month.
                </p>
                <div className='mt-4'>
                  <RecentSales />
                </div>
              </div>
            </div>
          </div>
          <div className='card bg-base-100 shadow'>
            <div className='card-body'>
              <h3 className='card-title text-base'>Analytics</h3>
              <Analytics />
            </div>
          </div>
        </div>
      </Main>
    </>
  )
}

const topNav = [
  {
    title: 'Overview',
    href: 'dashboard/overview',
    isActive: true,
    disabled: false,
  },
  {
    title: 'Customers',
    href: 'dashboard/customers',
    isActive: false,
    disabled: true,
  },
  {
    title: 'Products',
    href: 'dashboard/products',
    isActive: false,
    disabled: true,
  },
  {
    title: 'Settings',
    href: 'dashboard/settings',
    isActive: false,
    disabled: true,
  },
]
