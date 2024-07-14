import { Chip } from '@nextui-org/react';
import React from 'react';

const CategoryFilter = () => {
    const Categories = [
       
        {
            id: 1,
            name: "All"
        },
        {
            id: 2,
            name: "Productivity"
        },
        {
            id: 3,
            name: "Branding & Aesthetics"
        },
        {
            id: 4,
            name: "Entertainment"
        },
        {
            id: 5,
            name: "General"
        },
        {
            id: 6,
            name: "Other"
        },
    ]

    const handleFilter = () => {
        console.log("filtered by:" );
    }
    
    return (
        <>
            <div className='flex gap-2 flex-wrap justify-center font-light text-sm'>
                {Categories.map((category) => (
                    <Chip key={category.id} color="default" variant="bordered" size='md' onClick={handleFilter}>{category.name}</Chip>
                ))}
            </div>
        </>
    );
}

export default CategoryFilter;
