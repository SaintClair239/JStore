import { useContext } from 'react';
import CartContext from '../context/CartContext';
import CartProducts from './CartProducts';

const Cart = () => {
  const { cartState } = useContext(CartContext);
  const isCartEmpty = cartState.includes('Your cart is empty!');

  const initialValue = 0;

  const totalAmount = cartState.reduce(
    (previousValue, currentValue) => previousValue + currentValue.total,
    initialValue
  );

  return (
    <div className='bg-white w-full p-4 rounded-xl'>
      <div className='flex justify-between border-b-2 pb-2'>
        <p className='font-bold'>Your items</p>
        <p className='font-bold'>
          Total: ${isCartEmpty ? 0 : totalAmount.toFixed(2)}
        </p>
      </div>

      {isCartEmpty ? (
        <h1>Your cart is empty!</h1>
      ) : (
        cartState.map(prod => {
          return <CartProducts key={prod.id} prod={prod} />;
        })
      )}
    </div>
  );
};

export default Cart;
