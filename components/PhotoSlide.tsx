'use client';
import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';

const PhotoSlide = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['100%', '1%']);

  console.log('x:', x);

  return (
    <section
      ref={targetRef}
      className="relative p-16 bg-darkGreenColor"
    >
      <div className="sticky top-0 flex items-center overflow-x-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-4"
        >
          {cards.map((card) => {
            return (
              <Card
                card={card}
                key={card.id}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardProps }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
    </div>
  );
};

export default PhotoSlide;

type CardProps = {
  url: string;
  title: string;
  id: number;
};

const cards: CardProps[] = [
  {
    url: '/spacePhotos/SP-1.jpg',
    title: 'Title 1',
    id: 1,
  },
  {
    url: '/spacePhotos/SP-2.jpg',
    title: 'Title 2',
    id: 2,
  },
  {
    url: '/spacePhotos/SP-3.png',
    title: 'Title 3',
    id: 3,
  },
  {
    url: '/spacePhotos/SP-4.jpg',
    title: 'Title 4',
    id: 4,
  },
  {
    url: '/spacePhotos/SP-5.jpg',
    title: 'Title 5',
    id: 5,
  },
  {
    url: '/spacePhotos/SP-6.jpg',
    title: 'Title 6',
    id: 6,
  },
  {
    url: '/spacePhotos/SP-7.jpg',
    title: 'Title 7',
    id: 7,
  },
];
