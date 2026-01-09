import { type ReactNode } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import { ChevronRight } from 'lucide-react'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from '@/components/ui/sidebar'
import { type NavCollapsible, type NavItem, type NavLink, type NavGroup as NavGroupProps } from './types'

export function NavGroup({ title, items }: NavGroupProps) {
  const { state, isMobile } = useSidebar()
  const href = useLocation({ select: (location) => location.href })

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const key = `${item.title}-${item.url}`

          if (!item.items) {
            return <SidebarMenuLink key={key} item={item} href={href} />
          }

          if (state === 'collapsed' && !isMobile) {
            return (
              <SidebarMenuCollapsedDropdown key={key} item={item} href={href} />
            )
          }

          return <SidebarMenuCollapsible key={key} item={item} href={href} />
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}

function NavBadge({ children }: { children: ReactNode }) {
  return (
    <span className='badge badge-sm ms-auto bg-base-200 text-xs'>
      {children}
    </span>
  )
}

function SidebarMenuLink({ item, href }: { item: NavLink; href: string }) {
  const { setOpenMobile } = useSidebar()
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        isActive={checkIsActive(href, item)}
        onClick={() => setOpenMobile(false)}
      >
        <Link to={item.url} className='w-full'>
          {item.icon && <item.icon className='size-4' />}
          <span>{item.title}</span>
          {item.badge && <NavBadge>{item.badge}</NavBadge>}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}

function SidebarMenuCollapsible({
  item,
  href,
}: {
  item: NavCollapsible
  href: string
}) {
  const { setOpenMobile } = useSidebar()

  return (
    <li className='collapse collapse-arrow bg-base-100'>
      <input type='checkbox' defaultChecked={checkIsActive(href, item, true)} />
      <div className='collapse-title p-0'>
        <SidebarMenuButton>
          {item.icon && <item.icon className='size-4' />}
          <span>{item.title}</span>
          {item.badge && <NavBadge>{item.badge}</NavBadge>}
          <ChevronRight className='ms-auto size-3 opacity-60' />
        </SidebarMenuButton>
      </div>
      <div className='collapse-content p-0'>
        <SidebarMenuSub>
          {item.items.map((subItem) => (
            <SidebarMenuSubItem key={subItem.title}>
              <SidebarMenuSubButton
                asChild
                isActive={checkIsActive(href, subItem)}
                onClick={() => setOpenMobile(false)}
              >
                <Link to={subItem.url} className='w-full'>
                  {subItem.icon && <subItem.icon className='size-4' />}
                  <span>{subItem.title}</span>
                  {subItem.badge && <NavBadge>{subItem.badge}</NavBadge>}
                </Link>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
          ))}
        </SidebarMenuSub>
      </div>
    </li>
  )
}

function SidebarMenuCollapsedDropdown({
  item,
  href,
}: {
  item: NavCollapsible
  href: string
}) {
  return (
    <SidebarMenuItem>
      <div className='dropdown dropdown-right w-full'>
        <SidebarMenuButton asChild isActive={checkIsActive(href, item)}>
          <button type='button' className='w-full'>
            {item.icon && <item.icon className='size-4' />}
            <span className='sr-only'>{item.title}</span>
          </button>
        </SidebarMenuButton>
        <ul className='menu dropdown-content z-[1] w-56 rounded-box bg-base-100 p-2 shadow'>
          <li className='menu-title text-xs'>{item.title}</li>
          {item.items.map((sub) => (
            <li key={`${sub.title}-${sub.url}`}>
              <Link
                to={sub.url}
                className={checkIsActive(href, sub) ? 'font-semibold' : ''}
              >
                {sub.icon && <sub.icon className='size-4' />}
                <span>{sub.title}</span>
                {sub.badge && <span className='ms-auto text-xs'>{sub.badge}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </SidebarMenuItem>
  )
}

function checkIsActive(href: string, item: NavItem, mainNav = false) {
  return (
    href === item.url ||
    href.split('?')[0] === item.url ||
    !!item?.items?.filter((i) => i.url === href).length ||
    (mainNav &&
      href.split('/')[1] !== '' &&
      href.split('/')[1] === item?.url?.split('/')[1])
  )
}
