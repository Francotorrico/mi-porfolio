"use client";

import { useState } from "react";

type Props = {
  images: string[];
  alt: string;
};

export default function ImageCarousel({ images, alt }: Props) {
  const [current, setCurrent] = useState(0);

  if (images.length === 1) {
    return (
      <div className="relative h-full w-full overflow-hidden">
        <img
          src={images[0]}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden">
      <img
        src={images[current]}
        alt={`${alt} ${current + 1}`}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/60 transition-all opacity-0 group-hover:opacity-100 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/60 transition-all opacity-0 group-hover:opacity-100 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrent(i);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current
                    ? "bg-white scale-110"
                    : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
