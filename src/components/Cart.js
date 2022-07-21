import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Cart = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(Boolean(currentUser));
  return <div>Cart</div>;
};

export default Cart;
