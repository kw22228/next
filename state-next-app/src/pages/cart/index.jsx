import React from 'react';
import products from '../../data/cart.json';

export default function Cart() {
  return (
    <div>
      {products.items.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
