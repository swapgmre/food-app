import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from "./ItemList"
import { clearCart } from '../utils/cartSlice';

const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className='text-center m-4 p-4'>
      <h1 className='text-2xl font-bold'>Cart</h1>
      <div className='w-6/12 m-auto'>
        <button className='p-2 m-2 bg-black text-white rounded-lg' onClick={handleClearCart}>Clear Cart</button>
        {cartItems.length === 0 && <h1 className='font-semibold'>Your Cart is Empty. Please add items to your Cart!</h1>}
        <ItemList items={cartItems} onRemoveItem={handleRemoveItem} />
      </div>
    </div>
  )
}

export default Cart
