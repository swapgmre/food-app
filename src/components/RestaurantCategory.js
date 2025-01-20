import React from 'react'
import ItemList from './ItemList';

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

  const handleClick = () => {
    console.log("data.itemCards inside RestaurantCategory:", data.itemCards);
    setShowIndex();
  }

  return (
    <div>
      {/* Header Section*/}
      <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4'>
        <div className='flex justify-between cursor-pointer' onClick={handleClick}>
          <span className='font-bold text-lg'>{data.title} ({data.itemCards.length})</span>
          <span className=''>🔽</span>
        </div>
        {showItems && < ItemList items={data.itemCards} />}

      </div>
    </div>
  )
}

export default RestaurantCategory
