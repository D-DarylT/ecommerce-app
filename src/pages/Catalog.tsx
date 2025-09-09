import React, { useState } from 'react';
import Wishlist from '../components/Wishlist';
import { FocusCards } from '../components/ui/focus-cards';

const productCards = [
  {
  title: "Voltora Power Station 5000",
  src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
  description: "High-capacity portable power station for home and industrial use.",
  price: "$1999",
  category: "Power Stations",
  moq: 10,
  supplier: "Voltora Energy Inc.",
  rating: 4.8,
  },
  {
  title: "Voltora Solar Panel X",
  src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  description: "Ultra-efficient solar panel with quantum cell technology.",
  price: "$899",
  category: "Solar Panels",
  moq: 20,
  supplier: "SolarX Solutions",
  rating: 4.6,
  },
  {
  title: "Voltora Portable Station",
  src: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
  description: "Compact power station for travel and outdoor adventures.",
  price: "$499",
  category: "Power Stations",
  moq: 5,
  supplier: "Voltora Energy Inc.",
  rating: 4.7,
  },
  {
  title: "Voltora Smart Accessory",
  src: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  description: "Smart IoT accessory for energy monitoring and automation.",
  price: "$129",
  category: "Accessories",
  moq: 50,
  supplier: "Voltora Accessories",
  rating: 4.5,
  },
  {
  title: "Voltora Ultra Battery",
  src: "https://images.unsplash.com/photo-1514474959185-2c3a9e3b6b93",
  description: "Long-life battery for grid and off-grid storage.",
  price: "$699",
  category: "Batteries",
  moq: 15,
  supplier: "Voltora Batteries",
  rating: 4.9,
  },
  {
  title: "Voltora Grid Manager",
  src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
  description: "AI-powered grid management system for smart cities.",
  price: "$2999",
  category: "Grid Management",
  moq: 2,
  supplier: "Voltora Grid Tech",
  rating: 4.4,
  },
  {
  title: "Voltora QuantumWall Battery",
  src: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
  description: "Wall-mounted battery with quantum energy cells.",
  price: "$2499",
  category: "Batteries",
  moq: 8,
  supplier: "QuantumVolt",
  rating: 4.8,
  },
  {
  title: "Voltora Fusion Inverter",
  src: "https://images.unsplash.com/photo-1465101178521-c1a2b1c6413c",
  description: "Hybrid inverter for solar and wind integration.",
  price: "$1199",
  category: "Inverters",
  moq: 12,
  supplier: "FusionTech",
  rating: 4.3,
  },
  {
  title: "Voltora Smart Home Hub",
  src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
  description: "Central hub for smart home energy control.",
  price: "$399",
  category: "Smart Home",
  moq: 25,
  supplier: "Voltora Smart",
  rating: 4.7,
  },
  {
  title: "Voltora Nano Panel",
  src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
  description: "Nano-scale solar panel for wearables and micro devices.",
  price: "$99",
  category: "Solar Panels",
  moq: 100,
  supplier: "NanoVolt",
  rating: 4.2,
  },
  {
  title: "Voltora EV Supercharger",
  src: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
  description: "Fast-charging station for electric vehicles.",
  price: "$3499",
  category: "EV Charging",
  moq: 3,
  supplier: "EVVolt",
  rating: 4.6,
  },
  {
  title: "Voltora HydroCell Generator",
  src: "https://images.unsplash.com/photo-1465101178521-c1a2b1c6413c",
  description: "Portable hydrogen fuel cell generator.",
  price: "$1599",
  category: "Generators",
  moq: 6,
  supplier: "HydroVolt",
  rating: 4.5,
  },
];

const categories = [
  "All Categories",
  "Solar Panels",
  "Power Stations",
  "Accessories",
  "Batteries",
  "Grid Management",
  "Inverters",
  "Smart Home",
  "EV Charging",
  "Generators",
];

const Catalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const filteredCards =
    selectedCategory === "All Categories"
      ? productCards
      : productCards.filter((card) => card.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h2 className="text-3xl font-semibold mb-6">Product Catalog</h2>
      <div className="flex gap-4 mb-8">
        <input type="text" placeholder="Search products..." className="px-4 py-2 rounded bg-gray-900 text-white border border-cyan-400 focus:outline-none" />
        <select
          className="px-4 py-2 rounded bg-gray-900 text-white border border-magenta focus:outline-none"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
        <select className="px-4 py-2 rounded bg-gray-900 text-white border border-cyan-400 focus:outline-none">
          <option>All Efficiencies</option>
          <option>95%+</option>
          <option>98%+</option>
        </select>
      </div>
      <FocusCards cards={filteredCards} />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Wishlist />
      </div>
    </div>
  );
};

export default Catalog;
