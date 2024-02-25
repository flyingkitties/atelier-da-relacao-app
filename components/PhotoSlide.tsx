'use client';
import {
  motion,
  useTransform,
  useScroll,
  Variants,
  MotionProps,
  useViewportScroll,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { throttle } from 'throttle-debounce-ts';

function useElementViewportPosition(ref: React.RefObject<HTMLElement>) {
  const [position, setPosition] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    if (!ref || !ref.current) return;

    const pageHeight = document.body.scrollHeight;
    const start = ref.current.offsetTop;
    const end = start + ref.current.offsetHeight;

    setPosition([start / pageHeight, end / pageHeight]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { position };
}
// const slideAnimation: MotionProps = {
//   variants: {
//     full: { backgroundColor: '#663399' },
//     partial: { backgroundColor: '#808080' },
//   },
//   initial: 'partial',
//   whileInView: 'full',
//   viewport: { amount: 1, once: true },
// };

const PhotoSlide = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { position } = useElementViewportPosition(ref);
  const [carouselEndPosition, setCarouselEndPosition] = useState(0);
  const { scrollYProgress } = useScroll();
  console.log(position);
  const x = useTransform(scrollYProgress, position, [0, carouselEndPosition]);

  useEffect(() => {
    if (!carouselRef || !carouselRef.current) return;
    const parent = carouselRef.current.parentElement;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const resetCarouselEndPosition = () => {
      if (carouselRef && carouselRef.current) {
        const newPosition =
          carouselRef.current.clientWidth -
          window.innerWidth +
          scrollbarWidth +
          (parent as HTMLElement).offsetLeft * 2;

        setCarouselEndPosition(-newPosition);
      }
    };

    resetCarouselEndPosition();
    const handleResize = throttle(10, resetCarouselEndPosition);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      ref={ref}
      className="relative px-5 h-[300vh] bg-darkGreenColor"
    >
      <div className="sticky top-0 h-[80vh] flex items-center overflow-x-hidden">
        <motion.div
          ref={carouselRef}
          style={{ x }}
          className="flex gap-4 snap-mandatory snap-x snap-center"
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
      className="group relative h-[320px] w-[320px] overflow-hidden rounded-lg"
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
