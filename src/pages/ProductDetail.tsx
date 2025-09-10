import React from 'react';
import ProductComparison from '../components/ProductComparison';
import { motion } from 'framer-motion';

const ProductDetail: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
    <h2 className="text-3xl font-semibold">Product Detail</h2>
    {/* Tracing beam effect */}
    <motion.div initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 1 }} className="w-full h-2 bg-gradient-to-r from-electric to-magenta mb-8" />
    <div className="mb-8">
      <h3 className="text-xl font-bold text-cyan-400 mb-2">Voltora Power Station 5000</h3>
      <ul className="text-white mb-4">
        <li>Capacity: 5000W</li>
        <li>Efficiency: 98%</li>
        <li>Dimensions: 120x60x80cm</li>
        <li>Weight: 120kg</li>
      </ul>
      <ProductComparison />
    </div>
    <div className="mb-8">
      <h4 className="text-lg font-bold text-magenta mb-2">Customer Reviews</h4>
      <div className="bg-glass rounded p-4 mb-2 text-white">Amazing product! - Alice</div>
      <div className="bg-glass rounded p-4 mb-2 text-white">Very efficient and reliable. - Bob</div>
      {/* Comments section */}
      <CommentsSection />
    </div>
  </div>
);

// CommentsSection component for user-generated reviews
const CommentsSection: React.FC = () => {
  const [comments, setComments] = React.useState<string[]>([]);
  const [input, setInput] = React.useState("");

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setComments([input, ...comments]);
      setInput("");
    }
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleAddComment} className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add your review..."
          className="px-4 py-2 rounded bg-gray-900 text-white border border-magenta focus:outline-none w-full"
        />
        <button type="submit" className="px-4 py-2 rounded bg-magenta text-white font-bold">Post</button>
      </form>
      <div className="space-y-2">
        {comments.length === 0 ? (
          <div className="text-neutral-400">No reviews yet. Be the first to comment!</div>
        ) : (
          comments.map((c, i) => (
            <div key={i} className="bg-glass rounded p-3 text-white">{c}</div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
