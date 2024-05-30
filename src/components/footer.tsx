// components/Footer.tsx

import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#ede9d0] text-gray-800 p-4 fixed bottom-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          © {currentYear} Kitchener EOTC. All rights reserved.
        </div>
        <div>
          <select className="bg-[#ede9d0] text-gray-800 rounded p-2">
            <option value="en">English</option>
            <option value="am">አማርኛ</option>
            {/* Add more options for other languages as needed */}
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
