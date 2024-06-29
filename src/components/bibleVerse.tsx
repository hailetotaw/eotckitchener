// components/BibleVerse.tsx

import React from "react";

interface BibleVerseProps {
  book: string;
  chapter: number;
  verse: number;
  text: string;
}

const BibleVerse: React.FC<BibleVerseProps> = ({
  book,
  chapter,
  verse,
  text,
}) => {
  return (
    <div
      className="relative z-10 flex flex-col items-center justify-center h-screen"
      id="home"
    >
      <div className="w-full bg-black bg-opacity-50 text-white p-6">
        <p className="text-white font-bold text-xl text-center">
          {book} {chapter}:{verse}
        </p>
        <p className="text-white text-center">{text}</p>
      </div>
    </div>
  );
};

export default BibleVerse;
