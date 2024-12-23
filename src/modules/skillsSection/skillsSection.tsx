'use client';
import BannerImage from '@/components/bannerImage/bannerImage';
import { skills } from '@/config/skills';
import { motion } from 'framer-motion';

const SkillsSection = () => {

  const skillsData = skills.items

  return (
    <section className="relative min-h-[900px] flex items-center justify-start px-8 md:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-core/95 via-core/90 to-transparent z-[1]" />
      <BannerImage
        image="/images/photo-1555066931-4365d14bab8c.jpg"
      />
      <div className='flex flex-col max-w-4xl mx-auto text-center relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 0, }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-2 text-support">Skills</h2>
          <div className="text-lg mb-10">
            Empowering Ideas with Expertise: Tools and Technologies that Shape My Craft
          </div>
        </motion.div>
        <div>
        {
          skillsData && (
            <div className='flex flex-wrap flex-row justify-center gap-4 md:gap-12'>
              {
                skillsData.map((data, index) => {
                  const { icon, name } = data
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0, }}
                      exit={{ opacity: 0, y: 100 }}
                      transition={{ delay: index * 0.1, duration: index * 0.01 }}
                      className="flex flex-col items-center"
                    >
                      {icon}
                      <h3 className="text-sm font-semibold mt-1 text-peripheral">{name}</h3>
                    </motion.div>
                  )
                })
              }
            </div>
          )
        }
        </div>
      </div>
    </section>
  );
}

export default SkillsSection