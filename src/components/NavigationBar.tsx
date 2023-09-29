import {
  Navbar,
  NavbarBrand,
  Image,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  NavbarMenuToggle,
  NavbarContent,
  Divider,
} from '@nextui-org/react'
import TweeterLogo from '../assets/tweeter-logo.svg'
import { useNavigate } from 'react-router-dom'
import Navigator from './Navigator'
import ProfileDropdown from './ProfileDropdown'
import { useState } from 'react'
import useAuthenticatedUser from '../hooks/useAuthenticatedUser'
import { BiBookmarks, BiHomeAlt2, BiNews, BiUserCircle } from 'react-icons/bi'

export default function NavigationBar() {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { data: user } = useAuthenticatedUser()

  const navItems = [
    {
      name: 'Home',
      ref: '/',
      icon: <BiHomeAlt2 />
    },
    {
      name: 'Explore',
      ref: '/explore',
      icon: <BiNews />
    },
    {
      name: 'Bookmark',
      ref: '/bookmark',
      icon: <BiBookmarks />
    },
    {
      name: 'Profile',
      ref: `/profile/${user?.id}`,
      icon: <BiUserCircle />
    }
  ]

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-white shadow-sm"
      classNames={{
        item: [
          'flex',
          'flex-row',
          'relative',
          'h-full',
          'items-center',
          "data-[active=true]:after:content-['']",
          'data-[active=true]:after:absolute',
          'data-[active=true]:after:bottom-0',
          'data-[active=true]:after:left-0',
          'data-[active=true]:after:right-0',
          'data-[active=true]:after:h-[2px]',
          'data-[active=true]:after:rounded-[2px]',
          'data-[active=true]:after:bg-primary',
        ],
      }}
    >
      <NavbarBrand
        as={'button'}
        onClick={() => {
          navigate('/')
        }}
      >
        <Image src={TweeterLogo} width={40} />
        <p className="font-extrabold text-inherit ml-2">Tweeter</p>
      </NavbarBrand>

      <Navigator navItems={navItems} />

      <ProfileDropdown />

      <NavbarContent justify='end' className='sm:hidden'>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarMenu className="flex flex-col gap-6 p-8">
        {navItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              color="foreground"
              className="w-full font-light flex flex-row gap-4"
              href={item.ref}
              size="lg"
            >
              {item.icon}
              {item.name}
            </Link>
            <Divider className='mt-1'/>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
