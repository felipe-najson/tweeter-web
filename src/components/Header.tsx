import { Navbar, NavbarBrand, Image } from '@nextui-org/react'
import TweeterLogo from '../assets/tweeter-logo.svg'
import { useNavigate } from 'react-router-dom'
import Navigator from './Navigator'
import ProfileDropdown from './ProfileDropdown'

export default function Header() {
  const navigate = useNavigate()

  return (
    <Navbar
      className="bg-white shadow-sm"
      classNames={{
        item: [
          'flex',
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
      <Navigator />
      <ProfileDropdown />
    </Navbar>
  )
}
