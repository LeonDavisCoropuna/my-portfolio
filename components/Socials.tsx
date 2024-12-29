import { Link } from "lucide-react";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/your-profile" },
  { icon: <FaLinkedin />, path: "https://linkedin.com/in/your-profile" },
  { icon: <FaYoutube />, path: "https://youtube.com/your-channel" },
  { icon: <FaTwitter />, path: "https://twitter.com/your-handle" },
];

const Socials = ({ containerStyles, iconStyles }: { containerStyles: string, iconStyles: string }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link href={social.path} key={index} className={iconStyles}>{social.icon}</Link>
      ))}
    </div>
  )
}

export default Socials