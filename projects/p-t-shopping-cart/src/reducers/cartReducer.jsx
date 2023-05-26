export const cartInitialState =
  JSON.parse(window.localStorage.getItem('cart')) || [];

export const ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
};

const updateLocalStorage = (state) => {
  return window.localStorage.setItem('cart', JSON.stringify(state));
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_CART: {
      const productCartIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (productCartIndex >= 0) {
        const newState = structuredClone(state);
        newState[productCartIndex].quantity += 1;
        updateLocalStorage(newState);
        return newState;
      }

      const newState = [
        ...state,
        {
          ...action.payload,
          quantity: 1,
        },
      ];

      updateLocalStorage(newState);
      return newState;
    }

    case ACTION_TYPES.REMOVE_FROM_CART: {
      const newState = state.filter(
        (product) => product.id !== action.payload.id
      );
      updateLocalStorage(newState);
      return newState;
    }

    case ACTION_TYPES.CLEAR_CART: {
      updateLocalStorage([]);
      return [];
    }

    default:
      return state;
  }
};
