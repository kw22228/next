import { createContext, useCallback, useContext, useState } from 'react';

const CartContext = createContext({
  cart: {},
  fn: {
    registerCart: () => {},
  },
});

const CartContextPrvoider = ({ children }) => {
  const [cart, setCart] = useState({});
  const registerCart = useCallback(newCart => setCart(...newCart), []);

  return (
    <CartContext.Provider value={{ cart, fn: { registerCart } }}>{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  const { cart } = useContext(CartContext);

  return cart;
};

export const useCartFn = () => {
  const { fn } = useContext(CartContext);

  return fn.registerCart;
};

export default CartContextPrvoider;
