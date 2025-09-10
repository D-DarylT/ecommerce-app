import React from 'react';


const recentActivity = [
  { type: 'Order', detail: 'Placed order #ORD123456 for Voltora Power Station 5000', date: '2025-09-01' },
  { type: 'Review', detail: 'Left a 5-star review for Voltora Solar Panel X', date: '2025-08-28' },
  { type: 'Wishlist', detail: 'Added Voltora QuantumWall Battery to wishlist', date: '2025-08-25' },
];

const Profile: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
    <h2 className="text-3xl font-semibold mb-6 text-cyan-400">My Profile</h2>
    <div className="bg-glass rounded-2xl p-6 shadow-lg w-full max-w-lg">
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex items-center gap-4">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-16 h-16 rounded-full border-4 border-cyan-400 object-cover" />
          <div>
            <h3 className="text-xl font-bold text-cyan-300">John Doe</h3>
            <p className="text-cyan-200">Buyer</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-cyan-200">Email: johndoe@email.com</span>
          <span className="text-cyan-200">Address: 123 Main St, City</span>
        </div>
      </div>
      <div className="mb-6">
        <h4 className="text-lg font-bold text-cyan-400 mb-2">Recent Activity</h4>
        <ul className="text-cyan-200 text-sm space-y-1">
          {recentActivity.map((a, i) => (
            <li key={i} className="border-b border-cyan-800 py-1 flex justify-between">
              <span>{a.detail}</span>
              <span className="text-cyan-500">{a.date}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <button className="px-6 py-2 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition-colors">Edit Profile</button>
        <button className="px-6 py-2 rounded-lg bg-magenta text-white font-semibold hover:bg-magenta/80 transition-colors">Logout</button>
      </div>
    </div>
  </div>
);

export default Profile;
