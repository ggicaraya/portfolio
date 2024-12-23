import { socialLinks } from "@/config/getInTouch";

const SocialList = () => {

  const socialData = socialLinks.social

  return (
    <>
      <ul className="flex flex-row flex-wrap gap-5 justify-center">
        {
          socialData &&
          socialData.map((social, index) => {
            const { name, icon, link } = social
            return (
              <li key={index} id={name} className=" flex justify-center">
                <a href={link} target="_blank" className="block text-center mx-auto hover:scale-125 transition-all">
                  {icon}
                </a>
              </li>
            )
          })
        }
      </ul>
    </>
  );
}

export default SocialList;