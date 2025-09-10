import React, { useState } from "react";
import { BackgroundGradient } from "../components/ui/background-gradient";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
// import Image from "next/image"; // Removed. Use <img> tag instead.

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);
  const [showToast, setShowToast] = React.useState(false);
  const wishlist = (window as any).store?.getState()?.wishlist?.items || [];
  const isWishlisted = wishlist.some((item: any) => item.productId === product.id);

  // Add to wishlist handler
  const handleAddToWishlist = () => {
    dispatch({ type: 'wishlist/addToWishlist', payload: { productId: product.id } });
  };

  // Add to cart handler
  const handleAddToCart = () => {
    setShowModal(true);
  };

  const handleConfirmAddToCart = () => {
    dispatch(addToCart({ productId: product.id, quantity }));
    setShowModal(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <BackgroundGradient className="rounded-3xl p-4 transition-transform group-hover:scale-105 duration-300" containerClassName="hover:z-10">
      <img
        src={product.image}
        alt={product.name}
        className="rounded-xl w-full h-40 object-cover mb-4 border border-neutral-800"
        width={240}
        height={160}
      />
      <h3 className="text-lg font-bold text-white mb-2 text-center">{product.name}</h3>
      <p className="text-cyan-400 font-semibold text-xl mb-4">${product.price.toFixed(2)}</p>
      <div className="flex w-full justify-center gap-4 mt-2">
        {/* Add to Cart Icon Button */}
        <button
          className="flex items-center justify-center rounded-full bg-cyan-600 hover:bg-cyan-700 text-white p-2 shadow transition"
          title="Add to Cart"
          onClick={handleAddToCart}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 0 0 6.6 17h10.8a1 1 0 0 0 .95-.68L21 13M7 13V6h13" />
          </svg>
        </button>
        {/* Add to Wishlist Icon Button */}
        <button
          className={`flex items-center justify-center rounded-full ${isWishlisted ? 'bg-yellow-400' : 'bg-gray-300'} hover:bg-yellow-500 text-white p-2 shadow transition`}
          title="Add to Wishlist"
          onClick={handleAddToWishlist}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={isWishlisted ? '#FFD700' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 17.75l-6.172 3.245 1.179-6.88L2 9.755l6.908-1.004L12 2.75l3.092 6.001L22 9.755l-5.007 4.36 1.179 6.88z" />
          </svg>
        </button>
      </div>

      {/* Modal for quantity input */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl p-6 shadow-lg w-80 flex flex-col items-center">
            <h4 className="text-lg font-bold mb-4 text-cyan-700">Add to Cart</h4>
            <label className="mb-2 text-gray-700">Quantity:</label>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={e => setQuantity(Number(e.target.value))}
              className="w-20 p-2 border border-cyan-400 rounded mb-4 text-center"
            />
            <button
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded shadow"
              onClick={handleConfirmAddToCart}
            >
              Add to Cart
            </button>
            <button
              className="mt-2 text-cyan-600 hover:underline"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Toast popup for confirmation */}
      {showToast && (
        <div className="fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-cyan-700 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#22c55e" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>Added to cart</span>
        </div>
      )}
    </BackgroundGradient>
  );
}
