import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="w-24 h-24 border-8 border-cyan-400 border-t-transparent rounded-full animate-spin bg-gradient-to-br from-fuchsia-500 to-cyan-400 shadow-lg flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-white border-t-fuchsia-500 rounded-full animate-spin" />
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default Loader;
