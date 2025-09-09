
import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';

const typewriterText = 'Contact Us';

const Contact: React.FC = () => {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(typewriterText.slice(0, i + 1));
      i++;
      if (i === typewriterText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4 py-12">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="w-full max-w-5xl bg-glass rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        {/* Left: Company Info */}
        <div className="md:w-1/2 p-8 bg-gradient-to-b from-gray-900/90 to-cyan-950/80 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-extrabold mb-4 text-cyan-400 tracking-tight">{displayed}</h2>
            <p className="text-cyan-200 mb-8 text-lg">We'd love to hear from you. Reach out for product inquiries, support, or partnership opportunities.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-cyan-300"><FaEnvelope className="text-xl" /> support@voltora.com</div>
              <div className="flex items-center gap-3 text-cyan-300"><FaPhone className="text-xl" /> +1 (800) 555-0199</div>
              <div className="flex items-center gap-3 text-cyan-300"><FaMapMarkerAlt className="text-xl" /> 123 Future Ave, Silicon City, USA</div>
            </div>
          </div>
          <div className="mt-10 flex gap-5">
            <a href="#" aria-label="LinkedIn" className="hover:text-cyan-400 transition"><FaLinkedin size={24} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-cyan-400 transition"><FaTwitter size={24} /></a>
            <a href="#" aria-label="Facebook" className="hover:text-cyan-400 transition"><FaFacebook size={24} /></a>
          </div>
        </div>
        {/* Right: Contact Form */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center bg-gray-950/80">
          <form className="flex flex-col gap-6 w-full max-w-md mx-auto">
            <div>
              <label htmlFor="name" className="block text-cyan-300 font-semibold mb-1">Name</label>
              <input id="name" type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-gray-900 text-cyan-200 border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-cyan-300 font-semibold mb-1">Email</label>
              <input id="email" type="email" placeholder="you@email.com" className="w-full px-4 py-3 rounded-lg bg-gray-900 text-cyan-200 border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-cyan-300 font-semibold mb-1">Message</label>
              <textarea id="message" placeholder="How can we help you?" rows={5} className="w-full px-4 py-3 rounded-lg bg-gray-900 text-cyan-200 border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition resize-none" required />
            </div>
            <motion.button whileHover={{ scale: 1.04 }} type="submit" className="w-full py-3 rounded-lg bg-cyan-400 text-gray-900 font-bold text-lg shadow-lg hover:bg-cyan-300 transition-all">Send Message</motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
