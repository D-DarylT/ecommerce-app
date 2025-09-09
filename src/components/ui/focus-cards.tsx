"use client";

import React, { useState } from "react";
import { cn } from "../../lib/utils";

export const Card = React.memo(
  ({ card, index, hovered, setHovered }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => {
    const isHovered = hovered === index;
    return (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out flex flex-col",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}
      >
        <div className={cn(
          "absolute left-0 top-0 w-full transition-all duration-300",
          isHovered ? "h-1/2" : "h-full"
        )}>
          <img
            src={card.src}
            alt={card.title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className={cn(
          "absolute left-0 bottom-0 w-full px-4 py-6 bg-black/70 text-white transition-all duration-300 flex flex-col justify-center",
          isHovered ? "h-1/2 opacity-100" : "h-0 opacity-0"
        )}>
          <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.title}
          </div>
          {card.price && (
            <div className="mt-1 text-lg font-bold text-cyan-300">
              Price: {card.price}
            </div>
          )}
          {card.moq && (
            <div className="mt-1 text-sm text-neutral-200">MOQ: {card.moq}</div>
          )}
          {card.supplier && (
            <div className="mt-1 text-sm text-neutral-200 flex items-center justify-between">
              <span>Supplier: {card.supplier}</span>
              {card.rating && (
                <span className="ml-2 text-yellow-400">★ {card.rating}</span>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
