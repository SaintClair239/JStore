import { useReducer, createContext } from 'react';

const CartContext = createContext(['Your cart is empty!']);

const CartReducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
  }
};

export const CartContextProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(CartReducer, [
    'Your cart is empty!',
  ]);
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
