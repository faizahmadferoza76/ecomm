"use client";
import Link from "next/link";
import products from "@/app/data/products.json"; // ✅ default import for JSON

export default function Products() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">🛍️ Product List</h1>
        <Link
          href="/Cart"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-pink-700"
        >
          View Cart
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <Link
            key={item.id}
            href={`/products/${item.id}`}
            className="border rounded-lg shadow p-4 flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-40 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold text-center line-clamp-1">
              {item.title}
            </h2>
            <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
            <p className="mt-2 font-bold">Price: Rs.{item.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
