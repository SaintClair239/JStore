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

  const { cartDispatch } = useContext(CartContext);
  return (
    <div className='w-full py-2 border-y-2 my-4 flex text-xs'>
      <div className='w-1/3 mr-2 flex items-center'>
        <img src={prod.thumbnail} alt='' />
      </div>
      <div className='w-2/3 flex flex-col justify-evenly items-start'>
        <h1 className='uppercase  max-w-full text-ellipsis overflow-hidden whitespace-nowrap'>
          {prod.name}
        </h1>
        <p>${prod.price}</p>
        <p>{`x${prod.quantity} $${prod.quantity * prod.price}`}</p>
        <div className='flex w-full justify-between'>
          <div className='border-2 flex items-center py-1 px-2 rounded-md'>
            <button onClick={decreseQuantityHandler}>-</button>
            <p className='mx-2'>{prod.quantity}</p>
            <button
              onClick={() => {
                cartDispatch({
                  type: 'ADD_TO_CART',
                  payload: prod,
                });
              }}
            >
              +
            </button>
          </div>
          <button
            onClick={() => {
              cartDispatch({ type: 'REMOVE_ITEM', payload: prod });
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
