"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"

const about = {
  title: "About me",
  description: "I am a passionate software developer with a strong background in web development, AI, and problem-solving. I enjoy tackling complex challenges and continuously improving my skills to create impactful solutions. With a focus on collaboration and innovation, I strive to build meaningful and user-centered experiences.",
  info: [
    {
      fieldname: "Name",
      fieldValue: "Leon Davis",
    },
    {
      fieldname: "Phone",
      fieldValue: "+51 930 747 730",
    },
    {
      fieldname: "Experience",
      fieldValue: "1+ Years",
    },
    {
      fieldname: "Skype",
      fieldValue: "leon.01",
    },
    {
      fieldname: "Nacionality",
      fieldValue: "Peruvian",
    },
    {
      fieldname: "Email",
      fieldValue: "ldavis@unsa.edu.pe",
    },
    {
      fieldname: "Freelance",
      fieldValue: "Avalible",
    },
    {
      fieldname: "Lenguages",
      fieldValue: "Spanish, Portuguese and English",
    }
  ]
}
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: "Experience in various areas such as inventory supervision, customer service, and data gathering.",
  items: [
    {
      company: "VALMORE S.A.C",
      position: "Inventory - INTERSUR",
      duration: "January 2024",
      description: "Supervised the compliance with quality standards and proper placement of goods in the facilities. Conducted inventory audits, verifying the condition and existence of assets."
    },
    {
      company: "SNACK - LA JESUSA",
      position: "Waiter",
      duration: "January - March 2023",
      description: "Provided customer service and food service at a restaurant located in Plaza Yanahuara, Arequipa."
    },
    {
      company: "VALMORE S.A.C",
      position: "Data Collector - SEDAPAR",
      duration: "February 2022",
      description: "Inspected and documented the conditions of registered assets. Prepared detailed reports for the parent company, highlighting key observations and potential corrective actions."
    },
    {
      company: "VIDAS FELICES - NGO",
      position: "Volunteer",
      duration: "January - March 2021",
      description: "Volunteered for charitable causes, assisting both people and animals in vulnerable situations. I helped organize events, provide aid, and raise awareness to support the community in need."
    }
  ]
}

const education = {
  icon: '/assets/resume/education.svg',
  title: 'My education',
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, optio.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023"
    },
    {
      institution: "Codeacademy",
      degree: "Front-End Track",
      duration: "2022"
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2020 - 2021"
    },
    {
      institution: "Tech Institute",
      degree: "Certified Web Developer",
      duration: "2019"
    },
    {
      institution: "Design School",
      degree: "Diploma in Graphic Design",
      duration: "2016 - 2018"
    },
    {
      institution: "Community College",
      degree: "Associate Degree in Computer Science",
      duration: "2014 - 2016"
    },
  ]

}

const skills = {
  title: "My skils",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dolor.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5"
    },
    {
      icon: <FaCss3 />,
      name: "Css 3"
    },
    {
      icon: <FaJs />,
      name: "javascript"
    },
    {
      icon: <FaReact />,
      name: "React.js"
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js"
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css"
    },
    {
      icon: <FaNodeJs />,
      name: "node.js"
    },
    {
      icon: <FaFigma />,
      name: "figma"
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from "framer-motion"
import { ScrollArea } from "@/components/ui/scroll-area"
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold-">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold-">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[36px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                    {skills.skillList.map((skill, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li key={index} className="flex  items-center justify-center xl:justify-start gap-4">
                      <span className="text-xl">{item.fieldname}</span>
                      <span className="text-white/60">{item.fieldValue}</span>

                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume