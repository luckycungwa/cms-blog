import { Button, Input } from '@nextui-org/react';
import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  const handleSearch = () => {
    console.log('searching');
    
  }


    return (
        <div className='mb-4 w-full lg:w-auto flex gap-2'>
            
      <Input
        // label="Search"
        isClearable
        radius="lg"
        classNames={{
         
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focus=true]:bg-default-200/50",
            "dark:group-data-[focus=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        placeholder="Search..."
        startContent={
          <FiSearch
            size={16}/>
        }
      />
      <Button color="primary" onClick={handleSearch} auto>
      Search
    </Button>
        </div>
    );
}

export default SearchBar;
