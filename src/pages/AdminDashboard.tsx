import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';

const AdminDashboard: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.items);
  const orders = useSelector((state: RootState) => state.orders.orders);
  const users = useSelector((state: RootState) => state.user.users);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-2">
      <h2 className="text-3xl font-semibold mb-6 text-cyan-400">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-2 text-cyan-400">Products</h3>
          <ul className="list-disc ml-4">
            {products.map((p: any) => (
              <li key={p.id}>{p.name} - ${p.price}</li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-2 text-magenta">Orders</h3>
          <ul className="list-disc ml-4">
            {orders.map((order: any) => (
              <li key={order.id}>Order #{order.id} - {order.status} - {order.createdAt}</li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-2 text-fuchsia-400">Users</h3>
          <ul className="list-disc ml-4">
            {users.map((user: any) => (
              <li key={user.id}>{user.name} - {user.email} ({user.role})</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
