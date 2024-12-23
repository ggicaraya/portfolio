import BannerImage from "@/components/bannerImage/bannerImage";
import BannerText from "@/components/bannerText/bannerText";
import ScrollIndicator from "@/components/scrollIndicator/scrollIndicator";

const BannerSection: React.FC = () => {

  const BannerHeading = () => (
    <>Gian Paolo <span className="text-support">Gicaraya</span></>
  )

  return (
    <>
      <section className="relative min-h-[900px] py-20 flex flex-col items-center justify-center px-8 md:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-core/95 via-core/90 to-transparent z-[1]" />
        <BannerImage
          image="/images/DSC08535.jpg"
          className='object-center md:object-left-top opacity-30'
        />
        <BannerText
          heading={<BannerHeading />}
          overline="Let's create something amazing together!"
          tagline="Front-end Web Developer"
          description="Crafting elegant and responsive web experiences with precision and creativity"
        />
        <ScrollIndicator />
      </section>
    </>
  )
}

export default BannerSection;
