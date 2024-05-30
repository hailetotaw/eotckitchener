// components/WelcomeMessage.tsx

import React from "react";

const WelcomeMessage: React.FC = () => {
  return (
    <div className="p-8">
      <div className="bg-white bg-opacity-70 p-8 shadow-md rounded-lg">
        <h2 className="text-black text-2xl font-bold">Welcome to the Church</h2>
        <p className="text-gray-800">Introductory message goes here...</p>
      </div>
    </div>
  );
};

export default WelcomeMessage;
