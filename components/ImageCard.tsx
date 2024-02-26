import React from 'react';
import { motion, Variants } from 'framer-motion';
type CardProps = {
  url: string;
  id: number;
  alt: string;
};
function ImageCard({ card }: { card: CardProps }) {
  const cardVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <div className="relative mb-3 mr-3">
      <div
        key={card.id}
        className="group relative h-80 lg:h-full w-full overflow-hidden rounded-lg z-10 shadow-md"
      >
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div>
        <div className="absolute -bottom-5 -right-5 top-0 left-0  bg-greenColor/20"></div>
      </div>
      <div className="absolute -bottom-3 -right-3 top-3 left-3 border-2 border-greenColor rounded-md "></div>
    </div>
  );
}
export default ImageCard;
