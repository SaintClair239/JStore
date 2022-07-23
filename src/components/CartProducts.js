import { useContext } from 'react';
import CartContext from '../context/CartContext';

const CartProducts = ({ prod }) => {
  const decreseQuantityHandler = () => {
    if (prod.quantity === 1) {
      cartDispatch({ type: 'REMOVE_ITEM', payload: prod });
    } else {
      cartDispatch({ type: 'DECREASE_QUANTITY', payload: prod });
    }
  };

  const addToCartHandler = () => {
    cartDispatch({
      type: 'ADD_TO_CART',
      payload: prod,
    });
  };

  const removeItemHandler = () => {
    cartDispatch({ type: 'REMOVE_ITEM', payload: prod });
  };

  const { cartDispatch } = useContext(CartContext);
  return (
    <div className='w-full py-2 border-y-2 my-4 flex text-xs'>
      <div className='w-1/3 h-40 mr-2 flex items-center '>
        <img
          className='w-full h-full object-contain'
          src={prod.thumbnail}
          alt=''
        />
      </div>
      <div className='w-2/3 flex flex-col justify-evenly items-start'>
        <h1 className=' text-slate-600 uppercase font-bold max-w-full text-ellipsis overflow-hidden whitespace-nowrap'>
          {prod.name}
        </h1>
        <p className='text-slate-400'>${prod.price}</p>
        <p className='font-bold text-slate-900'>{`x${prod.quantity} $${
          prod.quantity * prod.price
        }`}</p>
        <div className='flex w-full justify-between'>
          <div className='border-2 flex items-center py-1 px-2 rounded-md'>
            <button onClick={decreseQuantityHandler}>-</button>
            <p className='mx-2'>{prod.quantity}</p>
            <button onClick={addToCartHandler}>+</button>
          </div>
          <button
            className='uppercase border-2 px-2 border-slate-200 rounded-xl'
            onClick={removeItemHandler}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
