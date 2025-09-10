import React from 'react';

const Orders: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
    <h2 className="text-3xl font-semibold mb-6 text-cyan-400">Order History</h2>
    <div className="bg-glass rounded-2xl p-6 shadow-lg w-full max-w-lg">
      <ul className="mb-4">
        <li className="flex justify-between py-2 border-b border-cyan-800">
          <span>Order #ORD123456</span>
          <span className="font-bold text-cyan-300">Shipped</span>
        </li>
        <li className="flex justify-between py-2 border-b border-cyan-800">
          <span>Order #ORD123457</span>
          <span className="font-bold text-cyan-300">Delivered</span>
        </li>
      </ul>
      <div className="text-cyan-200">Track your orders and view shipment status here.</div>
    </div>
  </div>
);

export default Orders;
