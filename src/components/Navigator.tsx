import { NavbarContent } from '@nextui-org/react'
import { useLocation } from 'react-router-dom'
import NavLink from './NavLink'

export default function Navigator() {
  const { pathname } = useLocation()

  console.log(pathname)
  return (
    <NavbarContent className="hidden sm:flex gap-10" justify="center">
      <NavLink name="Home" activeRoute={pathname} path={'/'} />
      <NavLink name="Explore" activeRoute={pathname} path={'/explore'} />
      <NavLink name="Bookmark" activeRoute={pathname} path={'/bookmark'} />
    </NavbarContent>
  )
}
