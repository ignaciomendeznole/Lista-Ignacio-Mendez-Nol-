export type ShoppingItemProps = {
  shoppingItem: string;
  deleteProduct: (productName: string) => void;
};

export type ShoppingList = {
  items: string[];
};
