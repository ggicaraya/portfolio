'use client';
import BannerImage from '@/components/bannerImage/bannerImage';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-start px-8 md:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-l from-core/95 via-core to-transparent z-[1]" />
      <BannerImage
        image="/images/DSC08535.jpg"
        className='object-left-top opacity-30'
      />
      <motion.div
        initial={{ opacity: 0, y: -200}}
        whileInView={{ opacity: 1, y: 0,  }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h2 className="text-4xl font-bold mb-8 text-support">About Me</h2>
        <p className="text-lg mb-6 text-white">
          As a versatile and flexible Front-end Web Developer, I bring ideas to life through clean,
          efficient code and engaging user interfaces. My adaptability allows me to quickly learn
          new technologies and seamlessly integrate into any development environment.
        </p>
        <p className="text-lg text-white">
          I thrive in dynamic environments where I can apply my skills to create impactful web
          solutions while continuously expanding my technical expertise.
        </p>
      </motion.div>
    </section>
  );
}

export default AboutSection