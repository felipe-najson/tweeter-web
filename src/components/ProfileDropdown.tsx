import {
  NavbarContent,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'
import { BiLogOut, BiSolidUserCircle } from 'react-icons/bi'
import { IoMdSettings } from 'react-icons/io'
import useUser from '../hooks/useUser'
import useAuthStore from '../store'
import { decodeToken } from '../utils/jwt'

export default function ProfileDropdown() {
  const navigate = useNavigate()
  const { token, removeToken } = useAuthStore()
  const decoded = decodeToken(token)
  const { data: user } = useUser(decoded?.id ?? "")

  return (
    <NavbarContent as="div" justify="end">
      <Dropdown placement="bottom-end">
        <div className="flex gap-3 items-center">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="primary"
              name={user?.name}
              size="sm"
              radius="sm"
              src={user?.image}
            />
          </DropdownTrigger>
          <p className="text-sm text-bold">{user?.name}</p>
        </div>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">{user?.email}</p>
          </DropdownItem>
          <DropdownItem
            key="settings"
            onClick={() => {
              navigate(`/profile/${decoded?.id}`)
            }}
            startContent={<BiSolidUserCircle />}
          >
            My Profile
          </DropdownItem>
          <DropdownItem key="help_and_feedback" startContent={<IoMdSettings />}>
            Settings
          </DropdownItem>
          <DropdownItem onClick={() => {
              removeToken()
              navigate('/login')
            }} startContent={<BiLogOut />} key="logout" color="danger" >
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </NavbarContent>
  )
}
