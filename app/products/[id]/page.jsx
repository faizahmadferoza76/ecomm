"use client";
import products from "@/app/data/products.json";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/Context/CartContext";

export default function ProductDetail({ params }) {
  const router = useRouter();
  const { addToCart } = useCart();

  const id = params.id;
  const product = products.find((p) => String(p.id) === String(id));

  if (!product) {
    return <h1>No product found for id: {id}</h1>;
  }

  const handleAddToCart = (item) => {
    addToCart(item);
    router.push("/Cart");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <p className="flex flex-row font-bold text-lg justify-center">
        Product Detail Page
      </p>
      <div className="flex flex-col bg-white p-4 rounded-lg shadow">
        <img
          src={product.image}
          alt={product.title}
          className="w-30 h-40 object-cover rounded"
        />
        <p className="font-bold text-lg">{product.title}</p>
        <p className="text-sm line-clamp-2">{product.description}</p>
        <p className="font-bold text-lg">${Number(product.price).toFixed(2)}</p>
        <button
          className="bg-blue-500 text-white px-2 py-2 rounded hover:bg-blue-600"
          onClick={() => handleAddToCart(product)}
      
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
