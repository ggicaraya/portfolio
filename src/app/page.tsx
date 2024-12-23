import { AboutSection } from "@/modules/aboutSection"
import { BannerSection } from "@/modules/bannerSection"
import { GetInTouchSection } from "@/modules/getInTouchSection"
import { SkillsSection } from "@/modules/skillsSection"

const Homepage = () => {
  return (
    <>
      <BannerSection />
      <AboutSection />
      <SkillsSection />
      <GetInTouchSection />
    </>
  )
}

export default Homepage