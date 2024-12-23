"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from "react";

interface BannerImageProps {
  heading: ReactNode;
  overline?: string;
  tagline?: string;
  description?: string
  children?: ReactNode
}

const BannerText: React.FC<BannerImageProps> = ({ heading, overline, tagline, description, children }) => {
  return (
    <div className="max-w-7xl mx-auto relative w-full px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute right-0 top-0 w-full h-full opacity-20 z-10"
      >
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0, }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          {
            overline && (
              <span className="text-sm uppercase mb-2 tracking-wider">
                {overline}
              </span>
            )
          }
          <h1 className="text-5xl md:text-7xl font-bold mb-2">
            {heading}
          </h1>
          {
            tagline && (
              <h2 className="text-xl md:text-3xl mb-4">
                {tagline}
              </h2>
            )
          }
          {
            description && (
              <p className="text-lg md:text-xl text-ancillary max-w-2xl">
                {description}
              </p>
            )
          }
          <div className="flex justify-start gap-4 max-w-7xl relative w-full mt-10">
            <Link href="#getInTouch" className='px-4 py-3 tex-lg bg-support hover:animate-pulse transition-all shadow-2xl'>
              Contact Me
            </Link>
            <Link href="https://resume-inky-one-50.vercel.app/" target="_blank" className='px-4 py-3 tex-lg bg-peripheral hover:animate-pulse transition-all shadow-2xl'>
              My Resume
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
export default BannerText