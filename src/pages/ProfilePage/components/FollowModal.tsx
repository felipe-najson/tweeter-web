import { Modal, ModalContent, ModalHeader, ModalBody } from '@nextui-org/react'
import type User from '../../../entities/User'

interface Props {
  isOpen: boolean
  onClose: () => void
  userList: User[]
  title: string
}

export default function FollowModal({ isOpen, onClose, userList, title }: Props) {
  return (
    <Modal
      size="md"
      backdrop="blur"
      isOpen={isOpen}
      onClose={onClose}
      scrollBehavior="outside"
      placement="bottom"
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
        <ModalBody className="pb-4">
          {userList?.map(user => (
            <div key={user.id} className="flex flex-row gap-2 items-center">
              <img
                src={user.image}
                alt="user photo"
                className="w-8 h-8 rounded-full"
              />
              <p className="text-md">{user.name}</p>
            </div>
          ))}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
