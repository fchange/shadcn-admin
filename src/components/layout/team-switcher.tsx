import * as React from 'react'
import { ChevronsUpDown, Plus } from 'lucide-react'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

type TeamSwitcherProps = {
  teams: {
    name: string
    logo: React.ElementType
    plan: string
  }[]
}

export function TeamSwitcher({ teams }: TeamSwitcherProps) {
  const [activeTeam, setActiveTeam] = React.useState(teams[0])

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className='dropdown w-full'>
          <SidebarMenuButton
            asChild
            className='w-full justify-between rounded-lg bg-base-200/60 px-3 py-2'
          >
            <button type='button' className='w-full'>
              <div className='flex items-center gap-3'>
                <div className='flex size-8 items-center justify-center rounded-lg bg-primary text-primary-content'>
                  <activeTeam.logo className='size-4' />
                </div>
                <div className='grid flex-1 text-start text-sm leading-tight'>
                  <span className='truncate font-semibold'>
                    {activeTeam.name}
                  </span>
                  <span className='truncate text-xs text-base-content/70'>
                    {activeTeam.plan}
                  </span>
                </div>
                <ChevronsUpDown className='ms-auto size-4 opacity-70' />
              </div>
            </button>
          </SidebarMenuButton>
          <ul className='menu dropdown-content z-[1] mt-2 w-60 rounded-box bg-base-100 p-2 shadow'>
            <li className='menu-title text-xs'>Teams</li>
            {teams.map((team, index) => (
              <li key={team.name}>
                <button
                  type='button'
                  onClick={() => setActiveTeam(team)}
                  className='flex items-center gap-2'
                >
                  <span className='flex size-6 items-center justify-center rounded-md border border-base-200'>
                    <team.logo className='size-4 shrink-0' />
                  </span>
                  {team.name}
                  <span className='ms-auto text-xs text-base-content/60'>
                    ⌘{index + 1}
                  </span>
                </button>
              </li>
            ))}
            <li className='mt-1 border-t border-base-200 pt-1'>
              <button type='button' className='flex items-center gap-2'>
                <span className='flex size-6 items-center justify-center rounded-md border border-base-200'>
                  <Plus className='size-4' />
                </span>
                <span className='text-base-content/70'>Add team</span>
              </button>
            </li>
          </ul>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
