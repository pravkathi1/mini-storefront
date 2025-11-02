'use client';
export default function PriceFilter({ value, setValue }) {
  return (
    <div>
      <label className="block text-sm font-medium">Max Price: ${value}</label>
      <input
        type="range"
        min="0"
        max="1500"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full"
      />
    </div>
  );
}