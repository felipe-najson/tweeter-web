import { Modal, ModalContent, ModalHeader, ModalBody } from '@nextui-org/react'
import type User from '../entities/User'

interface Props {
  isOpen: boolean
  onClose: () => void
  likes: User[]
}

export default function LikesModal({ isOpen, onClose, likes }: Props) {
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
        <ModalHeader className="flex flex-col gap-1">Likes</ModalHeader>
        <ModalBody className="pb-4">
          {likes?.map(like => (
            <div key={like.id} className="flex flex-row gap-2 items-center">
              <img
                src={like.image}
                alt="user photo"
                className="w-8 h-8 rounded-full"
              />
              <p className="text-md">{like.name}</p>
            </div>
          ))}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
