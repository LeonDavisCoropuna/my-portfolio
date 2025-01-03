import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: <FaGithub height={30} />, path: "https://github.com/LeonDavisCoropuna" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/leon-felipe-davis-coropuna-930772336/" },
  // { icon: <FaYoutube />, path: "https://youtube.com/your-channel" },
  // { icon: <FaTwitter />, path: "https://twitter.com/your-handle" },
];

const Socials = ({ containerStyles, iconStyles }: { containerStyles: string; iconStyles: string }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <a
          href={social.path}
          key={index}
          target="_blank"
          className={`${iconStyles} h-12 w-12`} // Añadimos dimensiones claras
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;
