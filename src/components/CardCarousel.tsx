// src/CardCarousel.tsx
import React from 'react';
import Card from './Card';

interface CardCarouselProps {
  cards: Array<{
    title: string;
    description: string;
    imageUrl: string;
  }>;
}

const CardCarousel: React.FC<CardCarouselProps> = ({ cards }) => {
  return (
    <div className="flex  overflow-x-auto justify-around w-full my-5 me-3 flex-wrap">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardCarousel;
