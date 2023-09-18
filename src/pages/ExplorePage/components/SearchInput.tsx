import { Button, Input } from '@nextui-org/react'
import { FiSearch } from 'react-icons/fi'

export default function SearchInput() {
  return (
    <Input
      classNames={{
        base: 'max-w-full',
        inputWrapper: 'h-full font-normal text-default-500 bg-white',
      }}
      placeholder="Type to search..."
      size="sm"
      startContent={<FiSearch size={18} />}
      endContent={
        <Button size="sm" color="primary" className="my-1">
          Search
        </Button>
      }
      type="search"
    />
  )
}
