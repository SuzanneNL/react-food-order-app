import React from "react";

const CartContext = React.createContext({
  // default data:
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: (id) => {},
});

export default CartContext;
