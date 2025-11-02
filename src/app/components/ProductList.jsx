'use client';
import ProductCard from './ProductCard';

export default function ProductList({ products, addToCart }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map(p => (
        <ProductCard key={p.id} product={p} addToCart={addToCart} />
      ))}
    </div>
  );
}