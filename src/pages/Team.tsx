import React from 'react';

const members = [
  { name: 'Alice', role: 'CEO', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Bob', role: 'CTO', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Eve', role: 'COO', img: 'https://randomuser.me/api/portraits/women/68.jpg' },
];

const Team: React.FC = () => (
  <div className="min-h-screen w-full bg-gray-900 text-white flex flex-col items-center justify-start py-12 px-4">
    <h2 className="text-4xl font-bold mb-8 text-cyan-400">Meet Our Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {members.map(member => (
        <div key={member.name} className="bg-glass rounded-2xl p-6 shadow-lg flex flex-col items-center">
          <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full border-4 border-cyan-400 mb-4 object-cover shadow-md" />
          <h4 className="text-lg font-bold text-cyan-300 mb-1">{member.name}</h4>
          <p className="text-cyan-100 text-sm">{member.role}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Team;
