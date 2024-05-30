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
      className="flex items-center justify-center h-screen w-full"
    >
      <div className="bg-black bg-opacity-50 p-4 rounded-lg text-center w-full max-w-screen-lg">
        <p className="text-white font-bold text-xl">
          {book} {chapter}:{verse}
        </p>
        <p className="text-white">{text}</p>
      </div>
    </div>
  );
};

export default BibleVerse;
