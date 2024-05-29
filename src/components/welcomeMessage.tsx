// components/WelcomeMessage.tsx

import React, { useState, useEffect } from "react";

const WelcomeMessage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const verseElement = document.getElementById("bible-verse");
      if (verseElement) {
        const { bottom } = verseElement.getBoundingClientRect();
        const threshold = window.innerHeight / 2;
        if (bottom < threshold) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="anchoredCtaWeb"
      className={`transition-opacity duration-500 ${
        isVisible ? "opacity-100 mt-16" : "opacity-0 mt-32"
      }`}
    >
      <div className="bg-white p-4 shadow-md">
        <h2 className="text-black text-2xl font-bold">Welcome to the Church</h2>
        <p className="text-gray-800">Introductory message goes here...</p>
      </div>
    </div>
  );
};

export default WelcomeMessage;
