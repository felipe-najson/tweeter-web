import { Button, Input } from '@nextui-org/react'
import { FiSearch } from 'react-icons/fi'

interface Props {
  handleSearch: () => void
  search: string
  setSearch: (value:string) => void
}

export default function SearchInput({handleSearch, search, setSearch}: Props) {

  return (
    <Input
      classNames={{
        base: 'max-w-full',
        inputWrapper: 'h-full font-normal text-default-500 bg-white',
      }}
      value={search}
      onValueChange={setSearch}
      placeholder="Type to search..."
      size="sm"
      startContent={<FiSearch size={18} />}
      endContent={
        <Button size="sm" color="primary" className="my-1" onClick={handleSearch}>
          Search
        </Button>
      }
      type="search"
    />
  )
}
