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
      id="bible-verse"
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full"
    >
      <div className="bg-black bg-opacity-50 p-4 rounded-lg mx-auto text-center">
        <p className="text-white font-bold text-xl">
          {book} {chapter}:{verse}
        </p>
        <p className="text-white">{text}</p>
      </div>
    </div>
  );
};

export default BibleVerse;
