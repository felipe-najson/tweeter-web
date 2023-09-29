import { NavbarContent } from '@nextui-org/react'
import { useLocation } from 'react-router-dom'
import NavLink from './NavLink'

export default function Navigator({ navItems }: { navItems: any[] }) {
  const { pathname } = useLocation()

  return (
    <NavbarContent className="hidden sm:flex gap-10" justify="center">
      {navItems.map((item: any, index: number) => (
        <NavLink
          key={index}
          name={item.name}
          path={item.ref}
          activeRoute={pathname}
        />
      ))}
    </NavbarContent>
  )
}
