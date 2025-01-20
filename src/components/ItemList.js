import React from 'react'
import { CDN_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from "../utils/cartSlice"

const ItemList = ({ items }) => {

  // console.log("Items received in ItemList:", items);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch and action
    console.log("Dispatching item:", item); // Check what you're sending to Redux
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => <div data-testid="foodItems" key={item.card.info.id} className='p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between'>
        <div className='w-9/12'>
          <div className='py-2'>
            <span>{item?.card?.info?.name}</span>
            <span className='font-bold'> - ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100
            }</span >
          </div>
          <p className='text-xs'>{item?.card?.info?.
            description
          } </p>
        </div>
        <div className='w-3/12 p-4'>
          <div className='absolute'>
            <button className='w-16 h-12 p-2 mx-10 bg-black text-white rounded-lg shadow-lg absolute' onClick={() => handleAddItem(item)}
            >Add +</button>
          </div>
          <img src={CDN_URL + item?.card?.info?.imageId} />
        </div>

      </div >)
      }
    </div >
  )
}

export default ItemList
