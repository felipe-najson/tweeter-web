import { Listbox, ListboxItem } from '@nextui-org/react'
import { BiImageAlt } from 'react-icons/bi'
import { FiHeart } from 'react-icons/fi'
import { MdOutlineModeComment } from 'react-icons/md'
import { TfiReload } from 'react-icons/tfi'

export default function ActionMenu() {
  return (
    <div className="hidden sm:block w-[340px] max-w-[400px] min-w-[250px] h-fit bg-white border-small p-2 px-4 rounded-small border-default-200 dark:border-default-100">
      <Listbox
        variant="solid"
        color="primary"
        aria-label="Listbox menu with icons"
      >
        <ListboxItem
          key="new"
          showDivider
          startContent={<MdOutlineModeComment />}
        >
          Tweets
        </ListboxItem>
        <ListboxItem key="tweets" showDivider startContent={<TfiReload />}>
          Tweets & replies
        </ListboxItem>
        <ListboxItem key="media" showDivider startContent={<BiImageAlt />}>
          Media
        </ListboxItem>
        <ListboxItem key="likes" startContent={<FiHeart />}>
          Likes
        </ListboxItem>
      </Listbox>
    </div>
  )
}
