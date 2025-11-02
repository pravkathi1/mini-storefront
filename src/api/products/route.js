export async function GET() {
  const products = [
    { id: 'p1', name: 'Laptop', price: 1200, category: 'Electronics', stock: 5 },
    { id: 'p2', name: 'Desk Chair', price: 150, category: 'Furniture', stock: 3 },
    { id: 'p3', name: 'Phone', price: 900, category: 'Electronics', stock: 4 },
    { id: 'p4', name: 'Coffee Table', price: 250, category: 'Furniture', stock: 2 },
    { id: 'p5', name: 'Headphones', price: 100, category: 'Electronics', stock: 6 },
    { id: 'p6', name: 'Backpack', price: 60, category: 'Accessories', stock: 10 },
    { id: 'p7', name: 'Desk Lamp', price: 40, category: 'Furniture', stock: 7 },
    { id: 'p8', name: 'Smart Watch', price: 300, category: 'Electronics', stock: 5 },
  ];
  return Response.json(products);
}