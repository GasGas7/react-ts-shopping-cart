export type ShoppingCartProviderProps = {
  children: React.ReactNode;
};

export type CartItem = {
  id: number;
  quantity: number;
};

export type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuntity: (id: number) => void;
  decreaseCartQuntity: (id: number) => void;
  removeFromCart: (id: number) => void;
};
