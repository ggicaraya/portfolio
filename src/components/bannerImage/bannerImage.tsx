"use client"

import Image from "next/image";
import { motion } from 'framer-motion';
import { cn } from "@/utils/classMerge";

interface BannerImageProps {
  image: string;
  className?: string;
}

const BannerImage: React.FC<BannerImageProps> = ({ image, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      whileInView={{ opacity: 1, scale: 1.3 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="absolute right-0 top-0 w-full h-full opacity-20 z-0"
    >
      <Image
        src={image}
        alt="Gian Paolo Gicaraya | Portfolio"
        fill
        className={cn(`object-cover ${className}`)}
        priority
      />
    </motion.div>
  );
}
export default BannerImage