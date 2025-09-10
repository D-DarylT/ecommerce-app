import React from 'react';
import { motion } from 'framer-motion';

const team = [
  { name: 'Alice', role: 'CEO', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Bob', role: 'CTO', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Eve', role: 'COO', img: 'https://randomuser.me/api/portraits/women/68.jpg' },
];

const About: React.FC = () => (
  <div className="min-h-screen w-full bg-gray-900 text-white flex flex-col items-center justify-start py-12 px-4">
    {/* Hero Section */}
    <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="w-full max-w-4xl text-center mb-12">
      <h2 className="text-5xl font-extrabold mb-4 text-cyan-400 tracking-tight drop-shadow-lg">About Voltora</h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="text-cyan-200 text-xl mb-6">Powering the future with advanced energy solutions.</motion.p>
      <div className="w-full flex justify-center">
        <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-magenta rounded-full mb-2" />
      </div>
    </motion.div>

    {/* Global Reach Section */}
    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="w-full max-w-5xl bg-glass rounded-2xl shadow-xl mb-12 p-8 flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-cyan-400 mb-4">Global Reach</h3>
        <p className="text-cyan-200 mb-4">Voltora’s solutions are trusted worldwide, delivering clean, reliable energy to homes and businesses on every continent.</p>
        <ul className="text-cyan-300 space-y-1 text-sm">
          <li>🌎 50+ countries served</li>
          <li>⚡ 1M+ units deployed</li>
          <li>🏆 Award-winning innovation</li>
        </ul>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full h-56 md:h-64 rounded-xl flex items-center justify-center shadow-lg">
          {/* Interactive Globe Visualization */}
          <React.Suspense fallback={<div className="text-cyan-200">Loading globe...</div>}>
            {typeof window !== "undefined" && (
              <>
                {require('../components/about-globe-demo').GlobeDemo()}
              </>
            )}
          </React.Suspense>
        </div>
      </div>
    </motion.div>

    {/* Team Section */}
    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="w-full max-w-5xl">
      <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">Meet Our Team</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map(member => (
          <motion.div whileHover={{ scale: 1.07, boxShadow: '0 8px 32px #38bdf8aa' }} key={member.name} className="bg-glass rounded-2xl p-6 shadow-lg flex flex-col items-center transition-transform duration-300 cursor-pointer">
            <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full border-4 border-cyan-400 mb-4 object-cover shadow-md" />
            <h4 className="text-lg font-bold text-cyan-300 mb-1">{member.name}</h4>
            <p className="text-cyan-100 text-sm">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
);

export default About;
