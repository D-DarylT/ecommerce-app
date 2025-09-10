import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const SupplierDashboard: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.items);
  const orders = useSelector((state: RootState) => state.orders.orders);
  // Analytics: calculate monthly sales and top product
  const monthlySales = orders.filter(o => o.status === 'completed').length * 5000; // Dummy calc
  const topProduct = products[0]?.name || 'N/A';
  const pendingShipments = orders.filter(o => o.status === 'pending').length;

  return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-2">
      <h2 className="text-3xl font-semibold mb-6">Supplier/Admin Dashboard</h2>
      <p className="mb-4">Welcome, supplier/admin! Here you can manage products, view orders, and access analytics.</p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-2 text-cyan-400">Product Management</h3>
          <ul className="list-disc ml-4">
            {products.map(p => (
              <li key={p.id}>{p.name} - ${p.price}</li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-2 text-magenta">Recent Orders</h3>
          <ul className="list-disc ml-4">
            {orders.length === 0 ? <li>No orders found.</li> : orders.slice(0, 3).map(order => (
              <li key={order.id}>Order #{order.id} - {products.find(p => p.id === order.items[0]?.productId)?.name || 'Product'} - {order.status}</li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-2 text-cyan-400">Analytics</h3>
          <ul className="list-disc ml-4">
            <li>Monthly Sales: ${monthlySales}</li>
            <li>Top Product: {topProduct}</li>
            <li>Pending Shipments: {pendingShipments}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SupplierDashboard;
