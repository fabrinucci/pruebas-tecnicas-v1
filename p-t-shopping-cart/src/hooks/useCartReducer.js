import { useReducer } from 'react';
import {
  ACTION_TYPES,
  cartReducer,
  cartInitialState as initialState,
} from '../reducers/cartReducer';

export const useCartReducer = () => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({
      type: ACTION_TYPES.ADD_TO_CART,
      payload: product,
    });
  };

  const removeFromCart = (product) => {
    dispatch({
      type: ACTION_TYPES.REMOVE_FROM_CART,
      payload: product,
    });
  };

  const clearCart = () => {
    dispatch({ type: ACTION_TYPES.CLEAR_CART });
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  };
};
