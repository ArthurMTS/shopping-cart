import React from 'react';

import { Routes } from './Routes';
import { CartProvider } from './contexts/cart';

import './global.css';

export function App() {
  return (
    <CartProvider>
      <Routes />
    </CartProvider>
  );
}
