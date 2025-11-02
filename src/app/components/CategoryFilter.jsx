'use client';
export default function CategoryFilter({ value, setValue }) {
  const categories = ['', 'Electronics', 'Furniture', 'Accessories'];

  return (
    <select
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="border p-2 rounded"
    >
      <option value="">All Categories</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}