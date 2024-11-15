'use client'

// Library Import
import React from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Assets Import
import ServiceOverviewImg from '@/public/our-services/OurService1.png';

const ServiceOverview = () => {
  // Intersection Observer
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Framer Motion Animation Controls
  const animationControls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      animationControls.start('visible');
    }
  }, [inView, animationControls]);

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref} // Ref untuk Intersection Observer
      className="wrapper text-center mt-[100px] flex flex-row justify-start items-start gap-x-12"
      initial="hidden"
      animate={animationControls}
      variants={containerVariants}
    >
      {/* Animated Image */}
      <motion.div
        className="relative h-[250px] w-[250px]"
        variants={imageVariants}
      >
        <Image
          src={ServiceOverviewImg}
          alt="AI and Automation Banner"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Animated Text */}
      <motion.div className="text-start space-y-4" variants={textVariants}>
        <h2 className="text-4xl font-bold font-gotham">
          Empower Your E-Commerce with AI-Driven Solutions
        </h2>
        <p className="max-w-3xl text-lg text-purple-200">
          Purple-Box combines cutting-edge AI technology with a deep understanding of e-commerce to provide smart automation solutions that help businesses grow. From lead generation to customer support, our comprehensive suite of services ensures your business stays ahead of the competition.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ServiceOverview;
