'use client';
export default function StatusMessage({ status }) {
  const messages = {
    loading: 'Loading products...',
    error: 'Error loading products. Please try again.',
    empty: 'No products found.',
  };

  return (
    <div className="p-6 text-center text-gray-600">
      {messages[status] || 'Unknown status'}
    </div>
  );
}