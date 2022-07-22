import { useReducer, createContext } from 'react';
import { db } from '../firebase/firebase-config';
import { set, ref } from 'firebase/database';

const CartContext = createContext(['Your cart is empty!']);

const CartReducer = (state, action) => {
  if (action.type === 'UPDATE_STATE') {
  }

  if (action.type === 'SET_CART_STATE') {
    return [...action.payload];
  }
  if (action.type === 'ADD_TO_CART') {
    if (state.includes('Your cart is empty!')) {
      return [
        {
          ...action.payload,
          quantity: 1,
          total: action.payload.price,
        },
      ];
    }

    const isDuplicate = product => product.id === action.payload.id;
    const duplicateIndex = state.findIndex(isDuplicate);
    if (duplicateIndex > -1) {
      const updatedItem = {
        ...state[duplicateIndex],
        quantity: state[duplicateIndex].quantity + 1,
      };
      const updatedItemWithTotal = {
        ...updatedItem,
        total: updatedItem.quantity * action.payload.price,
      };
      const updatedItems = [...state];
      updatedItems[duplicateIndex] = updatedItemWithTotal;
      return [...updatedItems];
    }

    return [
      ...state,
      { ...action.payload, quantity: 1, total: action.payload.price },
    ];
  }

  if (action.type === 'DECREASE_QUANTITY') {
    const isDuplicate = product => product.id === action.payload.id;
    const duplicateIndex = state.findIndex(isDuplicate);
    if (duplicateIndex > -1) {
      const updatedItem = {
        ...state[duplicateIndex],
        quantity: state[duplicateIndex].quantity - 1,
      };
      const updatedItemWithTotal = {
        ...updatedItem,
        total: updatedItem.quantity * action.payload.price,
      };
      const updatedItems = [...state];
      updatedItems[duplicateIndex] = updatedItemWithTotal;
      return [...updatedItems];
    }
  }

  if (action.type === 'REMOVE_ITEM') {
    const updatedItems = state.filter(item => item.id !== action.payload.id);
    if (state.length === 1) {
      return ['Your cart is empty!'];
    }

    return [...updatedItems];
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
