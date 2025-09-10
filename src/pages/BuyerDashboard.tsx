import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { addOrder } from '../store/ordersSlice';

const BuyerDashboard: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  const orders = useSelector((state: RootState) => state.orders.orders.filter(o => o.userId === user?.id));
  const products = useSelector((state: RootState) => state.products.items);
  // Simulate favorites as local state for now
  const [favorites, setFavorites] = React.useState<string[]>(['Voltora Solar Panel X', 'Voltora QuantumWall Battery', 'Voltora Fusion Inverter']);
  const recommended = products.slice(0, 3).map(p => p.name);

  const handleAddFavorite = (name: string) => {
    if (!favorites.includes(name)) setFavorites([...favorites, name]);
  };
  const handleRemoveFavorite = (name: string) => {
    setFavorites(favorites.filter(f => f !== name));
  };

  return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-2">
      <h2 className="text-3xl font-semibold mb-6">Buyer Dashboard</h2>
      <p className="mb-4">Welcome, {user?.name || 'buyer'}! Here you can view your orders, favorites, and recommended products.</p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-2 text-cyan-400">Recent Orders</h3>
          <ul className="list-disc ml-4">
            {orders.length === 0 ? <li>No orders found.</li> : orders.map(order => (
              <li key={order.id}>Order #{order.id} - {products.find(p => p.id === order.items[0]?.productId)?.name || 'Product'} - {order.status}</li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-2 text-magenta">Favorites</h3>
          <ul className="list-disc ml-4">
            {favorites.map(fav => (
              <li key={fav} className="flex justify-between items-center">
                <span>{fav}</span>
                <button className="ml-2 px-2 py-1 bg-magenta text-white rounded" onClick={() => handleRemoveFavorite(fav)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="mt-2">
            <select className="px-2 py-1 rounded bg-gray-900 text-white border border-cyan-400" onChange={e => handleAddFavorite(e.target.value)}>
              <option value="">Add favorite...</option>
              {products.map(p => !favorites.includes(p.name) && <option key={p.id} value={p.name}>{p.name}</option>)}
            </select>
          </div>
        </div>
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-2 text-cyan-400">Recommended Products</h3>
          <ul className="list-disc ml-4">
            {recommended.map(name => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default BuyerDashboard;
