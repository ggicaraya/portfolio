'use client';
import BannerImage from '@/components/bannerImage/bannerImage';
import SocialList from '@/components/socialList/socialList';
import { motion } from 'framer-motion';

const GetInTouchSection = () => {
  return (
    <section className="relative min-h-[300px] flex items-center justify-start py-20 px-8 md:px-16 overflow-hidden" id="getInTouch">
      <BannerImage
        image="/images/pexels-pixabay-326576.jpg"
        className='object-bottom opacity-30'
      />
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0, }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h2 className="text-4xl font-bold mb-8 text-support">Get In touch</h2>
        <div className='mb-10 text-xl'>
          Interested in working together? Let&apos;s connect and create something amazing.
        </div>
        <SocialList />
      </motion.div>
    </section>
  );
}

export default GetInTouchSection