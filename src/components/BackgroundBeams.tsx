import React from "react";

const BackgroundBeams: React.FC = () => (
  <div className="fixed inset-0 z-10 pointer-events-none">
    <div className="w-full h-full bg-gradient-to-br from-cyan-900 via-purple-600 to-gray-900 opacity-60 animate-pulse" />
    {/* You can add SVG or canvas beams here for more effect */}
  </div>
);

export default BackgroundBeams;
