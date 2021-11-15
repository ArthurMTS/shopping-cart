import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({});

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (cart.length === 0 && localStorage.getItem('cart')) {
      const cartItems = JSON.parse(localStorage.getItem('cart'));

      setCart(cartItems);
    }

    if (cart.length > 0) localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  function addProduct(product) {
    const products = [...cart];

    if (products.some(prod => prod.id === product.id)) return;

    product.quantity = 1;

    products.push(product);

    setCart(products);
  }

  function removeProduct(id) {
    const products = [...cart];

    const filteredProducts = products.filter(product => product.id !== id);

    if (filteredProducts.length === 0) localStorage.clear();

    setCart(filteredProducts);
  }

  function changeQuantity(id, quantity) {
    const products = [...cart];

    const updatedProducts = products.map(product => {
      if (product.id === id) product.quantity = quantity;

      return product;
    });

    setCart(updatedProducts);
  }

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct, changeQuantity }} >
      {children}
    </CartContext.Provider>
  );
}