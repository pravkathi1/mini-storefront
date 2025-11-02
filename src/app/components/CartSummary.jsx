'use client';
export default function CartSummary({ cart, resetCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="mt-6 border-t pt-4">
      <h2 className="text-xl font-semibold">Cart Summary</h2>
      <p>Total Items: {cart.length}</p>
      <p>Total Price: ${total.toFixed(2)}</p>
      <button
        className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
        onClick={resetCart}
      >
        Reset Cart
      </button>
    </div>
  );
}
