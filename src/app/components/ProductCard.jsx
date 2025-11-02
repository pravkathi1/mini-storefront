'use client';
export default function ProductCard({ product, addToCart }) {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p>${product.price}</p>
      <p className="text-sm text-gray-500">{product.category}</p>
      <p className={product.stock === 0 ? 'text-red-500' : 'text-green-500'}>
        {product.stock === 0 ? 'Out of stock' : `In stock: ${product.stock}`}
      </p>
      <button
        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded disabled:bg-gray-300"
        onClick={() => addToCart(product)}
        disabled={product.stock === 0}
      >
        Add to Cart
      </button>
    </div>
  );
}