'use client';
import { useState, useEffect } from 'react';
import ProductList from './ProductList';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import CartSummary from './CartSummary';
import StatusMessage from './StatusMessage';

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState('');
  const [maxPrice, setMaxPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

//fetch
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        setProducts(data);
        setFiltered(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // filter 
  useEffect(() => {
    let result = products;
    if (category) result = result.filter(p => p.category === category);
    if (maxPrice > 0) result = result.filter(p => p.price <= maxPrice);
    setFiltered(result);
  }, [category, maxPrice, products]);

  // Simulate stock updates
  useEffect(() => {
    const interval = setInterval(() => {
      setProducts(prev =>
        prev.map(p =>
          p.stock > 0 ? { ...p, stock: p.stock - 1 } : p
        )
      );
    }, 10000); // every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  const resetCart = () => setCart([]);

  if (loading) return <StatusMessage status="loading" />;
  if (error) return <StatusMessage status="error" />;
  if (filtered.length === 0) return <StatusMessage status="empty" />;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mini Storefront</h1>
      <div className="flex gap-4 mb-4">
        <CategoryFilter value={category} setValue={setCategory} />
        <PriceFilter value={maxPrice} setValue={setMaxPrice} />
      </div>
      <ProductList products={filtered} addToCart={addToCart} />
      <CartSummary cart={cart} resetCart={resetCart} />
    </div>
  );
}