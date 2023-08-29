import { NavbarItem, Link } from '@nextui-org/react'

interface Props {
  name: string
  path: string
  activeRoute: string
}

export default function NavLink({ name, path, activeRoute }: Props) {
  const isActive = path === activeRoute

  return (
    <NavbarItem isActive={isActive}>
      <Link
        color={isActive ? 'primary' : 'foreground'}
        href={path}
        className="text-sm"
      >
        {name}
      </Link>
    </NavbarItem>
  )
}
