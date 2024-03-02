import React from 'react';
import { motion, Variants } from 'framer-motion';
import { CardProps } from './Props';

function ImageCard({ card }: { card: CardProps }) {
  return (
    <motion.div
      className="relative mb-3 mr-3"
      initial={{
        y: -15,
        opacity: 0.5,
      }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
        delay: 0.5,
      }}
      viewport={{ once: true }}
    >
      <div
        key={card.id}
        className="group relative h-56 md:h-80 lg:h-full w-full overflow-hidden rounded-lg z-10 shadow-md"
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
    </motion.div>
  );
}
export default ImageCard;
