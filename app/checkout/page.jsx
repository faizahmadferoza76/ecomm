"use client";
import { useCart } from "../Context/CartContext";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart, total, updateQty, removeFromCart } = useCart();

  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.address) {
      alert("⚠️ Please fill all fields!");
      return;
    }

    // Simulate order
    const order = {
      customer: form,
      items: cart,
      total,
    };

    console.log("✅ Order Placed:", order);
    alert("🎉 Order placed successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Summary */}
          <div className="lg:col-span-2 bg-pink p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <ul className="divide-y">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center py-3"
                >
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-gray-500">
                      ${item.price} × {item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      ✕
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-center font-bold text-lg">
              Total: ${total.toFixed(2)}
            </div>
          </div>

          {/* Checkout Form */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-6">Billing Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border p-5 rounded"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border p-2 rounded"
              />
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Shipping Address"
                className="w-lg border p-2 rounded"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
