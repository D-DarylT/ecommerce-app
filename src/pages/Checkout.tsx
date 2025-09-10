import React from 'react';

const Checkout: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
    <div className="bg-glass rounded-2xl p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">Checkout</h2>
      <p className="text-cyan-200 mb-4">Your cart is ready for checkout. Please review your items and proceed to payment.</p>
      <button className="px-6 py-2 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition-colors">Proceed to Payment</button>
    </div>
  </div>
);

export default Checkout;
