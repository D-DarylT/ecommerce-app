import React from 'react';

const Favorites: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
    <h2 className="text-3xl font-semibold mb-6 text-cyan-400">Wishlist</h2>
    <div className="bg-glass rounded-2xl p-6 shadow-lg w-full max-w-lg">
      <ul className="mb-4">
        <li className="flex justify-between py-2 border-b border-cyan-800">
          <span>Voltora Power Station 5000</span>
          <button className="px-3 py-1 rounded bg-magenta text-white font-semibold hover:bg-magenta/80 transition-colors">Remove</button>
        </li>
        <li className="flex justify-between py-2 border-b border-cyan-800">
          <span>Voltora Solar Panel X</span>
          <button className="px-3 py-1 rounded bg-magenta text-white font-semibold hover:bg-magenta/80 transition-colors">Remove</button>
        </li>
      </ul>
      <div className="text-cyan-200">Save products for later and manage your favorites here.</div>
    </div>
  </div>
);

export default Favorites;
