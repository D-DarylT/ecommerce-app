"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cn } from "../../lib/utils";

export const Card = React.memo(
  ({ card, index, hovered, setHovered }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => {
    const isHovered = hovered === index;
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [showToast, setShowToast] = useState(false);
    // Redux selectors for wishlist and cart
    const wishlist = useSelector((state: any) => state.wishlist.items);
    const isWishlisted = wishlist.some((item: any) => item.productId === card.id);

    const handleAddToWishlist = () => {
      dispatch({ type: 'wishlist/addToWishlist', payload: { productId: card.id } });
    };
    const handleAddToCart = () => {
      setShowModal(true);
    };
    const handleConfirmAddToCart = () => {
      dispatch({ type: 'cart/addToCart', payload: { productId: card.id, quantity } });
      setShowModal(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    };
    return (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out flex flex-col",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}
      >
        <div className={cn(
          "absolute left-0 top-0 w-full transition-all duration-300",
          isHovered ? "h-1/2" : "h-full"
        )}>
          <img
            src={card.src}
            alt={card.title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className={cn(
          "absolute left-0 bottom-0 w-full px-4 py-6 bg-black/70 text-white transition-all duration-300 flex flex-col justify-center",
          isHovered ? "h-1/2 opacity-100" : "h-0 opacity-0"
        )}>
          <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.title}
          </div>
          {card.price && (
            <div className="mt-1 text-lg font-bold text-cyan-300">
              Price: {card.price}
            </div>
          )}
          {card.moq && (
            <div className="mt-1 text-sm text-neutral-200">MOQ: {card.moq}</div>
          )}
          {card.supplier && (
            <div className="mt-1 text-sm text-neutral-200 flex items-center justify-between">
              <span>Supplier: {card.supplier}</span>
              {card.rating && (
                <span className="ml-2 text-yellow-400">★ {card.rating}</span>
              )}
            </div>
          )}
          {/* Add to Cart and Wishlist Buttons */}
          <div className="flex w-full justify-center gap-4 mt-4">
            <button
              className="flex items-center justify-center rounded-full bg-cyan-600 hover:bg-cyan-700 text-white p-2 shadow transition"
              title="Add to Cart"
              onClick={handleAddToCart}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 0 0 6.6 17h10.8a1 1 0 0 0 .95-.68L21 13M7 13V6h13" />
              </svg>
            </button>
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
      </div>
    );
  }
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
